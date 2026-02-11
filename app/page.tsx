import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { FeaturesSection } from '@/components/features-section'
import { ProductPreview } from '@/components/product-preview'
import { Testimonials } from '@/components/testimonials'
import { PricingSection } from '@/components/pricing-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <ProductPreview />
      <Testimonials />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
