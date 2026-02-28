import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t">

      {/* 🔥 Texto gigante no fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-bold tracking-tighter text-primary opacity-5 whitespace-nowrap">
          GENMEK
        </span>
      </div>

      {/* Conteúdo */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Marca */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              GenMek Software House
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Desenvolvemos sistemas estratégicos, escaláveis e
              preparados para impulsionar negócios reais.
            </p>
          </div>

          {/* Navegação */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navegação</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <Link href="/">Home</Link>
              <Link href="/projects">Projetos</Link>
              <Link href="/contact">Contato</Link>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <span>contato@genmek.com</span>
              <span>Atendimento remoto - Brasil</span>
            </div>
          </div>

        </div>

        {/* Linha inferior */}
        <div className="mt-16 pt-8 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
          <span>© {new Date().getFullYear()} GenMek. Todos os direitos reservados.</span>
          <span>Desenvolvido pela GenMek Software House</span>
        </div>

      </div>
    </footer>
  )
}