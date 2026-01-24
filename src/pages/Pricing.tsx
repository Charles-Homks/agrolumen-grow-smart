import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    target: "Individual farmers",
    price: "$15",
    period: "/month",
    description: "Everything you need to get started with AI-powered crop insights on your own farm.",
    features: [
      "Unlimited crop photo analysis",
      "Weekly action plans",
      "Weather integration (7-day forecast)",
      "Risk alerts for your location",
      "Mobile app access (iOS & Android)",
      "Email support",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Team",
    target: "Cooperatives & field teams",
    price: "$49",
    period: "/month",
    description: "For organisations managing multiple farmers, plots, or field agents across a region.",
    features: [
      "Everything in Starter",
      "Up to 25 user accounts",
      "Cooperative dashboard & analytics",
      "Aggregated reporting",
      "Farmer activity tracking",
      "Priority support (24hr response)",
    ],
    cta: "Get started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    target: "Large agribusinesses",
    price: "Custom",
    period: "",
    description: "For organisations with specific integration, scale, or compliance requirements.",
    features: [
      "Everything in Team",
      "Unlimited users",
      "Custom API integrations",
      "Dedicated account manager",
      "SLA guarantees (99.9% uptime)",
      "On-premise deployment options",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "We offer a 14-day free trial on all plans. No credit card required to start.",
  },
  {
    question: "What's included in pilot pricing?",
    answer: "Qualifying organisations in our pilot regions get 50% off for the first 6 months, plus dedicated onboarding support.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade at any time. Changes take effect on your next billing cycle.",
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes—annual plans come with 2 months free (17% discount).",
  },
];

export default function Pricing() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-6">
              Pilot pricing available
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Start free, then choose the plan that fits your operation. All plans include our core AI features.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground ring-2 ring-primary"
                    : "bg-card border border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Most popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.target}
                  </p>
                </div>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={`h-5 w-5 flex-shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "secondary" : "default"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-16 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <HelpCircle className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Pricing questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-background border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Need a custom solution?
            </h2>
            <p className="text-muted-foreground mb-6">
              We offer flexible arrangements for pilot programmes, NGOs, and large-scale deployments. Let's talk.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">
                Contact us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
