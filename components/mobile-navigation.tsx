"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Calendar, Search, Plus, User, Menu, Bell, Heart, Settings, LogOut, Crown } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { LanguageSwitcher } from "./language-switcher"

export function MobileNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const { t } = useLanguage()

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b h-14 flex items-center px-4">
        <Link href="/" className="flex items-center space-x-2 flex-1">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">CommUnity</span>
        </Link>

        <div className="flex items-center space-x-2">
          <LanguageSwitcher />

          {isLoggedIn && (
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center p-0 text-xs">3</Badge>
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                {isLoggedIn ? (
                  <>
                    {/* User Profile */}
                    <div className="flex items-center space-x-3 p-4 border-b">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">Jean Dupont</p>
                        <p className="text-sm text-muted-foreground truncate">jean.dupont@email.com</p>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 py-4">
                      <div className="space-y-1">
                        <Link
                          href="/dashboard"
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-accent rounded-lg mx-2"
                        >
                          <User className="w-5 h-5" />
                          <span>{t("dashboard")}</span>
                        </Link>
                        <Link
                          href="/subscription"
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-accent rounded-lg mx-2"
                        >
                          <Crown className="w-5 h-5" />
                          <span>Abonnement Premium</span>
                        </Link>
                        <Link
                          href="/dashboard?tab=favorites"
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-accent rounded-lg mx-2"
                        >
                          <Heart className="w-5 h-5" />
                          <span>Mes favoris</span>
                        </Link>
                        <Link
                          href="/organizer"
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-accent rounded-lg mx-2"
                        >
                          <Plus className="w-5 h-5" />
                          <span>{t("organizeEvent")}</span>
                        </Link>
                        <div className="border-t my-2"></div>
                        <Link
                          href="/settings"
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-accent rounded-lg mx-2"
                        >
                          <Settings className="w-5 h-5" />
                          <span>Paramètres</span>
                        </Link>
                      </div>
                    </div>

                    {/* Logout */}
                    <div className="border-t p-4">
                      <Button variant="ghost" className="w-full justify-start" onClick={() => setIsLoggedIn(false)}>
                        <LogOut className="w-4 h-4 mr-2" />
                        {t("logout")}
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="p-4 space-y-4">
                    <Link href="/auth">
                      <Button className="w-full">{t("login")}</Button>
                    </Link>
                    <Link href="/auth">
                      <Button variant="outline" className="w-full bg-transparent">
                        {t("register")}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
        <div className="flex items-center justify-around h-16 px-2">
          <Link href="/" className="flex flex-col items-center justify-center flex-1 py-2">
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs">Accueil</span>
          </Link>
          <Link href="/events" className="flex flex-col items-center justify-center flex-1 py-2">
            <Calendar className="w-5 h-5 mb-1" />
            <span className="text-xs">{t("events")}</span>
          </Link>
          <Link href="/search" className="flex flex-col items-center justify-center flex-1 py-2">
            <Search className="w-5 h-5 mb-1" />
            <span className="text-xs">Recherche</span>
          </Link>
          <Link href="/organizer" className="flex flex-col items-center justify-center flex-1 py-2">
            <Plus className="w-5 h-5 mb-1" />
            <span className="text-xs">{t("organize")}</span>
          </Link>
          <Link href="/dashboard" className="flex flex-col items-center justify-center flex-1 py-2">
            <User className="w-5 h-5 mb-1" />
            <span className="text-xs">Profil</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
