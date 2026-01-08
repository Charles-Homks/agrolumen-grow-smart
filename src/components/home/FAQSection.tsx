import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does Agrolumen replace my agronomist?",
    answer: "No. Agrolumen handles routine monitoring and decision support, freeing your agronomist to focus on complex problems. Think of it as a knowledgeable assistant that helps you ask better questions and catch issues early—not a replacement for expert advice when you need it.",
  },
  {
    question: "What devices do I need?",
    answer: "Just a smartphone with a camera. Agrolumen works on both iOS and Android devices. No special equipment, drones, or sensors required to get started.",
  },
  {
    question: "Which crops are supported?",
    answer: "We're currently focused on major field crops common in our pilot regions. We're expanding crop coverage regularly—contact us to discuss your specific needs.",
  },
  {
    question: "Which regions do you cover?",
    answer: "We're starting with selected regions in East and Southern Africa. If you're interested in other areas, let us know—we're actively exploring new markets.",
  },
];

export function FAQSection() {
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
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick answers to common questions about Agrolumen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
