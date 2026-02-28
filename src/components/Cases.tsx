"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

export default function CasesSection() {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Cases & Projetos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Projetos que geram impacto real
          </h2>
          <p className="text-muted-foreground text-lg">
            Desenvolvemos soluções estratégicas para empresas que querem
            crescer com tecnologia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Case 1 */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src="/cases/saojuliao.png"
                alt="Sistema de Gestão Hospitalar"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <CardContent className="p-6 space-y-4">
              <Badge variant="outline">Sistema Web</Badge>
              <h3 className="text-xl font-semibold">
                Plataforma de Gestão Hospitalar
              </h3>
              <p className="text-muted-foreground">
                Sistema personalizado para otimizar operações, agendamento e
                gestão de pacientes em hospital de grande porte.
              </p>

              <Link
                href="#"
                className="flex items-center gap-2 text-primary font-medium"
              >
                Ver detalhes
                <ArrowUpRight size={18} />
              </Link>
            </CardContent>
          </Card>

          {/* Case 2 */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src="/cases/filazero_project.png"
                alt="MVP Startup"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <CardContent className="p-6 space-y-4">
              <Badge variant="outline">MVP Startup</Badge>
              <h3 className="text-xl font-semibold">
                Plataforma SaaS para Gestão de Filas
              </h3>
              <p className="text-muted-foreground">
                MVP validado com usuários reais, focado em escalabilidade
                e experiência moderna.
              </p>

              <Link
                href="#"
                className="flex items-center gap-2 text-primary font-medium"
              >
                Ver detalhes
                <ArrowUpRight size={18} />
              </Link>
            </CardContent>
          </Card>

          {/* Case 3 */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src="/cases/bovfort_project.png"
                alt="Dashboard BI"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <CardContent className="p-6 space-y-4">
              <Badge variant="outline">Business Intelligence</Badge>
              <h3 className="text-xl font-semibold">
                Dashboard Estratégico de Performance
              </h3>
              <p className="text-muted-foreground">
                Painéis interativos com métricas em tempo real
                para tomada de decisão.
              </p>

              <Link
                href="#"
                className="flex items-center gap-2 text-primary font-medium"
              >
                Ver detalhes
                <ArrowUpRight size={18} />
              </Link>
            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  )
}