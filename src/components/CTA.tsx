import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FinalCTASection() {
  return (
    <section className="w-full py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-40" />

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Pronto para transformar sua operação com tecnologia?
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Vamos entender seu negócio, identificar oportunidades e
          desenvolver uma solução estratégica sob medida.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button size="lg" className="px-10 text-base" asChild>
            <Link href="/contact">
              Solicitar Diagnóstico Gratuito
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="px-10 text-base"
            asChild
          >
            <Link href="/projects">
              Ver Projetos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}