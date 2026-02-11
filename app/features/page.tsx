'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Shield, Workflow, Users, BarChart3, Globe, Lock, Smartphone, Cpu } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const featureCategories = [
  {
    category: 'Core Features',
    description: 'Everything you need to get started',
    features: [
      {
        icon: Zap,
        title: 'Lightning Fast Deployment',
        description: 'Deploy your applications in seconds, not hours. Automatic scaling handles traffic spikes.',
      },
      {
        icon: Workflow,
        title: 'Smart Workflows',
        description: 'Automate complex processes with visual workflow builder. No coding required.',
      },
      {
        icon: Users,
        title: 'Team Collaboration',
        description: 'Real-time collaboration with your team. Comments, mentions, and shared workspaces.',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    description: 'Enterprise-grade security and compliance',
    features: [
      {
        icon: Shield,
        title: 'Bank-Level Encryption',
        description: 'End-to-end encryption for all data. SOC 2, HIPAA, and GDPR compliant.',
      },
      {
        icon: Lock,
        title: 'Advanced Access Control',
        description: 'Role-based access control (RBAC) with granular permissions. SSO support.',
      },
      {
        icon: Cpu,
        title: 'Zero-Trust Architecture',
        description: 'Every access verified. Continuous monitoring and threat detection.',
      },
    ],
  },
  {
    category: 'Analytics & Insights',
    description: 'Data-driven decision making',
    features: [
      {
        icon: BarChart3,
        title: 'Advanced Analytics',
        description: 'Real-time dashboards and custom reports. Track KPIs that matter to your business.',
      },
      {
        icon: Smartphone,
        title: 'Mobile Analytics',
        description: 'Monitor app performance on iOS and Android. User behavior tracking.',
      },
      {
        icon: Globe,
        title: 'Global Infrastructure',
        description: 'Deployed in 150+ locations. DDoS protection and automatic failover.',
      },
    ],
  },
]

export default function FeaturesPage() {
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
            Powerful Features for Every Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-foreground/70 text-pretty"
          >
            Everything you need to build, deploy, and scale your applications with confidence.
          </motion.p>
        </div>
      </section>

      {/* Features by Category */}
      {featureCategories.map((categoryGroup, categoryIndex) => (
        <section key={categoryIndex} className={categoryIndex % 2 === 0 ? 'bg-background' : 'bg-card'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{categoryGroup.category}</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{categoryGroup.description}</p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {categoryGroup.features.map((feature, featureIndex) => {
                const Icon = feature.icon
                return (
                  <motion.div key={featureIndex} variants={fadeInUp} className="group">
                    <div className="h-full p-8 rounded-xl bg-background border border-border hover:border-accent/40 hover:shadow-lg transition-all">
                      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                      <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Included in all plans</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to get started?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 text-pretty">
              Start your free trial and unlock all features. No credit card required.
            </p>
            <a
              href="/pricing"
              className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold"
            >
              View Plans
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
