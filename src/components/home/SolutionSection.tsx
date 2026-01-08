import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            The Agrolumen solution
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            AI that understands your fields
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Agrolumen combines crop photos, weather forecasts, and field data to deliver 
            personalised, actionable guidance—straight to your phone. No agronomist required 
            for routine decisions. Just clear, timely recommendations that help you act before 
            problems escalate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
