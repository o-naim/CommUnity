"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Star, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  price: number
  category: string
  rating: number
  attendees: number
  image: string
}

interface MobileEventCardProps {
  event: Event
}

export function MobileEventCard({ event }: MobileEventCardProps) {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          width={400}
          height={200}
          className="w-full h-40 object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 hover:bg-background h-8 w-8"
        >
          <Heart className="w-4 h-4" />
        </Button>
        <Badge className="absolute top-2 left-2 text-xs">{t(event.category.toLowerCase() as any)}</Badge>
        <div className="absolute bottom-2 right-2 bg-background/90 rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{event.rating}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-base line-clamp-2 mb-2">{event.title}</h3>

        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">
              {new Date(event.date).toLocaleDateString("fr-FR")} • {event.time}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 flex-shrink-0" />
            <span>
              {event.attendees} {t("participants")}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="font-bold text-lg">{event.price === 0 ? t("free") : `${event.price}€`}</div>
          <Link href={`/events/${event.id}`}>
            <Button size="sm">{t("seeDetails")}</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
