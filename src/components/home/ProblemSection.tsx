import { motion } from "framer-motion";
import { AlertTriangle, CloudRain, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Late detection",
    description: "By the time you spot a pest or disease issue, the damage is already done. Early intervention is nearly impossible without constant monitoring.",
  },
  {
    icon: CloudRain,
    title: "Weather volatility",
    description: "Unpredictable weather patterns disrupt planting, spraying, and harvest schedules, leading to crop losses and wasted resources.",
  },
  {
    icon: TrendingDown,
    title: "Input waste",
    description: "Over-application of fertilisers and pesticides hurts yields and margins. Without data, it's guesswork—and expensive guesswork.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why farming decisions fail
          </h2>
          <p className="text-lg text-muted-foreground">
            Traditional farming relies on experience and intuition—but today's challenges demand more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl bg-background border border-border card-shadow transition-all duration-300 group-hover:card-shadow-hover">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
