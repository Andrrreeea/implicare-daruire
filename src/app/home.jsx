"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Calendar, ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-background to-accent/10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Împreună pentru comunitate
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                  Asociația <span className="text-secondary">Implicare</span> și{" "}
                  <span className="text-accent">Dăruire</span> Cugir 2023
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Sprijinim copiii, persoanele cu dizabilități și familiile vulnerabile din Cugir prin acțiuni
                  concrete: campanii sociale, evenimente educaționale și proiecte de sănătate publică.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Link href="/proiecte">
                    Vezi activitățile noastre
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Contactează-ne
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/logo.png"
                  alt="Asociația Implicare și Dăruire Cugir"
                  width={400}
                  height={400}
                  className="mx-auto"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Misiunea noastră</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Să promovăm incluziunea, sănătatea și solidaritatea în comunitatea din Cugir, prin proiecte
              realizate împreună cu voluntarii, partenerii locali și instituțiile publice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Implicare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Acțiuni de sprijin pentru copii și familii vulnerabile, inițiate împreună cu voluntari din comunitate.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Comunitate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Construim parteneriate locale și organizăm evenimente deschise tuturor.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Ne orientăm către rezultate clare: sprijin direct, prevenție și educație pentru sănătate.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
<section className="py-20 px-4 bg-card/50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Activități recente</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
        Cele mai recente inițiative desfășurate de asociație, alături de voluntari, parteneri și comunitatea din Cugir.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Ziua Mondială a Diabetului */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-primary" />
            <Badge variant="outline">14 noiembrie 2025</Badge>
          </div>
          <CardTitle className="text-xl">Ziua Mondială a Diabetului – Ediția a IV-a</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            Eveniment dedicat informării și prevenției, cu activități educative și sprijin personalizat pentru
            participanți, contribuind la creșterea conștientizării în comunitate.
          </CardDescription>
        </CardContent>
      </Card>

      {/* Activitate cu copiii de Paste */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-secondary" />
              <Badge variant="outline">12 aprilie 2025</Badge>
            </div>
            <CardTitle className="text-xl">Activitate cu copiii de Paște 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Activitate specială dedicată copiilor, cu jocuri, ateliere creative și momente de bucurie.
              Cei mici au primit surprize tematice și au petrecut timp de calitate alături de voluntari.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Incepere an scolar */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-accent" />
              <Badge variant="outline">28 septembrie 2025</Badge>
            </div>
            <CardTitle className="text-xl">Începere an școlar – septembrie 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Campanie de sprijin pentru elevi, prin achiziționarea și distribuirea de rechizite și materiale
              educaționale, pentru ca fiecare copil să înceapă școala cu cele necesare.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg">
          <Link href="/proiecte">
            Vezi toate proiectele
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Alătură-te misiunii noastre</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Vrei să te implici ca voluntar, partener sau donator? Scrie-ne și îți răspundem rapid cu pașii următori.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Trimite-ne un mesaj
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/despre-noi">Află mai multe despre noi</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
