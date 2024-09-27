import CTA from "@/components/ui/cta"
import Enterprise from "@/components/ui/enterprises"
import FAQAccordion from "@/components/ui/faq"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import Hero from "@/components/ui/hero"
import HowItWorks from "@/components/ui/HowItWorks"
import Integration from "@/components/ui/integrations"
import Templates from "@/components/ui/templates"
import Testimonial from "@/components/ui/testimonials"
import Tutorial from "@/components/ui/tutorial"

export default function Home() {
  return (
    <main
      className="relative"
      style={{
        backgroundSize: "56px 56px",
        backgroundImage:
          "radial-gradient(circle, #d4dfd8 2px, rgba(0, 0, 0, 0) 1px)", // Same dot background
        backgroundColor: "#f9fafb", // Tailwind's gray-50
      }}
    >
      <div className="from-warm-grey/50 to-off-white absolute -z-10 h-full w-screen bg-gradient-to-b"></div>
      <Header />
      <section className="relative flex flex-col items-center justify-center">
        <Hero />
        <Templates />
        <Integration />
        <Testimonial />
        <Enterprise />
        <HowItWorks />
        <FAQAccordion />
        <Tutorial />
        <CTA />
      </section>
      <Footer />
    </main>
  )
}
