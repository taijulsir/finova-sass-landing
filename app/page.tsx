import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { Steps } from "@/sections/Steps";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { CTA } from "@/sections/CTA";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Steps />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
