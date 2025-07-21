// REST API for Events
import { prisma } from "@/lib/prisma"
import { type EventCategory, EventStatus } from "@prisma/client"

export interface EventFilters {
  category?: EventCategory
  location?: string
  priceMin?: number
  priceMax?: number
  dateFrom?: Date
  dateTo?: Date
  isPremiumOnly?: boolean
  search?: string
}

export class EventsAPI {
  static async getEvents(filters: EventFilters = {}, page = 1, limit = 20) {
    const where: any = {
      status: EventStatus.PUBLISHED,
      startDate: {
        gte: new Date(),
      },
    }

    if (filters.category) {
      where.category = filters.category
    }

    if (filters.location) {
      where.location = {
        contains: filters.location,
        mode: "insensitive",
      }
    }

    if (filters.priceMin !== undefined || filters.priceMax !== undefined) {
      where.price = {}
      if (filters.priceMin !== undefined) where.price.gte = filters.priceMin
      if (filters.priceMax !== undefined) where.price.lte = filters.priceMax
    }

    if (filters.dateFrom || filters.dateTo) {
      where.startDate = {}
      if (filters.dateFrom) where.startDate.gte = filters.dateFrom
      if (filters.dateTo) where.startDate.lte = filters.dateTo
    }

    if (filters.isPremiumOnly !== undefined) {
      where.isPremiumOnly = filters.isPremiumOnly
    }

    if (filters.search) {
      where.OR = [
        { title: { contains: filters.search, mode: "insensitive" } },
        { description: { contains: filters.search, mode: "insensitive" } },
      ]
    }

    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        include: {
          organizer: {
            select: { id: true, name: true, avatar: true },
          },
          _count: {
            select: { registrations: true, reviews: true },
          },
        },
        orderBy: { startDate: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.event.count({ where }),
    ])

    return {
      events,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    }
  }

  static async getEventById(id: string, userId?: string) {
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        organizer: {
          select: { id: true, name: true, avatar: true },
        },
        registrations: userId
          ? {
              where: { userId },
              select: { id: true, status: true },
            }
          : false,
        reviews: {
          include: {
            user: {
              select: { id: true, name: true, avatar: true },
            },
          },
          orderBy: { createdAt: "desc" },
          take: 10,
        },
        _count: {
          select: { registrations: true, reviews: true, favorites: true },
        },
      },
    })

    if (!event) {
      throw new Error("Event not found")
    }

    // Calculate average rating
    const avgRating = await prisma.review.aggregate({
      where: { eventId: id },
      _avg: { rating: true },
    })

    return {
      ...event,
      averageRating: avgRating._avg.rating || 0,
      isRegistered: userId ? event.registrations.length > 0 : false,
    }
  }

  static async createEvent(data: any, organizerId: string) {
    return prisma.event.create({
      data: {
        ...data,
        organizerId,
      },
      include: {
        organizer: {
          select: { id: true, name: true, avatar: true },
        },
      },
    })
  }

  static async registerForEvent(eventId: string, userId: string) {
    // Check if event exists and has capacity
    const event = await prisma.event.findUnique({
      where: { id: eventId },
      include: {
        _count: { select: { registrations: true } },
      },
    })

    if (!event) {
      throw new Error("Event not found")
    }

    if (event.maxAttendees && event._count.registrations >= event.maxAttendees) {
      throw new Error("Event is full")
    }

    // Check if user is already registered
    const existingRegistration = await prisma.eventRegistration.findUnique({
      where: {
        userId_eventId: { userId, eventId },
      },
    })

    if (existingRegistration) {
      throw new Error("Already registered for this event")
    }

    return prisma.eventRegistration.create({
      data: {
        userId,
        eventId,
        status: "CONFIRMED",
        paymentStatus: event.price > 0 ? "PENDING" : "COMPLETED",
      },
    })
  }
}
