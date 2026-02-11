'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Workflow, Users, BarChart3, Globe } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy changes instantly. No waiting, no downtime. Your ideas go live immediately.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance. Your data is protected with military-grade security.',
  },
  {
    icon: Workflow,
    title: 'Smart Workflows',
    description: 'Automate repetitive tasks. Focus on what matters. Let Innovate handle the rest.',
  },
  {
    icon: Users,
    title: 'Seamless Collaboration',
    description: 'Real-time updates across your entire team. Everyone stays on the same page.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Deep insights into your performance. Data-driven decisions made simple.',
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: 'Served from 150+ locations worldwide. Lightning-fast for every user.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-32 bg-card">
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
            Everything you need to succeed
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            A comprehensive suite of tools designed to streamline your workflow and maximize productivity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-xl bg-background border border-border hover:border-accent/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
