"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, Target, Award, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DollarSign } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">Despre noi</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                Cine suntem și ce ne motivează
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Asociația Implicare și Dăruire Cugir 2023 este o organizație non-profit născută din dorința
                de a susține comunitatea locală prin proiecte sociale, educaționale și de sănătate.
                Lucrăm alături de voluntari, instituții și parteneri pentru a transforma binele în acțiune.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/logo.png"
                alt="Asociația Implicare și Dăruire Cugir"
                width={300}
                height={300}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Misiunea noastră</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Să construim o comunitate unită și solidară în Cugir, în care copiii, persoanele cu dizabilități
                  și familiile vulnerabile primesc sprijin real prin acțiuni concrete: campanii sociale, activități
                  educaționale și inițiative de prevenție pentru sănătate.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Viziunea noastră</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  O comunitate în care fiecare persoană se simte văzută, respectată și încurajată să-și atingă
                  potențialul - prin colaborare, dăruire și responsabilitate.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Valorile noastre</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Principiile care ne ghidează în toate proiectele.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Empatie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Răspundem cu grijă nevoilor reale ale oamenilor.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Colaborare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Lucrăm împreună cu voluntari, instituții și companii locale.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Integritate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Transparență în decizii și responsabilitate față de comunitate.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-muted/40 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">Dedicare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Perseverență și respect pentru fiecare persoană cu care lucrăm.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History & Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Povestea noastră</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Asociația „Implicare și Dăruire” a fost înființată în 2023, din dorința de a sprijini
                    comunitatea locală din Cugir prin inițiative sociale, educaționale și de sănătate.
                    De atunci, fiecare proiect a fost construit în jurul nevoilor reale ale oamenilor.
                  </p>
                  <p>
                    Printre cele mai recente proiecte se numără organizarea celei de-a IV-a ediții a
                    Zilei Mondiale a Diabetului, activitățile dedicate copiilor cu ocazia sărbătorilor
                    de Paște, precum și campania de sprijin pentru elevi la începutul anului școlar
                    2025, prin distribuirea de rechizite și materiale educaționale.
                  </p>
                  <p>
                    Aceste inițiative au fost realizate cu ajutorul voluntarilor, al partenerilor locali
                    și al oamenilor care au ales să se implice activ în susținerea comunității din Cugir.
                  </p>
                </div>

              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-secondary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">2023 – prezent</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>De la primele acțiuni locale la proiecte anuale cu impact în comunitate</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-accent" />
                    </div>
                    <CardTitle className="text-lg">Programe recurente</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>Campanii sociale de iarnă și evenimente anuale de prevenție</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

       {/* Team Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Echipa noastră</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Oameni dedicați care lucrează cu pasiune pentru dezvoltarea comunității din Cugir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Bota Mihaela</CardTitle>
                <CardDescription className="text-secondary font-medium">Președinte</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Coordonează activitățile asociației și dezvoltă strategiile pe termen lung pentru impactul în
                  comunitate.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Mureșan Samoilescu Terezia</CardTitle>
                <CardDescription className="text-secondary font-medium">Vicepreședinte</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Supervizează implementarea proiectelor și menține relațiile cu partenerii locali.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Buta Diana</CardTitle>
                <CardDescription className="text-secondary font-medium">Contabil</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Gestionează evidența financiară a asociației și se asigură de buna organizare a documentelor contabile.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Ene Anamaria</CardTitle>
                <CardDescription className="text-secondary font-medium">Membru</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Sprijină organizarea echipelor de voluntari și coordonarea activităților operaționale ale asociației.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Vrei să te implici?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Spune-ne cum ai vrea să ajuți—ca voluntar, partener sau donator—și îți răspundem cu pașii următori.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">
                Contactează-ne
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/proiecte">Vezi proiectele noastre</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
