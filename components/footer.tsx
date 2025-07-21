import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Calendar, Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">EventHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Découvrez et organisez les meilleurs événements près de chez vous. Rejoignez une communauté passionnée
              d'organisateurs et de participants.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <div className="space-y-2 text-sm">
              <Link href="/events" className="block text-muted-foreground hover:text-foreground transition-colors">
                Tous les événements
              </Link>
              <Link href="/organizer" className="block text-muted-foreground hover:text-foreground transition-colors">
                Organiser un événement
              </Link>
              <Link href="/dashboard" className="block text-muted-foreground hover:text-foreground transition-colors">
                Mon tableau de bord
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                À propos
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Catégories</h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/events?category=music"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Musique
              </Link>
              <Link
                href="/events?category=food"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Gastronomie
              </Link>
              <Link
                href="/events?category=tech"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Technologie
              </Link>
              <Link
                href="/events?category=sport"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Sport
              </Link>
              <Link
                href="/events?category=art"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Art & Culture
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Recevez les derniers événements et actualités directement dans votre boîte mail.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Votre email" className="flex-1" />
              <Button>
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              En vous abonnant, vous acceptez notre politique de confidentialité.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">© 2024 EventHub. Tous droits réservés.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Conditions d'utilisation
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
