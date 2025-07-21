import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Découvrez les meilleurs événements près de chez vous
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Concerts, festivals, conférences, ateliers... Trouvez l'événement parfait et achetez vos billets en quelques
            clics
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-background rounded-lg shadow-lg border">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Rechercher un événement..." className="pl-10 border-0 focus-visible:ring-0" />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Ville ou code postal..." className="pl-10 border-0 focus-visible:ring-0" />
              </div>
              <Button size="lg" className="px-8">
                Rechercher
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button size="lg" className="w-full sm:w-auto">
                Explorer les événements
              </Button>
            </Link>
            <Link href="/organizer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Organiser un événement
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
