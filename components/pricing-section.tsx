'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn, hoverLift } from '@/lib/animations'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams just getting started.',
    cta: 'Start Free Trial',
    features: [
      'Up to 5 team members',
      '5GB storage',
      'Basic analytics',
      'Community support',
      'Core features',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Most popular. For growing teams.',
    cta: 'Start Free Trial',
    features: [
      'Up to 50 team members',
      '500GB storage',
      'Advanced analytics',
      'Priority email support',
      'All Starter features',
      'Custom workflows',
      'API access',
      'SSO',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations with unique needs.',
    cta: 'Contact Sales',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom integrations',
      '24/7 phone support',
      'All Professional features',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom security',
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Choose the plan that fits your team. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? 'bg-card border-2 border-accent ring-2 ring-accent/20 md:scale-105 relative'
                  : 'bg-card border border-border hover:border-accent/40'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-accent text-primary font-semibold text-xs">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/70 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-foreground/70 text-sm">{plan.period}</span>
                </div>
              </div>

              <Link
                href="/payment"
                className={`block w-full py-3 px-4 rounded-lg font-semibold mb-8 text-center transition-all ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'border-2 border-primary text-primary hover:bg-primary/5'
                }`}
              >
                {plan.cta}
              </Link>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-border text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Questions?</h3>
          <p className="text-foreground/70 mb-6">
            Check our <Link href="#" className="text-accent hover:underline">FAQ</Link> or{' '}
            <Link href="#" className="text-accent hover:underline">contact sales</Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
