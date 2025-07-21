"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, SlidersHorizontal, ArrowLeft } from "lucide-react"
import { MobileEventCard } from "@/components/mobile-event-card"
import { EventFilters } from "@/components/event-filters"
import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

const events = [
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
  {
    id: 4,
    title: "Marathon de Montréal",
    description: "Participez au plus grand marathon du Québec",
    date: "2024-09-01",
    time: "07:00",
    location: "Vieux-Port, Montréal",
    price: 0,
    category: "sport",
    rating: 4.7,
    attendees: 1250,
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function EventsPage() {
  const [showFilters, setShowFilters] = useState(false)
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background pt-14 pb-16">
      <div className="px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Link>
          <h1 className="text-xl font-bold">Tous les {t("events").toLowerCase()}</h1>
          <div></div>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder={t("searchPlaceholder")} className="pl-10 h-12" />
          </div>

          <div className="flex items-center justify-between">
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" className="bg-transparent">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  {t("filter")}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh]">
                <div className="py-4">
                  <EventFilters />
                </div>
              </SheetContent>
            </Sheet>

            <p className="text-sm text-muted-foreground">{events.length} événements trouvés</p>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer text-xs">
              {t("music")} ×
            </Badge>
            <Badge variant="secondary" className="cursor-pointer text-xs">
              Ce week-end ×
            </Badge>
            <Badge variant="secondary" className="cursor-pointer text-xs">
              Moins de 50€ ×
            </Badge>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event) => (
            <MobileEventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="bg-transparent">
            Charger plus d'événements
          </Button>
        </div>
      </div>
    </div>
  )
}
