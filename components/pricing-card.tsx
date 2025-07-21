"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface PricingCardProps {
  plan: {
    id: string
    name: string
    nameEn: string
    price: number
    currency: string
    interval: string
    popular?: boolean
    priceRange?: string
    commission?: string
    features: string[]
    featuresEn: string[]
  }
  onSelect: (planId: string) => void
  currentPlan?: string
  type?: "user" | "organizer"
}

export function PricingCard({ plan, onSelect, currentPlan, type = "user" }: PricingCardProps) {
  const { language } = useLanguage()
  const isCurrentPlan = currentPlan === plan.id
  const features = language === "en" ? plan.featuresEn : plan.features
  const planName = language === "en" ? plan.nameEn : plan.name

  const formatPrice = () => {
    if (plan.price === 0 && plan.commission) {
      return plan.commission
    }
    if (plan.priceRange) {
      return `${plan.priceRange}$`
    }
    if (plan.price === 0) {
      return language === "en" ? "Free" : "Gratuit"
    }
    return `${plan.price}$`
  }

  const formatInterval = () => {
    if (plan.interval === "month") {
      return language === "en" ? "/month" : "/mois"
    }
    if (plan.interval === "campaign") {
      return language === "en" ? "/campaign" : "/campagne"
    }
    return ""
  }

  return (
    <Card
      className={`relative ${plan.popular ? "border-primary shadow-lg" : ""} ${isCurrentPlan ? "bg-accent/50" : ""}`}
    >
      {plan.popular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
          <Star className="w-3 h-3 mr-1" />
          {language === "en" ? "Popular" : "Populaire"}
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-lg">{planName}</CardTitle>
        <div className="space-y-1">
          <div className="text-3xl font-bold">
            {formatPrice()}
            <span className="text-base font-normal text-muted-foreground">{formatInterval()}</span>
          </div>
          {plan.commission && (
            <CardDescription className="text-xs">
              {language === "en" ? "Commission on ticket sales" : "Commission sur la billetterie"}
            </CardDescription>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          className="w-full"
          variant={isCurrentPlan ? "secondary" : "default"}
          onClick={() => onSelect(plan.id)}
          disabled={isCurrentPlan}
        >
          {isCurrentPlan
            ? language === "en"
              ? "Current Plan"
              : "Plan Actuel"
            : language === "en"
              ? "Choose Plan"
              : "Choisir ce Plan"}
        </Button>
      </CardContent>
    </Card>
  )
}
