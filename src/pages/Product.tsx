import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, CloudSun, Bell, FileBarChart, ArrowRight, Rocket, MessageSquare, Globe, Satellite } from "lucide-react";
import cropImage from "@/assets/crop-closeup.jpg";
import farmerImage from "@/assets/farmer-phone.jpg";

const modules = [
  {
    icon: Camera,
    title: "Crop Check",
    description: "Upload photos of your crops and receive instant AI-powered analysis. Identify pests, diseases, nutrient deficiencies, and growth anomalies before they spread.",
    features: [
      "Photo-based crop health assessment",
      "Pest and disease identification with confidence scores",
      "Nutrient deficiency detection (N, P, K, micronutrients)",
      "Growth stage tracking and yield indicators",
      "Supports maize, beans, wheat, sorghum, and more",
    ],
    image: cropImage,
    imageAlt: "Close-up of healthy crop leaves being examined",
  },
  {
    icon: CloudSun,
    title: "Weather-Aware Planner",
    description: "Weekly action plans that account for local weather forecasts. Know exactly when to spray, irrigate, or harvest based on real conditions—not just calendar dates.",
    features: [
      "7-day hyperlocal weather integration",
      "Optimal spray and irrigation windows",
      "Activity scheduling with weather-adjusted timing",
      "Seasonal planning and crop cycle tracking",
      "Push notifications for schedule changes",
    ],
    image: farmerImage,
    imageAlt: "Farmer checking phone in agricultural field",
  },
  {
    icon: Bell,
    title: "Risk Alerts",
    description: "Get notified before problems hit. We monitor regional pest pressure, disease outbreaks, and extreme weather events to give you early warnings tailored to your location.",
    features: [
      "Regional pest outbreak monitoring (15km radius)",
      "Disease pressure alerts based on conditions",
      "Extreme weather warnings (frost, hail, heavy rain)",
      "Customisable notification preferences",
      "Alert history and response tracking",
    ],
  },
  {
    icon: FileBarChart,
    title: "Reports & Insights",
    description: "Track progress and share insights with stakeholders. Generate clear reports that summarise field activities, crop health trends, and outcomes over time.",
    features: [
      "Field activity summaries (daily, weekly, monthly)",
      "Crop health trends and progression charts",
      "Input usage tracking and cost analysis",
      "Exportable PDFs for stakeholders and lenders",
      "Cooperative-level aggregated reporting",
    ],
  },
];

const roadmapItems = [
  { icon: MessageSquare, title: "WhatsApp integration", description: "Receive recommendations and submit photos via WhatsApp", status: "In development" },
  { icon: Globe, title: "Multi-language support", description: "Swahili, Amharic, and French interfaces", status: "Q2 2025" },
  { icon: Satellite, title: "Satellite imagery analysis", description: "Monitor field health at scale without leaving your desk", status: "Q3 2025" },
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
              Everything you need to farm smarter
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Four integrated modules that work together—giving you complete visibility and actionable guidance from planting to harvest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="space-y-24">
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <ul className="space-y-3">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  {module.image ? (
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden card-shadow">
                      <img 
                        src={module.image} 
                        alt={module.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] rounded-2xl bg-background border border-border card-shadow flex items-center justify-center">
                      <div className="text-center p-8">
                        <module.icon className="h-16 w-16 text-primary/20 mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground">Feature preview</p>
                      </div>
                    </div>
                  )}
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
              We're constantly improving Agrolumen based on farmer feedback and field testing.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-foreground">{item.title}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
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
              Explore our interactive demo or request early access to start transforming your field decisions.
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
