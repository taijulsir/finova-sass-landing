'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm">
            🚀 Introducing Innovate Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
        >
          Build without limits.
          <br />
          <span className="text-accent">Scale with confidence.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          The complete platform for teams who want to build faster, deploy smarter, and collaborate seamlessly. From concept to production in hours, not months.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#pricing"
            className="px-8 py-3.5 sm:py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2 min-h-[44px]"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/features"
            className="px-8 py-3.5 sm:py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary/5 transition-colors font-semibold min-h-[44px] flex items-center justify-center"
          >
            Explore Features
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-border">
          <p className="text-foreground/60 text-sm font-medium mb-6">Trusted by innovative teams worldwide</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {['TechVenture', 'StartupHub', 'BuildNow', 'CloudSync'].map((company) => (
              <div key={company} className="text-foreground/40 font-semibold text-sm">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
