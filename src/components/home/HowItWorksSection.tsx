import { motion } from "framer-motion";
import { Upload, Brain, CheckSquare, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Snap photos of your crops and share field notes. Takes seconds.",
  },
  {
    icon: Brain,
    title: "Analyse",
    description: "Our AI processes your data alongside weather and regional risk factors.",
  },
  {
    icon: CheckSquare,
    title: "Actions",
    description: "Receive clear, prioritised recommendations tailored to your situation.",
  },
  {
    icon: TrendingUp,
    title: "Track",
    description: "Monitor progress and see the impact of your decisions over time.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">
            From field photo to action plan in four simple steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary z-20">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
