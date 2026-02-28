import Hero from "@/components/Hero";
import ProblemsSection from "@/components/Problems";
import ProcessSection from "@/components/Process";
import ServicesSection from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProblemsSection />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
}
