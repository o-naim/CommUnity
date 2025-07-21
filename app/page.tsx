"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Star, Search } from "lucide-react"
import Link from "next/link"
import { MobileEventCard } from "@/components/mobile-event-card"
import { useLanguage } from "@/hooks/use-language"

const featuredEvents = [
  {
    id: 1,
    title: "Concert de Jazz au Parc",
    description: "Une soirée magique avec les meilleurs artistes de jazz de la région",
    date: "2024-08-15",
    time: "20:00",
    location: "Parc Central, Montréal",
    price: 45,
    category: "music",
    rating: 4.8,
    attendees: 156,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Festival Gastronomique",
    description: "Découvrez les saveurs du monde avec nos chefs renommés",
    date: "2024-08-20",
    time: "12:00",
    location: "Place des Arts, Québec",
    price: 25,
    category: "food",
    rating: 4.6,
    attendees: 89,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Conférence Tech Innovation",
    description: "Les dernières tendances en intelligence artificielle et blockchain",
    date: "2024-08-25",
    time: "09:00",
    location: "Centre des Congrès, Toronto",
    price: 120,
    category: "tech",
    rating: 4.9,
    attendees: 234,
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background pt-14 pb-16">
      {/* Hero Section */}
      <section className="px-4 py-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4 leading-tight">{t("heroTitle")}</h1>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{t("heroSubtitle")}</p>

          {/* Search Bar */}
          <div className="space-y-3 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder={t("searchPlaceholder")} className="pl-10 h-12 text-base" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder={t("locationPlaceholder")} className="pl-10 h-12 text-base" />
            </div>
            <Button size="lg" className="w-full h-12">
              {t("search")}
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/events" className="w-full">
              <Button size="lg" className="w-full h-12">
                {t("exploreEvents")}
              </Button>
            </Link>
            <Link href="/organizer" className="w-full">
              <Button variant="outline" size="lg" className="w-full h-12 bg-transparent">
                {t("organizeEvent")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-4 py-8 bg-muted/50">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-xs text-muted-foreground">{t("events_count")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-xs text-muted-foreground">{t("users_count")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25</div>
              <div className="text-xs text-muted-foreground">{t("cities_count")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.8</div>
              <div className="text-xs text-muted-foreground">{t("average_rating")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold mb-1">{t("featuredEvents")}</h2>
              <p className="text-sm text-muted-foreground">{t("featuredEventsSubtitle")}</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {featuredEvents.map((event) => (
              <MobileEventCard key={event.id} event={event} />
            ))}
          </div>

          <Link href="/events" className="w-full">
            <Button variant="outline" className="w-full bg-transparent">
              {t("seeAllEvents")}
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-8 bg-muted/50">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-2">{t("whyChoose")}</h2>
            <p className="text-sm text-muted-foreground">{t("whyChooseSubtitle")}</p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-4">
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-base">{t("geolocation")}</CardTitle>
                <CardDescription className="text-sm">{t("geolocationDesc")}</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-base">{t("community")}</CardTitle>
                <CardDescription className="text-sm">{t("communityDesc")}</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <Star className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-base">{t("ratings")}</CardTitle>
                <CardDescription className="text-sm">{t("ratingsDesc")}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-bold mb-2">{t("readyToDiscover")}</h2>
          <p className="text-sm text-muted-foreground mb-6">{t("readyToDiscoverSubtitle")}</p>
          <div className="space-y-3">
            <Link href="/auth" className="w-full">
              <Button size="lg" className="w-full h-12">
                {t("createAccount")}
              </Button>
            </Link>
            <Link href="/events" className="w-full">
              <Button variant="outline" size="lg" className="w-full h-12 bg-transparent">
                {t("exploreEvents")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
