"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Facebook, CalendarClock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Announcement Banner */}
      <section className="bg-gradient-to-r from-[#F82053] to-[#FABB88] py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <CalendarClock className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl">Noutate!</span>
          </div>
          <p className="text-center sm:text-left text-white/95 text-lg">
            Sediul nostru se deschide in <span className="font-bold underline decoration-2 underline-offset-2">aprilie 2026</span>. Te asteptam cu drag!
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sa lucram impreuna</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Suntem aici sa raspundem la intrebarile tale si sa te ajutam sa te implici in comunitatea din Cugir.
            Contacteaza-ne prin oricare dintre metodele de mai jos.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Informatii de contact</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nu ezita sa ne contactezi pentru orice intrebare sau daca vrei sa te implici in activitatile noastre.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Telefon</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <a href="tel:+40774566791" className="hover:text-secondary transition-colors font-medium">
                    +40 774 566 791
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <a href="mailto:asociatiaimplicaresidaruire@yahoo.com" className="hover:text-primary transition-colors font-medium break-all">
                    asociatiaimplicaresidaruire@yahoo.com
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Adresa</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Strada Victoriei nr. 9, etaj 2, camera 30
                  <br />
                  515600 Cugir, Alba
                </CardDescription>
                <div className="mt-3 px-3 py-2 bg-[#F82053]/10 border border-[#F82053]/20 rounded-lg">
                  <p className="text-sm text-[#F82053] font-medium flex items-center gap-2">
                    <CalendarClock className="h-4 w-4" />
                    Se deschide in aprilie 2026
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Urmareste-ne pe social media</h3>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" asChild className="bg-transparent">
                <a href="https://www.facebook.com/asociatiaimplicaresidaruirecugir" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Locatia noastra</h2>
          </div>

          <Card className="overflow-hidden border-primary/20">
            <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8234567890123!2d23.3678901234567!3d45.8345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDUwJzA0LjQiTiAyM8KwMjInMDQuNCJF!5e0!3m2!1sen!2sro!4v1234567890123!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatia Asociatiei Implicare si Daruire Cugir"
                className="absolute inset-0"
              />

              {/* Fallback content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Asociatia Implicare si Daruire
                  </h3>
                  <p className="text-muted-foreground">
                    Strada Victoriei nr. 9
                    <br />
                    Etaj 2, Camera 30
                    <br />
                    Cugir, Alba, Romania
                  </p>
                  <Button asChild variant="outline" className="mt-4 bg-transparent">
                    <a
                      href="https://maps.google.com/?q=Strada+Victoriei+9,+Cugir,+Alba,+Romania"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deschide in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Location Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Ușor accesibil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sediul nostru se va deschide in <span className="font-semibold text-[#F82053]">aprilie 2026</span>. Abia asteptam sa te primim!
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Program flexibil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Pentru intalniri in afara programului normal, te rugam sa ne contactezi in avans.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Raspuns rapid</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Raspundem la toate mesajele in maxim 24 de ore in zilele lucratoare.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}