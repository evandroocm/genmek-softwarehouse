import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Layers,
  ShieldCheck,
  Zap,
  GitBranch,
  Eye,
  Users
} from "lucide-react"

export default function DifferentialsSection() {
  return (
    <section className="w-full py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Diferenciais
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            O que torna a GenMek diferente
          </h2>
          <p className="text-muted-foreground text-lg">
            Não entregamos apenas código. Entregamos soluções estruturadas
            para crescimento sustentável.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-5">
              <Layers className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">
                Arquitetura Escalável
              </h3>
              <p className="text-muted-foreground">
                Projetamos sistemas preparados para crescimento,
                evitando retrabalho no futuro.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-5">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">
                Segurança & Performance
              </h3>
              <p className="text-muted-foreground">
                Aplicações rápidas, seguras e alinhadas com boas práticas modernas.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-5">
              <Zap className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">
                Foco em Resultado
              </h3>
              <p className="text-muted-foreground">
                Desenvolvemos soluções que impactam diretamente
                produtividade e crescimento.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-5">
              <GitBranch className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">
                Processo Organizado
              </h3>
              <p className="text-muted-foreground">
                Versionamento estruturado, documentação clara
                e transparência durante todo o projeto.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-5">
              <Eye className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">
                Visão Estratégica
              </h3>
              <p className="text-muted-foreground">
                Analisamos o negócio antes de propor tecnologia.
                Software é meio, não fim.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 space-y-5">
              <Users className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold">
                Parceria de Longo Prazo
              </h3>
              <p className="text-muted-foreground">
                Atuamos como parceiros estratégicos,
                acompanhando evolução contínua.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}