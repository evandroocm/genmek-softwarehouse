"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Contato
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Vamos construir algo grande juntos
          </h2>
          <p className="text-muted-foreground text-lg">
            Conte-nos sobre seu projeto e entraremos em contato
            para um diagnóstico estratégico.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Informações */}
          <div className="space-y-8">

            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="text-primary w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    contato@genmek.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="text-primary w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-muted-foreground">
                    +55 (00) 00000-0000
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="text-primary w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Localização</h3>
                  <p className="text-muted-foreground">
                    Atendimento remoto para todo o Brasil
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Formulário */}
          <Card className="shadow-xl">
            <CardContent className="p-8 space-y-6">

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Nome
                </label>
                <Input placeholder="Seu nome completo" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Email
                </label>
                <Input type="email" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Empresa
                </label>
                <Input placeholder="Nome da sua empresa" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Descreva seu projeto
                </label>
                <Textarea
                  placeholder="Explique brevemente seu desafio ou objetivo..."
                  className="min-h-[120px]"
                />
              </div>

              <Button size="lg" className="w-full">
                Enviar Solicitação
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Seus dados estão seguros. Entraremos em contato em até 24h.
              </p>

            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}