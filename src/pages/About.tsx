import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Founder Name",
    role: "Founder & CEO",
    bio: "Background in agriculture technology and AI. Passionate about empowering farmers with data-driven tools.",
    placeholder: true,
  },
];

const advisors = [
  { name: "Advisor 1", role: "Agricultural Expert" },
  { name: "Advisor 2", role: "AI/ML Specialist" },
];

export default function About() {
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
              Making farming smarter, one decision at a time
            </h1>
            <p className="text-lg text-muted-foreground">
              We're building AI tools that help farmers and field teams make better decisions—faster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Our mission
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Agriculture is changing. Climate volatility, pest pressures, and market demands are more unpredictable 
                than ever. Yet most farmers still rely on experience and intuition alone—without access to the data 
                and insights that could transform their outcomes.
              </p>
              <p className="text-lg leading-relaxed">
                Agrolumen exists to close that gap. We combine AI, weather data, and field observations to deliver 
                actionable guidance that any farmer can use—no agronomist required for routine decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Why now?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI maturity", description: "Vision and language models can now reliably analyse crop photos and synthesise recommendations." },
                { title: "Mobile penetration", description: "Smartphones are ubiquitous—even in rural areas. The infrastructure for delivery exists." },
                { title: "Climate urgency", description: "Traditional knowledge is less reliable. Farmers need adaptive, data-driven guidance." },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
              Meet the team
            </h2>
            
            {/* Founder */}
            <div className="mb-12">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-32 h-32 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="text-muted-foreground text-sm">Photo</span>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-display text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                    <div className="flex gap-3 mt-4 justify-center md:justify-start">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Advisors */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-6 text-center">
                Advisors
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {advisors.map((advisor) => (
                  <div key={advisor.name} className="px-4 py-3 rounded-lg bg-background border border-border">
                    <span className="font-medium text-foreground">{advisor.name}</span>
                    <span className="text-muted-foreground"> · {advisor.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Join us on this journey
            </h2>
            <p className="text-muted-foreground mb-8">
              We're looking for partners, early adopters, and people who believe in the power of AI for agriculture.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
