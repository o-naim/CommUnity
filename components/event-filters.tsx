"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Filter, X } from "lucide-react"
import { useState } from "react"

export function EventFilters() {
  const [priceRange, setPriceRange] = useState([0, 200])
  const [distanceRange, setDistanceRange] = useState([5])
  const [selectedDate, setSelectedDate] = useState<Date>()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filtres
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div className="space-y-2">
          <Label>Catégorie</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Toutes les catégories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les catégories</SelectItem>
              <SelectItem value="music">Musique</SelectItem>
              <SelectItem value="food">Gastronomie</SelectItem>
              <SelectItem value="tech">Technologie</SelectItem>
              <SelectItem value="sport">Sport</SelectItem>
              <SelectItem value="art">Art & Culture</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Filter */}
        <div className="space-y-2">
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? selectedDate.toLocaleDateString("fr-FR") : "Sélectionner une date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <Label>Prix (€)</Label>
          <div className="px-2">
            <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={5} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>{priceRange[0]}€</span>
              <span>{priceRange[1]}€</span>
            </div>
          </div>
        </div>

        {/* Distance */}
        <div className="space-y-2">
          <Label>Distance (km)</Label>
          <div className="px-2">
            <Slider value={distanceRange} onValueChange={setDistanceRange} max={50} step={1} className="w-full" />
            <div className="text-sm text-muted-foreground mt-1">Dans un rayon de {distanceRange[0]} km</div>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label>Lieu</Label>
          <Input placeholder="Ville ou code postal" />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Button className="flex-1">Appliquer les filtres</Button>
          <Button variant="outline" size="icon">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
