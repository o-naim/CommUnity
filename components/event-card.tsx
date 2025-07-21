import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Star, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-background/80 hover:bg-background">
          <Heart className="w-4 h-4" />
        </Button>
        <Badge className="absolute top-2 left-2">{event.category}</Badge>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg line-clamp-2">{event.title}</h3>
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{event.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>
            {new Date(event.date).toLocaleDateString("fr-FR")} à {event.time}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{event.attendees} participants</span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-2">
        <div className="text-lg font-bold">{event.price === 0 ? "Gratuit" : `${event.price}€`}</div>
        <Link href={`/events/${event.id}`}>
          <Button>Voir détails</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
