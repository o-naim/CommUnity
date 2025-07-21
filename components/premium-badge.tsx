"use client"

import { Badge } from "@/components/ui/badge"
import { Crown } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface PremiumBadgeProps {
  size?: "sm" | "md" | "lg"
  showIcon?: boolean
}

export function PremiumBadge({ size = "sm", showIcon = true }: PremiumBadgeProps) {
  const { language } = useLanguage()

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2",
  }

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  return (
    <Badge className={`bg-gradient-to-r from-yellow-400 to-orange-500 text-white ${sizeClasses[size]}`}>
      {showIcon && <Crown className={`${iconSizes[size]} mr-1`} />}
      {language === "en" ? "Premium" : "Premium"}
    </Badge>
  )
}
