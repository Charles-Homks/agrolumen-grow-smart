import { motion } from "framer-motion";
import { MessageSquare, ShieldAlert, CloudSun, FileText } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp-first guidance",
    description: "Get recommendations where you already are. No new apps to learn.",
    badge: "Roadmap",
  },
  {
    icon: ShieldAlert,
    title: "Pest & disease risk alerts",
    description: "Early warnings based on regional data and weather patterns.",
  },
  {
    icon: CloudSun,
    title: "Weather-aware planning",
    description: "Recommendations that account for forecasts, not just current conditions.",
  },
  {
    icon: FileText,
    title: "Simple reports",
    description: "Share progress with stakeholders in a format that makes sense.",
  },
];

export function FeaturesSection() {
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
            Key features
          </h2>
          <p className="text-lg text-muted-foreground">
            Practical tools designed for the realities of farming.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border card-shadow hover:card-shadow-hover transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                {feature.badge && (
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {feature.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
