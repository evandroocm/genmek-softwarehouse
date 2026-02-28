import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, DraftingCompass, Code2, Rocket } from "lucide-react"

export default function ProcessSection() {
  return (
    <section className="w-full py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Nosso Processo
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Como transformamos ideias em software de alto impacto
          </h2>
          <p className="text-muted-foreground text-lg">
            Seguimos uma metodologia clara, estratégica e focada em resultados.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Card className="relative hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <Search className="w-10 h-10 text-primary" />
                <span className="text-4xl font-bold text-muted-foreground/20">
                  01
                </span>
              </div>
              <h3 className="text-2xl font-semibold">
                Diagnóstico Estratégico
              </h3>
              <p className="text-muted-foreground">
                Entendemos profundamente o negócio, identificamos gargalos
                e definimos a melhor solução tecnológica.
              </p>
            </CardContent>
          </Card>

          <Card className="relative hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <DraftingCompass className="w-10 h-10 text-primary" />
                <span className="text-4xl font-bold text-muted-foreground/20">
                  02
                </span>
              </div>
              <h3 className="text-2xl font-semibold">
                Arquitetura & Planejamento
              </h3>
              <p className="text-muted-foreground">
                Estruturamos a solução com foco em escalabilidade,
                segurança e performance.
              </p>
            </CardContent>
          </Card>

          <Card className="relative hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <Code2 className="w-10 h-10 text-primary" />
                <span className="text-4xl font-bold text-muted-foreground/20">
                  03
                </span>
              </div>
              <h3 className="text-2xl font-semibold">
                Desenvolvimento Ágil
              </h3>
              <p className="text-muted-foreground">
                Construção iterativa com entregas frequentes,
                validação contínua e transparência total.
              </p>
            </CardContent>
          </Card>

          <Card className="relative hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <Rocket className="w-10 h-10 text-primary" />
                <span className="text-4xl font-bold text-muted-foreground/20">
                  04
                </span>
              </div>
              <h3 className="text-2xl font-semibold">
                Deploy & Evolução
              </h3>
              <p className="text-muted-foreground">
                Publicação, monitoramento e melhorias contínuas
                para garantir crescimento sustentável.
              </p>
            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  )
}