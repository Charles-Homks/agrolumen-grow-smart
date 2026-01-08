import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, CloudSun, Bell, FileBarChart, ArrowRight, Rocket } from "lucide-react";

const modules = [
  {
    icon: Camera,
    title: "Crop Check",
    description: "Upload photos of your crops and receive instant AI-powered analysis. Our models identify pests, diseases, nutrient deficiencies, and growth anomalies—giving you clarity in seconds.",
    features: [
      "Photo-based crop health assessment",
      "Pest and disease identification",
      "Nutrient deficiency detection",
      "Growth stage tracking",
    ],
  },
  {
    icon: CloudSun,
    title: "Weather-Aware Planner",
    description: "Weekly action plans that account for local weather forecasts. Know exactly when to spray, irrigate, or harvest based on conditions—not just calendar dates.",
    features: [
      "7-day weather integration",
      "Optimal timing recommendations",
      "Activity scheduling",
      "Seasonal planning support",
    ],
  },
  {
    icon: Bell,
    title: "Risk Alerts",
    description: "Get notified before problems hit. Our system monitors regional pest pressure, disease outbreaks, and extreme weather events to give you early warnings.",
    features: [
      "Regional pest outbreak alerts",
      "Disease pressure monitoring",
      "Extreme weather warnings",
      "Customisable notification preferences",
    ],
  },
  {
    icon: FileBarChart,
    title: "Reports",
    description: "Track progress and share insights with stakeholders. Simple, clear reports that summarise field activities, crop health trends, and outcomes.",
    features: [
      "Field activity summaries",
      "Crop health trends",
      "Input usage tracking",
      "Exportable for stakeholders",
    ],
  },
];

const roadmapItems = [
  { title: "WhatsApp integration", status: "In development" },
  { title: "Multi-language support", status: "Planned" },
  { title: "Satellite imagery analysis", status: "Planned" },
  { title: "Market price integration", status: "Exploring" },
];

export default function Product() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything you need to make smarter field decisions
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Four integrated modules that work together to give you complete visibility and actionable guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="space-y-16">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6">
                    <module.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {module.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {module.description}
                  </p>
                  <ul className="space-y-3">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-2xl bg-background border border-border card-shadow flex items-center justify-center">
                    <module.icon className="h-16 w-16 text-muted-foreground/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-6">
              <Rocket className="h-4 w-4" />
              Roadmap
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's coming next
            </h2>
            <p className="text-lg text-muted-foreground">
              We're constantly improving Agrolumen based on farmer feedback.
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto">
            <div className="space-y-4">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-card border border-border"
                >
                  <span className="font-medium text-foreground">{item.title}</span>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-muted-foreground mb-8">
              Watch our demo or request early access to start transforming your field decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/demo">View demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
