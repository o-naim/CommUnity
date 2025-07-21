"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Upload, Plus, X, Users, DollarSign, ImageIcon } from "lucide-react"
import { useState } from "react"

export default function OrganizerPage() {
  const [eventDate, setEventDate] = useState<Date>()
  const [tags, setTags] = useState<string[]>(["Musique", "Concert"])
  const [newTag, setNewTag] = useState("")

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Créer un nouvel événement</h1>
            <p className="text-muted-foreground">Partagez votre passion et créez des expériences inoubliables</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Informations de base</CardTitle>
                  <CardDescription>Les détails essentiels de votre événement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Titre de l'événement *</Label>
                    <Input id="title" placeholder="Ex: Concert de Jazz au Parc" className="text-lg" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea id="description" placeholder="Décrivez votre événement en détail..." rows={4} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Catégorie *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="music">Musique</SelectItem>
                          <SelectItem value="food">Gastronomie</SelectItem>
                          <SelectItem value="tech">Technologie</SelectItem>
                          <SelectItem value="sport">Sport</SelectItem>
                          <SelectItem value="art">Art & Culture</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Type d'événement</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Type d'événement" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Privé</SelectItem>
                          <SelectItem value="invite">Sur invitation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer">
                          {tag}
                          <X className="w-3 h-3 ml-1" onClick={() => removeTag(tag)} />
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Ajouter un tag..."
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addTag()}
                      />
                      <Button type="button" variant="outline" onClick={addTag}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time */}
              <Card>
                <CardHeader>
                  <CardTitle>Date et horaires</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Date de l'événement *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {eventDate ? eventDate.toLocaleDateString("fr-FR") : "Sélectionner une date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={eventDate} onSelect={setEventDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Fuseau horaire</Label>
                      <Select defaultValue="america/montreal">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="america/montreal">America/Montreal</SelectItem>
                          <SelectItem value="america/toronto">America/Toronto</SelectItem>
                          <SelectItem value="america/vancouver">America/Vancouver</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-time">Heure de début *</Label>
                      <Input id="start-time" type="time" defaultValue="20:00" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="end-time">Heure de fin</Label>
                      <Input id="end-time" type="time" defaultValue="23:00" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle>Lieu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="venue">Nom du lieu</Label>
                    <Input id="venue" placeholder="Ex: Parc Central" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse complète *</Label>
                    <Input id="address" placeholder="1001 Rue Sherbrooke O, Montréal, QC H3A 1G5" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville *</Label>
                      <Input id="city" placeholder="Montréal" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="province">Province *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Province" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="qc">Québec</SelectItem>
                          <SelectItem value="on">Ontario</SelectItem>
                          <SelectItem value="bc">Colombie-Britannique</SelectItem>
                          <SelectItem value="ab">Alberta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postal">Code postal</Label>
                      <Input id="postal" placeholder="H3A 1G5" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Images et médias</CardTitle>
                  <CardDescription>Ajoutez des images pour rendre votre événement plus attractif</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">Image principale</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Glissez-déposez une image ou cliquez pour parcourir
                    </p>
                    <Button variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Choisir une image
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Tarification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="free-event" />
                    <Label htmlFor="free-event">Événement gratuit</Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Prix du billet (CAD)</Label>
                    <Input id="price" type="number" placeholder="45.00" min="0" step="0.01" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currency">Devise</Label>
                    <Select defaultValue="cad">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cad">CAD - Dollar canadien</SelectItem>
                        <SelectItem value="usd">USD - Dollar américain</SelectItem>
                        <SelectItem value="eur">EUR - Euro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Capacity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Capacité
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="max-attendees">Nombre maximum de participants</Label>
                    <Input id="max-attendees" type="number" placeholder="500" min="1" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="unlimited-capacity" />
                    <Label htmlFor="unlimited-capacity">Capacité illimitée</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="allow-comments">Autoriser les commentaires</Label>
                    <Switch id="allow-comments" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-attendees">Afficher la liste des participants</Label>
                    <Switch id="show-attendees" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="send-reminders">Envoyer des rappels</Label>
                    <Switch id="send-reminders" defaultChecked />
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="space-y-2">
                <Button className="w-full" size="lg">
                  Publier l'événement
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Enregistrer comme brouillon
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
