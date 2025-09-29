import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import WhyChoose from "@/components/WhyChoose";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ContactSection />
      <WhyChoose />
      <Locations />
      <Statistics />
      <Testimonials />
    </div>
  );
}
