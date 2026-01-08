import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    target: "Individual farmers",
    price: "$X",
    period: "/month",
    description: "Perfect for individual farmers getting started with AI-powered insights.",
    features: [
      "Crop Check (unlimited photos)",
      "Weekly action plans",
      "Basic weather integration",
      "Email support",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Team",
    target: "Cooperatives & field teams",
    price: "$XX",
    period: "/month",
    description: "For cooperatives and field teams managing multiple farmers or plots.",
    features: [
      "Everything in Starter",
      "Multi-user access",
      "Cooperative dashboards",
      "Advanced reporting",
      "Priority support",
    ],
    cta: "Get started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    target: "Custom solutions",
    price: "Custom",
    period: "",
    description: "For large agribusinesses with specific integration and scale requirements.",
    features: [
      "Everything in Team",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "API access",
    ],
    cta: "Contact sales",
    highlighted: false,
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
              Choose the plan that fits your needs. All plans include our core AI features.
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

      {/* FAQ CTA */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Have questions about pricing?
            </h2>
            <p className="text-muted-foreground mb-6">
              We offer flexible pilot pricing for early adopters. Get in touch to discuss your needs.
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
