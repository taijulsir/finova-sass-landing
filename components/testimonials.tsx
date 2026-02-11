'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'CEO, TechVenture',
    quote: 'Innovate reduced our deployment time by 80%. Our team is moving faster than ever before.',
    stars: 5,
  },
  {
    name: 'Marcus Johnson',
    title: 'Lead Engineer, StartupHub',
    quote:
      'The collaboration features are exceptional. We shipped a major feature in half the time it would have taken before.',
    stars: 5,
  },
  {
    name: 'Elena Rodriguez',
    title: 'Product Manager, CloudSync',
    quote: 'Best investment we made. The analytics dashboard gives us insights we never had before.',
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Loved by teams worldwide
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See what our customers are saying about Innovate.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp} className="p-8 rounded-xl bg-background border border-border">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
