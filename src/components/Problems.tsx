import { Card, CardContent } from "@/components/ui/card"
import { FileSpreadsheet, Workflow, Plug, TrendingDown } from "lucide-react"

export default function ProblemsSection() {
  return (
    <section className="w-full py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Sua empresa está travada por processos manuais?
          </h2>
          <p className="text-muted-foreground text-lg">
            Muitas empresas ainda dependem de planilhas, sistemas limitados
            e processos desconectados que impedem o crescimento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <FileSpreadsheet className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">
                Dependência de Planilhas
              </h3>
              <p className="text-muted-foreground">
                Controle manual que gera erros, retrabalho e falta de visão estratégica.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <Workflow className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">
                Processos Desorganizados
              </h3>
              <p className="text-muted-foreground">
                Fluxos internos sem padronização que diminuem produtividade e performance.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <Plug className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">
                Sistemas Não Integrados
              </h3>
              <p className="text-muted-foreground">
                Ferramentas que não conversam entre si e geram perda de dados.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <TrendingDown className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">
                Dificuldade de Escalar
              </h3>
              <p className="text-muted-foreground">
                Estruturas tecnológicas que limitam o crescimento do negócio.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}