import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Smartphone, Zap, Clock, Users } from "lucide-react";
import { DemoMockup } from "@/components/demo/DemoMockup";

const included = [
  { icon: Smartphone, text: "Full mobile experience walkthrough" },
  { icon: Zap, text: "Live AI crop analysis demonstration" },
  { icon: Clock, text: "Weekly planning workflow example" },
  { icon: Users, text: "Cooperative dashboard preview" },
];

export default function Demo() {
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
              See Agrolumen in action
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore the key screens and workflows that help farmers make smarter decisions every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Demo Mockups */}
      <section className="pb-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-display text-xl font-semibold text-foreground">Crop Check</h3>
              <p className="text-muted-foreground text-sm">
                Upload a photo and receive instant AI analysis—health score, pest detection, and actionable recommendations.
              </p>
              <DemoMockup type="crop-check" size="lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-display text-xl font-semibold text-foreground">Weekly Plan</h3>
              <p className="text-muted-foreground text-sm">
                A prioritised task list for the week ahead, adjusted for weather conditions and field-specific needs.
              </p>
              <DemoMockup type="weekly-plan" size="lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secondary Mockups */}
      <section className="py-16 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              More features
            </h2>
            <p className="text-muted-foreground">
              From real-time alerts to cooperative-level reporting—everything you need to manage smarter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="space-y-4"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">Risk Alerts</h3>
              <p className="text-muted-foreground text-sm">
                Get notified of pest outbreaks, disease pressure, and weather events before they impact your crops.
              </p>
              <DemoMockup type="risk-alert" size="lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">Cooperative Dashboard</h3>
              <p className="text-muted-foreground text-sm">
                For cooperatives and field teams: monitor farmer activity, track health trends, and generate reports.
              </p>
              <DemoMockup type="cooperative-dashboard" size="lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              What's included in the demo
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to try it yourself?
            </h2>
            <p className="text-muted-foreground mb-8">
              Request early access and we'll set you up with a personalised walkthrough for your farm or organisation.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
