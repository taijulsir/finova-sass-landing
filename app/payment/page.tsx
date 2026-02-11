'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { CreditCard, Lock, CheckCircle2, AlertCircle } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function PaymentPage() {
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
            Payment Methods & Billing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-foreground/70 text-pretty"
          >
            We support multiple payment methods to make billing convenient for teams worldwide.
          </motion.p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Supported Payment Methods</h2>
            <p className="text-lg text-foreground/70">
              We make it easy to pay for your Innovate subscription with globally recognized payment providers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {/* Stripe */}
            <motion.div variants={fadeInUp} className="p-8 rounded-xl bg-card border-2 border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Stripe</h3>
                  <p className="text-foreground/70">Global credit card processing</p>
                </div>
                <CreditCard className="w-8 h-8 text-accent flex-shrink-0" />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Visa, Mastercard, American Express</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Apple Pay & Google Pay</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Bank transfers (ACH)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">150+ countries supported</span>
                </div>
              </div>
              <p className="text-sm text-foreground/60">
                Industry-standard payment processor trusted by millions of businesses worldwide. PCI compliant and secured with encryption.
              </p>
            </motion.div>

            {/* SSLCommerz */}
            <motion.div variants={fadeInUp} className="p-8 rounded-xl bg-card border-2 border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">SSLCommerz</h3>
                  <p className="text-foreground/70">Regional payment gateway</p>
                </div>
                <Lock className="w-8 h-8 text-accent flex-shrink-0" />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Bkash, Nagad, Rocket</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Local bank cards</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Installment plans</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">South Asian support</span>
                </div>
              </div>
              <p className="text-sm text-foreground/60">
                Optimized for emerging markets with local payment methods. Trusted by leading South Asian businesses.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Billing Information */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Billing Details</h2>
            <p className="text-lg text-foreground/70">
              Everything you need to know about billing and pricing
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                title: 'Monthly & Annual Billing',
                description:
                  'Choose between monthly or annual billing. Annual plans come with a 10% discount. Invoices are automatically generated and sent to your email.',
              },
              {
                title: 'Free 14-Day Trial',
                description:
                  'No credit card required for your 14-day free trial. You\'ll get full access to all features in your chosen plan.',
              },
              {
                title: 'Flexible Plan Changes',
                description:
                  'Upgrade or downgrade your plan at any time. Adjustments are prorated and take effect immediately.',
              },
              {
                title: '30-Day Money-Back Guarantee',
                description:
                  'If you\'re not satisfied within your first 30 days, we\'ll refund your payment. No questions asked.',
              },
              {
                title: 'Transparent Pricing',
                description:
                  'No hidden fees. No surprise charges. What you see is what you pay. Tax is calculated based on your location.',
              },
              {
                title: 'Invoicing & Receipts',
                description:
                  'All transactions are documented with detailed invoices. Download receipts from your dashboard anytime.',
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="p-6 rounded-lg bg-background border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-primary text-sm font-bold">
                    {index + 1}
                  </span>
                  {item.title}
                </h3>
                <p className="text-foreground/70 ml-9">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-card border-2 border-accent/30"
          >
            <div className="flex items-start gap-4 mb-6">
              <Lock className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Security & Compliance</h3>
                <p className="text-foreground/70 mb-4">
                  All payment processing is handled with the highest security standards. Your financial information is never stored on our servers.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>PCI DSS Level 1 compliant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>End-to-end SSL/TLS encryption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>All payments processed by trusted processors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>GDPR and CCPA compliant</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 p-6 rounded-lg bg-card border border-border flex items-start gap-4"
          >
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-foreground font-medium mb-2">Need Help with Payments?</p>
              <p className="text-foreground/70 text-sm">
                If you encounter any issues processing your payment, our support team is here to help. Contact support@innovate.ai or visit our help center.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
