'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Target, Users, Zap, Heart } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const values = [
  {
    icon: Target,
    title: 'Mission First',
    description: 'We focus on solving real problems for our users, not chasing trends.',
  },
  {
    icon: Users,
    title: 'Team Driven',
    description: 'Your success is our success. We build with our customers in mind.',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable',
    description: 'Speed matters. We optimize for performance without compromising quality.',
  },
  {
    icon: Heart,
    title: 'Quality Obsessed',
    description: 'We take pride in every detail. Excellence is not optional.',
  },
]

const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Innovate was founded with a mission to simplify product development for teams.',
  },
  {
    year: '2021',
    title: 'Public Launch',
    description: 'We launched our platform publicly and rapidly gained traction with early adopters.',
  },
  {
    year: '2022',
    title: 'Enterprise Ready',
    description: 'Added enterprise features, security compliance, and dedicated support.',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded to 50+ countries with localized payment options and support.',
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Introduced AI-powered workflows and intelligent automation features.',
  },
  {
    year: '2025',
    title: 'Scale & Impact',
    description: 'Empowering 10,000+ teams worldwide to build at their best.',
  },
]

export default function AboutPage() {
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
            About Innovate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-foreground/70 text-pretty"
          >
            Building the future of product development, one team at a time.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                At Innovate, we believe that great teams deserve great tools. Our mission is to democratize access to
                enterprise-grade development platforms, enabling teams of any size to build, deploy, and scale their
                ideas at lightning speed.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We're not just building software. We're building the future of how teams collaborate and create. Every
                feature we ship, every optimization we make, is done with you in mind.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-accent/30 mb-4">I</div>
                <p className="text-foreground/60 text-sm font-medium">Building the future</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-lg text-foreground/70">
              These principles guide every decision we make and every product we build.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div key={index} variants={fadeInUp} className="p-6 rounded-lg bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground/70 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Journey</h2>
            <p className="text-lg text-foreground/70">
              From a startup idea to serving thousands of teams worldwide.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="hidden md:flex items-center justify-center w-24 flex-shrink-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{item.year}</div>
                  </div>
                </div>
                <div className="flex-1 p-6 rounded-lg bg-background border border-border">
                  <div className="md:hidden mb-4 text-accent font-bold">{item.year}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Built by Exceptional People</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Our team is made up of passionate engineers, designers, and product thinkers who are obsessed with
              building products that matter. We come from leading tech companies and startups around the world.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold"
            >
              View Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Join Us on This Journey</h2>
            <p className="text-lg text-foreground/70 mb-8 text-pretty">
              Become part of a community building the future of product development. Start your free trial today.
            </p>
            <a
              href="/pricing"
              className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
