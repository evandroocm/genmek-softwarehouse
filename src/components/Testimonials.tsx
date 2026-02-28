"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            O que nossos parceiros dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Empresas que confiaram na GenMek para transformar seus processos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">

              {/* Stars */}
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                “A GenMek estruturou nosso sistema interno do zero.
                Hoje temos controle total dos processos e dashboards
                que realmente ajudam na tomada de decisão.”
              </p>

              <div>
                <p className="font-semibold">Carlos Andrade</p>
                <p className="text-sm text-muted-foreground">
                  Diretor Operacional
                </p>
              </div>

            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">

              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                “Profissionalismo e organização impressionam.
                O processo foi claro do início ao fim,
                com entregas frequentes e comunicação transparente.”
              </p>

              <div>
                <p className="font-semibold">Fernanda Lima</p>
                <p className="text-sm text-muted-foreground">
                  Fundadora de Startup SaaS
                </p>
              </div>

            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">

              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                “Nos ajudaram a automatizar processos que
                consumiam horas da equipe. O ganho de produtividade
                foi imediato.”
              </p>

              <div>
                <p className="font-semibold">Ricardo Souza</p>
                <p className="text-sm text-muted-foreground">
                  Gestor Administrativo
                </p>
              </div>

            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  )
}