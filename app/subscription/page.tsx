"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Crown, CreditCard, Calendar, Bell, Users, Zap, Settings, Download } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export default function SubscriptionPage() {
  const [notifications, setNotifications] = useState(true)
  const [autoRenew, setAutoRenew] = useState(true)
  const { language, t } = useLanguage()

  // Mock user subscription data
  const subscription = {
    plan: "premium",
    status: "active",
    nextBilling: "2024-09-15",
    price: 4.99,
    currency: "CAD",
  }

  return (
    <div className="min-h-screen bg-background pt-14 pb-16">
      <div className="px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/dashboard" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === "en" ? "Back" : "Retour"}
          </Link>
          <h1 className="text-xl font-bold">{language === "en" ? "My Subscription" : "Mon Abonnement"}</h1>
          <div></div>
        </div>

        {/* Current Plan */}
        <Card className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Plan Premium</CardTitle>
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                {language === "en" ? "Active" : "Actif"}
              </Badge>
            </div>
            <CardDescription>
              {language === "en"
                ? "Access to all premium features and exclusive events"
                : "Accès à toutes les fonctionnalités premium et événements exclusifs"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {language === "en" ? "Monthly Price" : "Prix Mensuel"}
              </span>
              <span className="font-semibold">{subscription.price}$ CAD</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {language === "en" ? "Next Billing" : "Prochaine Facturation"}
              </span>
              <span className="font-semibold">
                {new Date(subscription.nextBilling).toLocaleDateString(language === "en" ? "en-CA" : "fr-CA")}
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <Label htmlFor="auto-renew" className="text-sm">
                  {language === "en" ? "Auto-renewal" : "Renouvellement automatique"}
                </Label>
              </div>
              <Switch id="auto-renew" checked={autoRenew} onCheckedChange={setAutoRenew} />
            </div>
          </CardContent>
        </Card>

        {/* Premium Features */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">
              {language === "en" ? "Your Premium Features" : "Vos Fonctionnalités Premium"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-medium text-sm">
                  {language === "en" ? "Create Interest Groups" : "Créer des Groupes d'Intérêt"}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {language === "en"
                    ? "Start and manage your own community groups"
                    : "Créez et gérez vos propres groupes communautaires"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-medium text-sm">
                  {language === "en" ? "Priority Alerts" : "Alertes Prioritaires"}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {language === "en"
                    ? "Get notified first about events matching your interests"
                    : "Soyez notifié en premier des événements correspondant à vos intérêts"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-medium text-sm">{language === "en" ? "Early Access" : "Accès Anticipé"}</h4>
                <p className="text-xs text-muted-foreground">
                  {language === "en"
                    ? "Register for popular events before they fill up"
                    : "Inscrivez-vous aux événements populaires avant qu'ils soient complets"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5" />
              {language === "en" ? "Notification Settings" : "Paramètres de Notification"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="priority-alerts" className="text-sm font-medium">
                  {language === "en" ? "Priority Alerts" : "Alertes Prioritaires"}
                </Label>
                <p className="text-xs text-muted-foreground">
                  {language === "en"
                    ? "Receive notifications for new events matching your preferences"
                    : "Recevez des notifications pour les nouveaux événements correspondant à vos préférences"}
                </p>
              </div>
              <Switch id="priority-alerts" checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="early-access" className="text-sm font-medium">
                  {language === "en" ? "Early Access Notifications" : "Notifications d'Accès Anticipé"}
                </Label>
                <p className="text-xs text-muted-foreground">
                  {language === "en"
                    ? "Get notified when early registration opens"
                    : "Soyez notifié quand l'inscription anticipée ouvre"}
                </p>
              </div>
              <Switch id="early-access" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              {language === "en" ? "Payment Method" : "Mode de Paiement"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div>
                  <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                  <p className="text-xs text-muted-foreground">Expire 12/26</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                {language === "en" ? "Change" : "Modifier"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Billing History */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Download className="w-5 h-5" />
              {language === "en" ? "Billing History" : "Historique de Facturation"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="text-sm font-medium">Premium - Août 2024</p>
                <p className="text-xs text-muted-foreground">15 août 2024</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">4,99$ CAD</p>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                  {language === "en" ? "Download" : "Télécharger"}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="text-sm font-medium">Premium - Juillet 2024</p>
                <p className="text-xs text-muted-foreground">15 juillet 2024</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">4,99$ CAD</p>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                  {language === "en" ? "Download" : "Télécharger"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Link href="/pricing" className="w-full">
            <Button variant="outline" className="w-full bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              {language === "en" ? "Change Plan" : "Changer de Plan"}
            </Button>
          </Link>
          <Button variant="destructive" className="w-full">
            {language === "en" ? "Cancel Subscription" : "Annuler l'Abonnement"}
          </Button>
        </div>

        {/* Cancellation Policy */}
        <Card className="mt-6 bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-xs text-muted-foreground text-center">
              {language === "en"
                ? "You can cancel your subscription at any time. Your premium features will remain active until the end of your current billing period."
                : "Vous pouvez annuler votre abonnement à tout moment. Vos fonctionnalités premium resteront actives jusqu'à la fin de votre période de facturation actuelle."}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
