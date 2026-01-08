import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ImageIcon } from "lucide-react";

const screenshots = [
  { label: "Risk alert", description: "Get notified of pest and disease risks before they impact your crops" },
  { label: "Weekly plan", description: "See your prioritised tasks for the week with optimal timing" },
  { label: "Cooperative report", description: "Track performance across your farmer network" },
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
              Watch how farmers use Agrolumen to make smarter decisions—from photo upload to weekly action plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Embed */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="aspect-video rounded-2xl bg-card border border-border card-shadow overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full hero-gradient mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Play className="h-10 w-10 text-primary-foreground ml-1" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Demo video coming soon
                </h3>
                <p className="text-muted-foreground">
                  Loom/YouTube embed placeholder
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots */}
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
              Product screenshots
            </h2>
            <p className="text-muted-foreground">
              A closer look at the key screens and features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-xl bg-background border border-border card-shadow flex flex-col items-center justify-center p-6 mb-4 group-hover:card-shadow-hover transition-shadow">
                  <ImageIcon className="h-16 w-16 text-muted-foreground/20 mb-4" />
                  <span className="text-sm text-muted-foreground">Screenshot placeholder</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {screenshot.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {screenshot.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our early access programme and start making smarter field decisions.
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
