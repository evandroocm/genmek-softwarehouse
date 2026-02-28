import CasesSection from "@/components/Cases";
import DifferentialsSection from "@/components/Differentials";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/Problems";
import ProcessSection from "@/components/Process";
import ServicesSection from "@/components/Services";
import TestimonialsSection from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProblemsSection />
      <ServicesSection />
      <ProcessSection />
      <CasesSection />
      <DifferentialsSection />
      <TestimonialsSection />
    </div>
  );
}
