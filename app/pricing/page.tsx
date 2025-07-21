"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Building, Zap, Target, BarChart3, Crown } from "lucide-react"
import Link from "next/link"
import { PricingCard } from "@/components/pricing-card"
import { userPlans, organizerPlans } from "@/lib/pricing"
import { useLanguage } from "@/hooks/use-language"

export default function PricingPage() {
  const [userPlan, setUserPlan] = useState<string>("free")
  const [organizerPlan, setOrganizerPlan] = useState<string>("basic")
  const { language, t } = useLanguage()

  const handleUserPlanSelect = (planId: string) => {
    setUserPlan(planId)
    // Here you would integrate with payment processor
    console.log("Selected user plan:", planId)
  }

  const handleOrganizerPlanSelect = (planId: string) => {
    setOrganizerPlan(planId)
    // Here you would integrate with payment processor
    console.log("Selected organizer plan:", planId)
  }

  return (
    <div className="min-h-screen bg-background pt-14 pb-16">
      <div className="px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === "en" ? "Back" : "Retour"}
          </Link>
          <h1 className="text-xl font-bold">{language === "en" ? "Pricing Plans" : "Plans Tarifaires"}</h1>
          <div></div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            {language === "en" ? "Choose the perfect plan for you" : "Choisissez le plan parfait pour vous"}
          </h2>
          <p className="text-muted-foreground text-sm">
            {language === "en"
              ? "Freemium model designed for universal accessibility and community engagement"
              : "Modèle freemium conçu pour l'accessibilité universelle et l'engagement communautaire"}
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {language === "en" ? "For Users" : "Pour Utilisateurs"}
            </TabsTrigger>
            <TabsTrigger value="organizers" className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              {language === "en" ? "For Organizers" : "Pour Organisateurs"}
            </TabsTrigger>
          </TabsList>

          {/* User Plans */}
          <TabsContent value="users" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">{language === "en" ? "User Plans" : "Plans Utilisateur"}</h3>
              <p className="text-sm text-muted-foreground">
                {language === "en"
                  ? "Access essential features for free, upgrade for advanced community engagement"
                  : "Accédez aux fonctionnalités essentielles gratuitement, passez au premium pour un engagement communautaire avancé"}
              </p>
            </div>

            <div className="space-y-4">
              {Object.values(userPlans).map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  onSelect={handleUserPlanSelect}
                  currentPlan={userPlan}
                  type="user"
                />
              ))}
            </div>

            {/* Premium Benefits */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Crown className="w-5 h-5 text-primary" />
                  {language === "en" ? "Why Go Premium?" : "Pourquoi Passer Premium ?"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">
                      {language === "en" ? "Create Your Community" : "Créez Votre Communauté"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {language === "en"
                        ? 'Start and manage interest groups like "Sunday Hikes" or "International Students"'
                        : 'Créez et gérez des groupes d\'intérêt comme "Randonnées du dimanche" ou "Étudiants internationaux"'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">
                      {language === "en" ? "Priority Access" : "Accès Prioritaire"}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {language === "en"
                        ? "Get early access to popular events and priority alerts"
                        : "Obtenez un accès anticipé aux événements populaires et des alertes prioritaires"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Organizer Plans */}
          <TabsContent value="organizers" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {language === "en" ? "Organizer Plans" : "Plans Organisateur"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "en"
                  ? "Flexible pricing model: pay per performance or choose a pro subscription"
                  : "Modèle tarifaire flexible : payez selon vos performances ou choisissez un abonnement pro"}
              </p>
            </div>

            <div className="space-y-4">
              {Object.values(organizerPlans).map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  onSelect={handleOrganizerPlanSelect}
                  currentPlan={organizerPlan}
                  type="organizer"
                />
              ))}
            </div>

            {/* Revenue Model Explanation */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200 dark:from-green-950 dark:to-blue-950 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  {language === "en" ? "Revenue Model" : "Modèle de Revenus"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="text-xs">
                      1
                    </Badge>
                    <div>
                      <h4 className="font-medium text-sm">
                        {language === "en" ? "Commission Model" : "Modèle Commission"}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {language === "en"
                          ? "Pay only when you sell tickets - 5-10% commission on paid events"
                          : "Payez seulement quand vous vendez des billets - Commission de 5-10% sur les événements payants"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="text-xs">
                      2
                    </Badge>
                    <div>
                      <h4 className="font-medium text-sm">
                        {language === "en" ? "Sponsored Visibility" : "Visibilité Sponsorisée"}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {language === "en"
                          ? "Promote your events to targeted audiences by neighborhood, age, or activity type"
                          : "Promouvez vos événements auprès d'audiences ciblées par quartier, âge ou type d'activité"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="text-xs">
                      3
                    </Badge>
                    <div>
                      <h4 className="font-medium text-sm">
                        {language === "en" ? "Pro Subscription" : "Abonnement Pro"}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {language === "en"
                          ? "Advanced tools, analytics, and reduced commissions for regular organizers"
                          : "Outils avancés, analyses et commissions réduites pour les organisateurs réguliers"}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">
              {language === "en" ? "Frequently Asked Questions" : "Questions Fréquentes"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-1">
                {language === "en" ? "Can I switch between plans anytime?" : "Puis-je changer de plan à tout moment ?"}
              </h4>
              <p className="text-xs text-muted-foreground">
                {language === "en"
                  ? "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
                  : "Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. Les changements prennent effet immédiatement."}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">
                {language === "en" ? "What payment methods do you accept?" : "Quels modes de paiement acceptez-vous ?"}
              </h4>
              <p className="text-xs text-muted-foreground">
                {language === "en"
                  ? "We accept all major credit cards, PayPal, Apple Pay, and Google Pay."
                  : "Nous acceptons toutes les cartes de crédit principales, PayPal, Apple Pay et Google Pay."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
