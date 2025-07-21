"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, Calendar, Clock, TrendingUp } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"

const recentSearches = ["Concert jazz", "Festival été", "Conférence tech"]
const trendingEvents = ["Festival Osheaga", "Just for Laughs", "Grand Prix F1"]
const popularCategories = ["music", "food", "tech", "sport", "art", "business"]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background pt-14 pb-16">
      <div className="px-4 py-6">
        {/* Search Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-4">Recherche</h1>

          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder={t("locationPlaceholder")} className="pl-10 h-12 text-base" />
            </div>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button variant="outline" size="sm" className="whitespace-nowrap bg-transparent">
              <Calendar className="w-4 h-4 mr-1" />
              Aujourd'hui
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap bg-transparent">
              <Clock className="w-4 h-4 mr-1" />
              Ce soir
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap bg-transparent">
              Gratuit
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap bg-transparent">
              Près de moi
            </Button>
          </div>
        </div>

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Recherches récentes</h2>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <Card key={index} className="cursor-pointer hover:bg-accent/50">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{search}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Trending */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Tendances
          </h2>
          <div className="space-y-2">
            {trendingEvents.map((event, index) => (
              <Card key={index} className="cursor-pointer hover:bg-accent/50">
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{event}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Catégories populaires</h2>
          <div className="grid grid-cols-2 gap-3">
            {popularCategories.map((category) => (
              <Card key={category} className="cursor-pointer hover:bg-accent/50">
                <CardContent className="p-4 text-center">
                  <div className="text-sm font-medium">{t(category as any)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
