import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  MapPin,
  Users,
  Heart,
  Settings,
  Plus,
  TrendingUp,
  Clock,
  Ticket,
  Crown,
  CreditCard,
} from "lucide-react"
import Link from "next/link"
import { PremiumBadge } from "@/components/premium-badge"

const upcomingEvents = [
  {
    id: 1,
    title: "Concert de Jazz au Parc",
    date: "2024-08-15",
    time: "20:00",
    location: "Parc Central, Montréal",
    status: "confirmed",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    title: "Festival Gastronomique",
    date: "2024-08-20",
    time: "12:00",
    location: "Place des Arts, Québec",
    status: "pending",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const myEvents = [
  {
    id: 1,
    title: "Atelier de Photographie",
    date: "2024-08-10",
    attendees: 25,
    maxAttendees: 30,
    revenue: 750,
    status: "active",
  },
  {
    id: 2,
    title: "Conférence Marketing Digital",
    date: "2024-07-28",
    attendees: 120,
    maxAttendees: 150,
    revenue: 2400,
    status: "completed",
  },
]

const favoriteEvents = [
  {
    id: 1,
    title: "Festival de Musique Électronique",
    date: "2024-09-15",
    location: "Montréal",
    price: 85,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    title: "Salon du Livre",
    date: "2024-09-22",
    location: "Québec",
    price: 0,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Tableau de bord</h1>
            <p className="text-muted-foreground">Gérez vos événements et découvrez de nouvelles expériences</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Link href="/organizer">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Créer un événement
              </Button>
            </Link>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Événements à venir</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 depuis le mois dernier</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                Mes événements
                <PremiumBadge size="sm" />
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">145 participants au total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Favoris</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Événements sauvegardés</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenus</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,150€</div>
              <p className="text-xs text-muted-foreground">+12% ce mois-ci</p>
            </CardContent>
          </Card>
        </div>

        {/* Premium Status */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Plan Premium</CardTitle>
                <PremiumBadge />
              </div>
              <Link href="/subscription">
                <Button variant="outline" size="sm">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Gérer
                </Button>
              </Link>
            </div>
            <CardDescription>Accès à toutes les fonctionnalités premium et événements exclusifs</CardDescription>
          </CardHeader>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList>
            <TabsTrigger value="upcoming">Événements à venir</TabsTrigger>
            <TabsTrigger value="my-events">Mes événements</TabsTrigger>
            <TabsTrigger value="favorites">Favoris</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Prochains événements</CardTitle>
                <CardDescription>Les événements auxquels vous participez bientôt</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(event.date).toLocaleDateString("fr-FR")} à {event.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="truncate">{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={event.status === "confirmed" ? "default" : "secondary"}>
                          {event.status === "confirmed" ? "Confirmé" : "En attente"}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Ticket className="w-4 h-4 mr-1" />
                          Billet
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mes événements organisés</CardTitle>
                <CardDescription>Gérez et suivez les performances de vos événements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>{new Date(event.date).toLocaleDateString("fr-FR")}</span>
                          <span>
                            {event.attendees}/{event.maxAttendees} participants
                          </span>
                          <span>{event.revenue}€ de revenus</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={event.status === "active" ? "default" : "secondary"}>
                          {event.status === "active" ? "Actif" : "Terminé"}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Gérer
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Événements favoris</CardTitle>
                <CardDescription>Les événements que vous avez sauvegardés</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {favoriteEvents.map((event) => (
                    <div key={event.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="w-12 h-12 bg-muted rounded-lg flex-shrink-0">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>{new Date(event.date).toLocaleDateString("fr-FR")}</span>
                          <span>{event.location}</span>
                          <span>{event.price === 0 ? "Gratuit" : `${event.price}€`}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="w-4 h-4 mr-1 fill-red-500 text-red-500" />
                        </Button>
                        <Button size="sm">Voir détails</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Historique des événements</CardTitle>
                <CardDescription>Les événements auxquels vous avez participé</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-semibold mb-2">Aucun événement passé</h3>
                  <p className="text-muted-foreground mb-4">Vos événements passés apparaîtront ici</p>
                  <Link href="/events">
                    <Button>Explorer les événements</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
