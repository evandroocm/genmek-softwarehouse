"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Badge } from "@/components/ui/badge"

export default function FAQSection() {
  return (
    <section className="w-full py-28 bg-muted/40">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparência e clareza desde o primeiro contato.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">

          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quanto custa desenvolver um sistema?
            </AccordionTrigger>
            <AccordionContent>
              O investimento varia conforme complexidade,
              funcionalidades e integrações necessárias.
              Após o diagnóstico inicial, enviamos uma proposta detalhada.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Quanto tempo leva para desenvolver um projeto?
            </AccordionTrigger>
            <AccordionContent>
              Depende do escopo. MVPs podem levar algumas semanas,
              enquanto sistemas mais robustos exigem ciclos maiores.
              Trabalhamos com entregas iterativas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Vocês oferecem suporte após a entrega?
            </AccordionTrigger>
            <AccordionContent>
              Sim. Oferecemos acompanhamento, manutenção evolutiva
              e melhorias contínuas conforme o crescimento do negócio.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Trabalham com contrato formal?
            </AccordionTrigger>
            <AccordionContent>
              Sim. Todos os projetos são formalizados com contrato,
              escopo definido e cronograma estruturado.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

      </div>
    </section>
  )
}