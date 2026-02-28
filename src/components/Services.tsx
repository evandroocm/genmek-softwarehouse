import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MonitorSmartphone,
  Code2,
  Rocket,
  Workflow,
  Server,
  LineChart
} from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Soluções digitais sob medida para escalar seu negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Desenvolvemos tecnologia estratégica, moderna e preparada para crescimento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Card className="group hover:shadow-xl transition-all duration-300 border-border/60">
            <CardContent className="p-8 space-y-6">
              <MonitorSmartphone className="w-10 h-10 text-primary group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold">
                Sistemas Web Sob Medida
              </h3>
              <p className="text-muted-foreground">
                Plataformas personalizadas para automatizar processos,
                organizar operações e gerar eficiência.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-border/60">
            <CardContent className="p-8 space-y-6">
              <Rocket className="w-10 h-10 text-primary group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold">
                MVP para Startups
              </h3>
              <p className="text-muted-foreground">
                Construímos produtos enxutos e escaláveis para validar
                ideias rapidamente no mercado.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-border/60">
            <CardContent className="p-8 space-y-6">
              <Workflow className="w-10 h-10 text-primary group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold">
                Automação de Processos
              </h3>
              <p className="text-muted-foreground">
                Integramos sistemas e eliminamos tarefas manuais
                para aumentar produtividade.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-border/60">
            <CardContent className="p-8 space-y-6">
              <Server className="w-10 h-10 text-primary group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold">
                Integração com APIs & ERP
              </h3>
              <p className="text-muted-foreground">
                Conectamos ferramentas e sistemas existentes
                criando um ecossistema unificado.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-border/60">
            <CardContent className="p-8 space-y-6">
              <Code2 className="w-10 h-10 text-primary group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold">
                Desenvolvimento Front-End Premium
              </h3>
              <p className="text-muted-foreground">
                Interfaces modernas, rápidas e focadas em experiência do usuário.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-border/60">
            <CardContent className="p-8 space-y-6">
              <LineChart className="w-10 h-10 text-primary group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold">
                Dashboards & Business Intelligence
              </h3>
              <p className="text-muted-foreground">
                Transformamos dados em decisões estratégicas
                com painéis interativos e métricas em tempo real.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}