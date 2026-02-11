'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export function ProductPreview() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Intuitive dashboard to manage everything
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Get real-time insights into your projects with our powerful dashboard. Manage teams, track progress, and collaborate seamlessly in one place.
          </p>
        </motion.div>

        {/* Dashboard Mock */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-xl"
        >
          {/* Browser Frame */}
          <div className="bg-card">
            {/* Browser Header */}
            <div className="h-12 bg-secondary border-b border-border flex items-center px-4 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 text-xs text-foreground/50">innovate.ai/dashboard</div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 bg-background min-h-96">
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-4 rounded-lg bg-card border border-border">
                    <div className="text-xs text-foreground/60 mb-2">Metric {i}</div>
                    <div className="text-2xl font-bold text-foreground">{i}2.{i * 3}K</div>
                    <div className="text-xs text-green-600 mt-2">+{i}2% this month</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Chart Area */}
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-sm font-medium text-foreground mb-4">Project Performance</div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="text-xs text-foreground/60 w-8">P{i}</div>
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full"
                            style={{ width: `${25 + i * 15}%` }}
                          />
                        </div>
                        <div className="text-xs font-medium text-foreground w-8 text-right">{25 + i * 15}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity Area */}
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-sm font-medium text-foreground mb-4">Recent Activity</div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-foreground">Team member {i} completed a task</div>
                          <div className="text-xs text-foreground/50">2 minutes ago</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-24 -right-4 px-4 py-2 rounded-lg bg-accent/20 border border-accent/40 text-sm font-medium text-accent"
          >
            Real-time Updates
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-24 -left-4 px-4 py-2 rounded-lg bg-accent/20 border border-accent/40 text-sm font-medium text-accent"
          >
            100% Uptime
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
