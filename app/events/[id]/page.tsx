import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Share2,
  Heart,
  Clock,
  CreditCard,
  MessageCircle,
  Flag,
  ChevronLeft,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for the event
const event = {
  id: 1,
  title: "Concert de Jazz au Parc",
  description:
    "Une soirée magique avec les meilleurs artistes de jazz de la région. Venez découvrir des mélodies envoûtantes dans un cadre exceptionnel au cœur du Parc Central. Cette soirée promet d'être inoubliable avec des performances de musiciens renommés et une ambiance chaleureuse.",
  date: "2024-08-15",
  time: "20:00",
  endTime: "23:00",
  location: "Parc Central, Montréal",
  address: "1001 Rue Sherbrooke O, Montréal, QC H3A 1G5",
  price: 45,
  category: "Musique",
  rating: 4.8,
  attendees: 156,
  maxAttendees: 500,
  image: "/placeholder.svg?height=400&width=800",
  organizer: {
    name: "Jazz Montréal",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
  },
  tags: ["Jazz", "Musique live", "Plein air", "Soirée"],
  amenities: ["Parking gratuit", "Restauration sur place", "Accessible PMR", "Vestiaire"],
}

const reviews = [
  {
    id: 1,
    user: "Marie L.",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 5,
    comment: "Événement fantastique ! L'ambiance était parfaite et les musiciens exceptionnels.",
    date: "Il y a 2 jours",
  },
  {
    id: 2,
    user: "Pierre D.",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4,
    comment: "Très belle soirée, je recommande vivement. Seul bémol : un peu de monde.",
    date: "Il y a 1 semaine",
  },
]

export default function EventDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/events" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Retour aux événements
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Image */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge>{event.category}</Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="secondary" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Event Info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{event.rating}</span>
                  <span className="text-muted-foreground">({event.attendees} avis)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>
                    {event.attendees}/{event.maxAttendees} participants
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList>
                <TabsTrigger value="details">Détails</TabsTrigger>
                <TabsTrigger value="reviews">Avis ({reviews.length})</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations pratiques</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">
                            {new Date(event.date).toLocaleDateString("fr-FR", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {event.time} - {event.endTime}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{event.location}</div>
                          <div className="text-sm text-muted-foreground">{event.address}</div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Services inclus</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {event.amenities.map((amenity) => (
                          <div key={amenity} className="text-sm text-muted-foreground">
                            • {amenity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Organisateur</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={event.organizer.avatar || "/placeholder.svg"} />
                        <AvatarFallback>JM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{event.organizer.name}</span>
                          {event.organizer.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Vérifié
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">Organisateur d'événements musicaux depuis 2018</p>
                      </div>
                      <Button variant="outline">Contacter</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={review.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{review.user[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{review.user}</span>
                            <div className="flex items-center">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-sm">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="discussion">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <MessageCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="font-semibold mb-2">Rejoignez la discussion</h3>
                      <p className="text-muted-foreground mb-4">
                        Connectez-vous avec d'autres participants et partagez vos attentes
                      </p>
                      <Button>Rejoindre le groupe de discussion</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{event.price === 0 ? "Gratuit" : `${event.price}€`}</div>
                    <div className="text-sm text-muted-foreground">par personne</div>
                  </div>
                  <Badge variant="secondary">{event.maxAttendees - event.attendees} places restantes</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{new Date(event.date).toLocaleDateString("fr-FR")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>
                      {event.time} - {event.endTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Acheter un billet
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Ajouter au calendrier
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                  Annulation gratuite jusqu'à 24h avant l'événement
                </div>
              </CardContent>
            </Card>

            {/* Report Card */}
            <Card>
              <CardContent className="pt-6">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                  <Flag className="w-4 h-4 mr-2" />
                  Signaler cet événement
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
