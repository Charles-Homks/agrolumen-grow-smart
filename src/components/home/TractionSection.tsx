import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DemoMockup } from "@/components/demo/DemoMockup";

export function TractionSection() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-6">
            Early access open
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground">
            Here's what the Agrolumen experience looks like—from risk alerts to weekly planning.
          </p>
        </motion.div>

        {/* Demo Mockups */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <DemoMockup type="risk-alert" size="md" />
            <p className="text-center text-sm text-muted-foreground mt-3">Risk alerts keep you ahead of threats</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <DemoMockup type="weekly-plan" size="md" />
            <p className="text-center text-sm text-muted-foreground mt-3">Weekly plans tailored to your fields</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DemoMockup type="crop-check" size="md" />
            <p className="text-center text-sm text-muted-foreground mt-3">AI analysis from a single photo</p>
          </motion.div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/demo">
              Explore full demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
