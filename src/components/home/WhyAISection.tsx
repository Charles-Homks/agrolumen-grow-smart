import { motion } from "framer-motion";
import { Camera, Cloud, Layers, ArrowRight, Zap } from "lucide-react";

export function WhyAISection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Farming decisions involve countless variables. AI helps you make sense of it all.
            </p>
          </div>

          <div className="relative p-8 md:p-12 rounded-2xl bg-background border border-border card-shadow">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Inputs */}
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Camera className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Crop photos</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Weather data</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Layers className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Field inputs</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center shadow-lg">
                  <Zap className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>

              {/* Output */}
              <div className="flex-1">
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span className="font-display font-semibold text-foreground">Actionable steps</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Prioritised weekly tasks
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Timing recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Risk mitigation actions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
