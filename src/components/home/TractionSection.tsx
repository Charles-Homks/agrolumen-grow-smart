import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageIcon } from "lucide-react";

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
            Explore how Agrolumen helps farmers make better decisions every day.
          </p>
        </motion.div>

        {/* Screenshot placeholders */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Risk alert notification", aspect: "aspect-[4/3]" },
            { label: "Weekly action plan", aspect: "aspect-[4/3]" },
            { label: "Cooperative dashboard", aspect: "aspect-[4/3]" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${item.aspect} rounded-xl bg-card border border-border card-shadow flex flex-col items-center justify-center p-6`}
            >
              <ImageIcon className="h-12 w-12 text-muted-foreground/30 mb-3" />
              <p className="text-sm text-muted-foreground text-center">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/demo">
              Watch full demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
