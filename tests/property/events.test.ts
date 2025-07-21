// jqwik property-based tests
import { Property, Arbitrary, integer, string, boolean } from "jqwik"
import { EventsAPI } from "@/lib/api/events"

describe("Events API Property Tests", () => {
  Property.check(
    "Event creation should always return valid event",
    Arbitrary.record({
      title: string().filter((s) => s.length > 0 && s.length <= 100),
      description: string().filter((s) => s.length <= 1000),
      price: integer(0, 10000),
      maxAttendees: integer(1, 1000).optional(),
      isPublic: boolean(),
    }),
    async (eventData) => {
      const event = await EventsAPI.createEvent(eventData, "test-organizer-id")

      expect(event.title).toBe(eventData.title)
      expect(event.description).toBe(eventData.description)
      expect(event.price).toBe(eventData.price)
      expect(event.isPublic).toBe(eventData.isPublic)
      expect(event.id).toBeDefined()
      expect(event.createdAt).toBeInstanceOf(Date)
    },
  )

  Property.check(
    "Event filtering should respect all filter parameters",
    Arbitrary.record({
      priceMin: integer(0, 100),
      priceMax: integer(100, 1000),
      search: string().filter((s) => s.length > 0),
    }),
    async (filters) => {
      const result = await EventsAPI.getEvents(filters)

      result.events.forEach((event) => {
        if (filters.priceMin !== undefined) {
          expect(event.price).toBeGreaterThanOrEqual(filters.priceMin)
        }
        if (filters.priceMax !== undefined) {
          expect(event.price).toBeLessThanOrEqual(filters.priceMax)
        }
        if (filters.search) {
          const searchLower = filters.search.toLowerCase()
          const titleMatch = event.title.toLowerCase().includes(searchLower)
          const descMatch = event.description.toLowerCase().includes(searchLower)
          expect(titleMatch || descMatch).toBe(true)
        }
      })
    },
  )
})
