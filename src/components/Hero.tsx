"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/onda-background2.mp4" type="video/mp4" />
      </video>

      {/* 🔥 Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-[2px]" />

      {/* ✨ Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-8">

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Desenvolvemos Sistemas que
            <span className="block text-primary">
              Impulsionam Negócios Reais
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Criamos softwares sob medida, aplicações web e soluções digitais
            estratégicas para empresas que querem crescer com tecnologia.
          </p>
        </div>

        {/* 🎯 CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" className="px-8 text-base" asChild>
            <Link href="/contact">
              Solicitar Orçamento
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="px-8 text-base bg-white/10 text-white border-white/20 hover:bg-white/20"
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