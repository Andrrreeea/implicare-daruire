"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Users, Heart, ArrowRight, CheckCircle, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const projectsData = {
  completed: [
    {
      id: 1,
      title: "Ziua Mondială a Diabetului, Ediția a IV-a",
      period: "14.11.2025",
      description:
        "Ziua Mondială a Diabetului – Ediția a IV-a a consolidat tradiția asociației de a promova prevenția, educația și accesul la informații medicale pentru întreaga comunitate. Participanții au avut parte de activități informative, materiale educative și sprijin personalizat, transformând ediția din acest an într-un moment valoros de conștientizare și solidaritate.",
      beneficiaries: "50+ participanți",
      category: "Social",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/diabet/diabet4_1.jpeg",
      images: [
        "/diabet/diabet4_1.jpeg",
        "/diabet/diabet4_2.jpeg",
        "/diabet/diabet4_3.jpeg",
        "/diabet/diabet4_4.jpeg",
        "/diabet/diabet4_5.jpeg",
        "/diabet/diabet4_6.jpeg",
        "/diabet/diabet4_7.jpeg",
        "/diabet/diabet4_8.jpeg",
      ],
    },

    {
      id: 2,
      title: "Activitate cu copiii de Paște 2025",
      period: "12.04.2025",
      description:
        "Cu ocazia sărbătorilor de Paște, asociația a organizat o activitate specială dedicată copiilor, plină de culoare, joacă și momente de bucurie. Cei mici au participat la ateliere creative, au primit surprize tematice și au petrecut timp de calitate alături de voluntari și prieteni.",
      beneficiaries: "20+ copii",
      category: "Social",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/dizabilitati_paste/dizabilitati1_1.jpeg",
      images: [
        "/dizabilitati_paste/dizabilitati1_1.jpeg",
        "/dizabilitati_paste/dizabilitati2_1.jpeg",
        "/dizabilitati_paste/dizabilitati3_1.jpeg",
        "/dizabilitati_paste/dizabilitati4_1.jpeg",
        "/dizabilitati_paste/dizabilitati5_1.jpeg",
      ],
    },

    {
      id: 3,
      title: "Începere an școlar septembrie 2025",
      period: "28.09.2025",
      description:
        "Cu ocazia începerii noului an școlar, asociația a achiziționat și a distribuit rechizite esențiale elevilor, direct în cadrul școlii. Voluntarii au mers personal să ofere ghiozdane, caiete, instrumente de scris și alte materiale necesare, asigurându-se că fiecare copil pornește la drum cu tot ce are nevoie pentru a învăța și a progresa.",
      beneficiaries: "25+ elevi",
      category: "Educație",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/scoala/rechizite1_1.jpeg",
      images: [
        "/scoala/rechizite1_1.jpeg",
        "/scoala/rechizite2_1.jpeg",
        "/scoala/rechizite3_1.jpeg",
        "/scoala/rechizite4_1.jpeg",
        "/scoala/rechizite5_1.jpeg",
        "/scoala/rechizite6_1.jpeg",
        "/scoala/rechizite7_1.jpeg",
        "/scoala/rechizite8_1.jpeg",
        "/scoala/rechizite9_1.jpeg",
        "/scoala/rechizite10_1.jpeg",
        "/scoala/rechizite11_1.jpeg",
        "/scoala/rechizite12_1.jpeg",
      ],
    },

    {
      id: 4,
      title: "Campanie de tuns înainte de începerea anului școlar 2025",
      period: "15.09.2025",
      description:
        "Înainte de începerea anului școlar 2025, asociația a organizat o campanie de tuns gratuit pentru copii, oferind fiecărui elev posibilitatea de a începe noul an cu încredere și zâmbetul pe buze. Activitatea a fost realizată cu sprijinul voluntarilor și al specialiștilor locali, transformând ziua într-o experiență plăcută și relaxată pentru cei mici.",
      beneficiaries: "10+ copii",
      category: "Social",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/tuns/tuns1.jpeg",
      images: [
        "/tuns/tuns1.jpeg",
        "/tuns/tuns2.jpeg",
        "/tuns/tuns3.jpeg",
        "/tuns/tuns4.jpeg",
        "/tuns/tuns5.jpeg",
        "/tuns/tuns6.jpeg",
        "/tuns/tuns7.jpeg",
        "/tuns/tuns8.jpeg",
      ],
    },

    {
      id: 5,
      title: "Activitate Ziua Copilului 2025",
      period: "01.06.2025",
      description:
        "De Ziua Internațională a Copilului – 1 Iunie 2025, asociația a organizat o activitate creativă în aer liber, unde cei mici au fost încurajați să își exprime imaginația prin desenat cu creta pe asfalt. Evenimentul a transformat spațiul într-o adevărată galerie colorată a copilăriei, plină de zâmbete, voie bună și mesaje de bucurie.",
      beneficiaries: "30+ copii",
      category: "Social",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/1iunie/ziua_copilului1_4.jpeg",
      images: [
        "/1iunie/ziua_copilului1_1.jpeg",
        "/1iunie/ziua_copilului1_2.jpeg",
        "/1iunie/ziua_copilului1_3.jpeg",
        "/1iunie/ziua_copilului1_4.jpeg",
        "/1iunie/ziua_copilului1_5.jpeg",
        "/1iunie/ziua_copilului1_6.jpeg",
      ],
    },

    {
      id: 6,
      title: "Ziua Mondiala a diabetului, Ediția a III-a",
      period: "14.11.2024",
      description:
        "Ziua Mondială a Diabetului – Ediția a III-a a reunit din nou comunitatea locală într-o acțiune dedicată sănătății, informării și prevenției. Prin implicarea voluntarilor și a partenerilor locali, ediția din acest an a adus o participare numeroasă și o conștientizare sporită asupra importanței unui stil de viață echilibrat. Proiectul a continuat tradiția de a transforma informarea medicală într-o experiență comunitară pozitivă și accesibilă tuturor.",
      beneficiaries: "70+ participanți",
      category: "Social",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/diabet/diabet3_4.jpeg",
      images: [
        "/diabet/diabet3_4.jpeg",
        "/diabet/diabet3_2.jpeg",
        "/diabet/diabet3_3.jpeg",
        "/diabet/diabet3_1.jpeg",
        "/diabet/diabet3_5.jpeg",
      ],
    },

    {
      id: 7,
      title: "Începere an școlar septembrie 2024",
      period: "09.09.2024",
      description:
        "Cu ocazia începerii noului an școlar, septembrie 2024, asociația a oferit sprijin elevilor din clasele cu nevoi speciale prin achiziționarea și distribuirea de rechizite și materiale educative. Activitatea a avut ca scop încurajarea accesului egal la educație și susținerea copiilor în procesul de învățare. Prin implicarea voluntarilor și a comunității, proiectul a adus zâmbete pe fețele celor mici și a demonstrat importanța solidarității și a sprijinului reciproc în momentele de început.",
      beneficiaries: "20+ elevi",
      category: "Educație",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/scoala/rechizite1.jpeg",
      images: [
        "/scoala/rechizite1.jpeg",
        "/scoala/rechizite2.jpeg",
        "/scoala/rechizite3.jpeg",
        "/scoala/rechizite4.jpeg",
        "/scoala/rechizite5.jpeg",
      ],
    },

    {
      id: 8,
      title: "Participare cu stand la Toamna Cugireana 2024",
      period: "20.09.2024",
      description:
        "În cadrul Toamnei Cugirene 2024, asociația a participat cu un stand dedicat sănătății și prevenției medicale, oferind gratuit servicii de măsurare a tensiunii arteriale, a glicemiei și a saturației de oxigen. Evenimentul a reprezentat o oportunitate de a promova un stil de viață sănătos și de a încuraja cetățenii să acorde mai multă atenție îngrijirii personale. Prin implicarea voluntarilor și a specialiștilor, activitatea a contribuit la creșterea nivelului de conștientizare privind importanța controalelor medicale periodice și a prevenției în comunitate.",
      beneficiaries: "70+ participanți",
      category: "Medical",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/toamna_cugireana/toamna_cugireana1.jpeg",
      images: [
        "/toamna_cugireana/toamna_cugireana1.jpeg",
        "/toamna_cugireana/toamna_cugireana2.jpeg",
        "/toamna_cugireana/toamna_cugireana3.jpeg",
        "/toamna_cugireana/toamna_cugireana4.jpeg",
      ],
    },

    {
      id: 9,
      title: "Activitate Ziua Copilului 2024",
      period: "01.06.2024",
      description:
        "Ziua Copilului a fost sărbătorită printr-o serie de activități pline de culoare, zâmbete și voie bună, dedicate tuturor copiilor din comunitate. Evenimentul a inclus jocuri interactive, ateliere creative, dans, muzică și surprize oferite de voluntarii asociației. Activitatea a avut scopul de a promova dreptul fiecărui copil la fericire, joacă și incluziune.",
      beneficiaries: "35+ copii",
      category: "Social",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/1iunie/ziua_copilului1.jpeg",
      images: [
        "/1iunie/ziua_copilului1.jpeg",
        "/1iunie/ziua_copilului2.jpeg",
        "/1iunie/ziua_copilului3.jpeg",
        "/1iunie/ziua_copilului4.jpeg",
        "/1iunie/ziua_copilului5.jpeg",
        "/1iunie/ziua_copilului6.jpeg",
        "/1iunie/ziua_copilului7.jpeg",
        "/1iunie/ziua_copilului8.jpeg",
        "/1iunie/ziua_copilului9.jpeg",
        "/1iunie/ziua_copilului10.jpeg",
        "/1iunie/ziua_copilului11.jpeg",
        "/1iunie/ziua_copilului12.jpeg",
        "/1iunie/ziua_copilului13.jpeg",
        "/1iunie/ziua_copilului14.jpeg",
        "/1iunie/ziua_copilului15.jpeg",
        "/1iunie/ziua_copilului16.jpeg",
        "/1iunie/ziua_copilului17.jpeg",
        "/1iunie/ziua_copilului18.jpeg",
        "/1iunie/ziua_copilului19.jpeg",
      ],
    },

    {
      id: 10,
      title: " Activitate cu copiii cu dizabilități și frații acestora de Paște",
      period: "28.04.2024",
      description:
        "Activitatea de Paște pentru copiii cu dizabilități a adus bucurie și culoare în sufletele celor mici printr-o zi plină de zâmbete, jocuri și surprize. Voluntarii asociației au oferit cadouri simbolice, ouă încondeiate și dulciuri, contribuind la crearea unei atmosfere de sărbătoare și incluziune. Evenimentul a fost un prilej de socializare și solidaritate, în care fiecare copil s-a simțit valorizat și sprijinit. Prin această inițiativă, asociația a dorit să transmită mesajul că sărbătorile sunt mai frumoase atunci când sunt împărtășite cu generozitate și iubire față de semeni.",
      beneficiaries: "30+ copii și familii",
      category: "Social",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/dizabilitati_paste/dizabilitati4.jpeg",
      images: [
        "/dizabilitati_paste/dizabilitati4.jpeg",
        "/dizabilitati_paste/dizabilitati2.jpeg",
        "/dizabilitati_paste/dizabilitati3.jpeg",
        "/dizabilitati_paste/dizabilitati1.jpeg",
        "/dizabilitati_paste/dizabilitati5.jpeg",
        "/dizabilitati_paste/dizabilitati6.jpeg",
        "/dizabilitati_paste/dizabilitati7.jpeg",
        "/dizabilitati_paste/dizabilitati8.jpeg",
        "/dizabilitati_paste/dizabilitati9.jpeg",
      ],
    },

    {
      id: 11,
      title: "Ziua Internatională a persoanelor cu dizabilități",
      period: "03.12.2023",
      description:
        "Ziua Internațională a Persoanelor cu Dizabilități – 3 decembrie 2023 a fost un eveniment dedicat empatiei, incluziunii și bucuriei de a fi împreună. Activitatea a adus zâmbete pe fețele copiilor cu dizabilități prin momente de socializare, jocuri și mici surprize oferite de voluntarii asociației. Au fost împărțite calendare și baloane cu mesaje de conștientizare. Evenimentul a încurajat solidaritatea comunității și respectul pentru diversitate, reafirmând misiunea asociației de a sprijini fiecare persoană, indiferent de provocările cu care se confruntă.",
      beneficiaries: "30+ copii și familii",
      category: "Social",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/dizabilitati_mos_nicolae/dizabilitati4.jpeg",
      images: [
        "/dizabilitati_mos_nicolae/dizabilitati4.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati2.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati3.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati1.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati5.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati6.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati7.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati8.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati9.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati10.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati11.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati12.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati13.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati14.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati15.jpeg",
        "/dizabilitati_mos_nicolae/dizabilitati16.jpeg",
      ],
    },
    {
      id: 12,
      title: "Ziua mondială a diabetului, Ediția a II-a",
      period: "14.11.2023",
      description:
        "Ziua Mondială a Diabetului – Ediția a II-a a continuat tradiția inițiată de asociație, aducând împreună specialiști, voluntari și membri ai comunității într-un eveniment dedicat sănătății și educației. Proiectul a consolidat importanța prevenției și a dialogului deschis despre diabet, contribuind la formarea unei comunități mai informate și mai unite.",
      beneficiaries: "70+ participanți",
      category: "Social",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/diabet/diabet2_2.jpeg",
      images: [
        "/diabet/diabet2_2.jpeg",
        "/diabet/diabet2_1.jpeg",
        "/diabet/diabet2_3.jpeg",
        "/diabet/diabet2_4.jpeg",
        "/diabet/diabet2_5.jpeg",
        "/diabet/diabet2_6.jpeg",
        "/diabet/diabet2_7.jpeg",
        "/diabet/diabet2_8.jpeg",
        "/diabet/diabet2_9.jpeg",
        "/diabet/diabet2_10.jpeg",
        "/diabet/diabet2_11.jpeg",
        "/diabet/diabet2_12.jpeg",
        "/diabet/diabet2_13.jpeg",
      ],
    },
    {
      id: 13,
      title: "Ziua mondială a diabetului, Ediția I",
      period: "14.11.2022",
      description:
        "„Ziua Mondială a Diabetului – Ediția I a fost un eveniment dedicat informării și conștientizării comunității locale cu privire la prevenirea și gestionarea diabetului. Activitatea a reunit participanți de toate vârstele într-o zi plină de energie și solidaritate.Prin implicarea voluntarilor și partenerilor locali, evenimentul a promovat un stil de viață sănătos și importanța controalelor medicale regulate, consolidând legăturile dintre membrii comunității",
      beneficiaries: "70+ participanți așteptați",
      category: "Social",
      status: "Finalizat",
      statusColor: "bg-green-600",
      borderColor: "",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-50",
      placeholder: "/diabet/diabet1_1.jpeg",
      images: [
        "/diabet/diabet1_1.jpeg",
        "/diabet/diabet1_2.jpeg",
        "/diabet/diabet1_3.jpeg",
        "/diabet/diabet1_4.jpeg",
        "/diabet/diabet1_5.jpeg",
        "/diabet/diabet1_6.jpeg",
        "/diabet/diabet1_7.jpeg",
        "/diabet/diabet1_8.jpeg",
        "/diabet/diabet1_9.jpeg",
        "/diabet/diabet1_10.jpeg",
      ],
    },
  ],
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [displayedProjectsCount, setDisplayedProjectsCount] = useState(6)

  const handleProjectClick = (project) => {
    if (project.images && project.images.length > 0) {
      setSelectedProject(project)
      setIsModalOpen(true)
    }
  }

  const handleLoadMore = () => {
    setDisplayedProjectsCount((prevCount) => prevCount + 6)
  }

  const renderProjectCard = (project) => {
    const hasImages = project.images && project.images.length > 0
    const previewImage = hasImages ? project.images[0] : project.placeholder

    return (
      <Card
        key={project.id}
        className={`hover:shadow-lg transition-shadow ${project.borderColor} ${hasImages ? "cursor-pointer" : "cursor-default"}`}
        onClick={() => handleProjectClick(project)}
      >
        <div className="relative h-48 rounded-t-lg overflow-hidden bg-muted">
          <Image src={previewImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          {hasImages && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="text-center text-white">
                <Camera className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Vezi galeria</p>
              </div>
            </div>
          )}
          <Badge
            className={`absolute top-4 left-4 ${project.statusColor}`}
            variant={project.status === "Planificat" ? "outline" : "default"}
          >
            {project.status}
          </Badge>
          {hasImages && (
            <Badge className="absolute top-4 right-4 bg-black/50 text-white">
              {project.images.length} {project.images.length === 1 ? "fotografie" : "fotografii"}
            </Badge>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {project.period}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed mb-4">{project.description}</CardDescription>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              {project.beneficiaries}
            </div>
            <Badge variant="outline">{project.category}</Badge>
          </div>
        </CardContent>
      </Card>
    )
  }

  const visibleProjects = projectsData.completed.slice(0, displayedProjectsCount)
  const hasMoreProjects = displayedProjectsCount < projectsData.completed.length

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Proiectele noastre
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Proiecte care schimbă vieți</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Descoperă proiectele prin care construim o comunitate mai bună în Cugir. Fiecare inițiativă este gândită să
            aducă schimbări pozitive și durabile.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{visibleProjects.map(renderProjectCard)}</div>

            {hasMoreProjects && (
              <div className="flex justify-center mt-12">
                <Button onClick={handleLoadMore} size="lg" className="bg-secondary hover:bg-secondary/90">
                  Vezi mai multe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl max-h-[95vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-4 border-b">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <DialogTitle className="text-2xl font-bold mb-2">{selectedProject?.title}</DialogTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {selectedProject?.period}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {selectedProject?.beneficiaries}
                  </div>
                  <Badge variant="outline">{selectedProject?.category}</Badge>
                </div>
              </div>
            </div>
          </DialogHeader>

          <div className="overflow-y-auto max-h-[calc(95vh-180px)] px-6 pb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">{selectedProject?.description}</p>

            {selectedProject && selectedProject.images && selectedProject.images.length > 0 && (
              <div className="space-y-4">
                {selectedProject.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full min-h-[400px] bg-muted rounded-lg overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${selectedProject.title} - Imagine ${index + 1}`}
                      width={1200}
                      height={800}
                      className="object-contain w-full h-auto max-h-[600px]"
                    />
                  </div>
                ))}
              </div>
            )}

            {selectedProject && selectedProject.images && selectedProject.images.length > 0 && (
              <p className="text-center text-sm text-muted-foreground mt-6">
                {selectedProject.images.length} {selectedProject.images.length === 1 ? "fotografie" : "fotografii"} în
                galerie
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Impact Statistics */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Impactul nostru în cifre</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Rezultatele concrete ale muncii noastre în comunitatea din Cugir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-secondary/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-3xl font-bold text-secondary">500+</CardTitle>
                <CardDescription className="text-base">Persoane ajutate</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-primary/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">15+</CardTitle>
                <CardDescription className="text-base">Proiecte finalizate</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-accent/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-3xl font-bold text-accent">200+</CardTitle>
                <CardDescription className="text-base">Voluntari implicați</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-muted/40">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold text-muted-foreground">12</CardTitle>
                <CardDescription className="text-base">Luni de activitate</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Vrei să te implici în proiectele noastre?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Alătură-te echipei noastre de voluntari și ajută-ne să facem o diferență reală în comunitatea din Cugir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">
                Contactează-ne
                <ArrowRight className="ml-2 h-4 w-4" />
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
