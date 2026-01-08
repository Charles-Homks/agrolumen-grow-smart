import { motion } from "framer-motion";
import { Camera, Calendar, AlertCircle } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Crop Check",
    description: "Upload photos of your crops and get instant AI analysis. Identify pests, diseases, and nutrient deficiencies before they spread.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Calendar,
    title: "Weekly Plan",
    description: "Receive a personalised action plan each week based on your crops, local weather, and field conditions. Know exactly what to do and when.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: AlertCircle,
    title: "Risk Alerts & Reports",
    description: "Get notified of weather risks, pest outbreaks, and disease pressure in your area. Track progress with simple, shareable reports.",
    color: "bg-primary/10 text-primary",
  },
];

export function WhatYouGetSection() {
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
            What you get
          </h2>
          <p className="text-lg text-muted-foreground">
            Three core capabilities that transform how you manage your fields.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-background border border-border card-shadow transition-all duration-300 group-hover:card-shadow-hover group-hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
