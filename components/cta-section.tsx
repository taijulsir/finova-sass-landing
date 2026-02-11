'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp } from '@/lib/animations'

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-card to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Background accent */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to transform your workflow?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8 text-pretty">
            Join hundreds of teams using Innovate to build better products, faster. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="#pricing"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary/5 transition-colors font-semibold"
            >
              Learn More
            </Link>
          </div>

          <p className="text-sm text-foreground/60">
            No credit card required. Set up takes less than 2 minutes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
