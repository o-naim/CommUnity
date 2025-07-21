"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Lock } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

interface PremiumFeatureGateProps {
  title: string
  description: string
  feature: string
  children?: React.ReactNode
}

export function PremiumFeatureGate({ title, description, feature, children }: PremiumFeatureGateProps) {
  const { language } = useLanguage()

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="absolute top-4 right-4">
        <Crown className="w-6 h-6 text-primary/60" />
      </div>

      <CardHeader className="relative">
        <div className="flex items-center gap-2 mb-2">
          <Lock className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground font-medium">
            {language === "en" ? "Premium Feature" : "Fonctionnalité Premium"}
          </span>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="relative space-y-4">
        {children && <div className="opacity-50 pointer-events-none">{children}</div>}

        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            {language === "en"
              ? `Upgrade to Premium to unlock ${feature}`
              : `Passez au Premium pour débloquer ${feature}`}
          </p>
          <Link href="/pricing">
            <Button className="w-full">
              <Crown className="w-4 h-4 mr-2" />
              {language === "en" ? "Upgrade to Premium" : "Passer au Premium"}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
