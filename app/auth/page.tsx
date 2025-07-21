"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chrome, Apple, Mail, Lock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export default function AuthPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-muted/50 pt-14 pb-16">
      <div className="px-4 py-6">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Link>

        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">EventHub</h1>
            <p className="text-muted-foreground mt-2 text-sm">Rejoignez la communauté des passionnés d'événements</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">{t("login")}</TabsTrigger>
              <TabsTrigger value="register">{t("register")}</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("login")}</CardTitle>
                  <CardDescription className="text-sm">Connectez-vous à votre compte EventHub</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* OAuth Buttons */}
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full bg-transparent h-12" size="lg">
                      <Chrome className="w-5 h-5 mr-2" />
                      {t("continueWithGoogle")}
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent h-12" size="lg">
                      <Apple className="w-5 h-5 mr-2" />
                      {t("continueWithApple")}
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">{t("orContinueWith")}</span>
                    </div>
                  </div>

                  {/* Email Form */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">
                        {t("email")}
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input id="email" type="email" placeholder="votre@email.com" className="pl-10 h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm">
                        {t("password")}
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input id="password" type="password" placeholder="••••••••" className="pl-10 h-12" />
                      </div>
                    </div>
                    <div className="text-right">
                      <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                        {t("forgotPassword")}
                      </Link>
                    </div>
                    <Button className="w-full h-12" size="lg">
                      {t("login")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t("register")}</CardTitle>
                  <CardDescription className="text-sm">
                    Rejoignez EventHub et découvrez des événements incroyables
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* OAuth Buttons */}
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full bg-transparent h-12" size="lg">
                      <Chrome className="w-5 h-5 mr-2" />
                      {t("signUpWith")} Google
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent h-12" size="lg">
                      <Apple className="w-5 h-5 mr-2" />
                      {t("signUpWith")} Apple
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">{t("orContinueWith")}</span>
                    </div>
                  </div>

                  {/* Registration Form */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">
                        {t("fullName")}
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input id="name" type="text" placeholder="Jean Dupont" className="pl-10 h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-sm">
                        {t("email")}
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input id="register-email" type="email" placeholder="votre@email.com" className="pl-10 h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-sm">
                        {t("password")}
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input id="register-password" type="password" placeholder="••••••••" className="pl-10 h-12" />
                      </div>
                    </div>
                    <Button className="w-full h-12" size="lg">
                      {t("createMyAccount")}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      {t("byCreatingAccount")}{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        {t("termsOfService")}
                      </Link>{" "}
                      {t("and")}{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        {t("privacyPolicy")}
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
