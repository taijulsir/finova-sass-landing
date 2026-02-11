'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PricingSection } from '@/components/pricing-section'
import { motion } from 'framer-motion'
import { Check, X, ChevronDown } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useState } from 'react'

const comparisonFeatures = [
  { name: 'Team members', starter: '5', pro: '50', enterprise: 'Unlimited' },
  { name: 'Storage', starter: '5GB', pro: '500GB', enterprise: 'Unlimited' },
  { name: 'API access', starter: false, pro: true, enterprise: true },
  { name: 'Custom domain', starter: false, pro: true, enterprise: true },
  { name: 'Advanced analytics', starter: false, pro: true, enterprise: true },
  { name: 'Custom integrations', starter: false, pro: true, enterprise: true },
  { name: 'SSO', starter: false, pro: true, enterprise: true },
  { name: 'Dedicated support', starter: false, pro: false, enterprise: true },
  { name: 'SLA guarantee', starter: false, pro: false, enterprise: true },
  { name: 'Custom workflows', starter: false, pro: true, enterprise: true },
]

const faqs = [
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No contracts required. All plans are month-to-month or annual with a 10% discount.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes! Annual plans come with a 10% discount compared to monthly billing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express) via Stripe, and we also support SSLCommerz for regional payments.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 14-day money-back guarantee on all plans.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All plans include a 14-day free trial with full access to all features.',
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
          >
            Pricing That Scales With You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-foreground/70 text-pretty"
          >
            Start free. Upgrade when you need to. Pay only for what you use.
          </motion.p>
        </div>
      </section>

      {/* Main Pricing Section */}
      <PricingSection />

      {/* Comparison Table */}
      <section className="bg-card py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Detailed Feature Comparison</h2>
            <p className="text-lg text-foreground/70">See what each plan includes</p>
          </motion.div>

          <div className="overflow-x-auto">
            <motion.table
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="w-full border-collapse"
            >
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Starter</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Professional</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <motion.tr
                    key={index}
                    variants={fadeInUp}
                    className={index % 2 === 0 ? 'bg-background' : ''}
                  >
                    <td className="py-4 px-4 text-foreground font-medium">{feature.name}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <Check className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-foreground/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-foreground/70">{feature.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <Check className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-foreground/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-foreground/70">{feature.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <Check className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-foreground/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-foreground/70">{feature.enterprise}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground/70">Have questions? We have answers.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-card transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-foreground/70 border-t border-border">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-8 rounded-xl bg-card border border-border text-center"
          >
            <p className="text-foreground/70 mb-4">Still have questions?</p>
            <a href="/payment" className="text-accent hover:underline font-medium">
              Contact our sales team
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
