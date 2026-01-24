import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
import teamImage from "@/assets/team-field.jpg";

const whyNow = [
  { 
    title: "AI is ready", 
    description: "Vision and language models can now reliably analyse crop photos and synthesise recommendations at scale—something impossible just three years ago." 
  },
  { 
    title: "Mobile is everywhere", 
    description: "Smartphone penetration in rural Africa has crossed 50%. The infrastructure to deliver AI insights to farmers already exists in their pockets." 
  },
  { 
    title: "Climate demands it", 
    description: "Traditional farming knowledge is less reliable as weather patterns shift. Farmers need adaptive, data-driven guidance to navigate uncertainty." 
  },
];

const team = [
  {
    name: "James Ochieng",
    role: "Founder & CEO",
    bio: "Agricultural engineer turned AI product builder. 8 years in agritech across Kenya and Uganda. Previously led product at a climate-smart agriculture startup. Believes technology should serve farmers, not the other way around.",
  },
];

const advisors = [
  { name: "Dr. Sarah Kimani", role: "Agricultural Science Advisor" },
  { name: "Michael Adebayo", role: "AI/ML Technical Advisor" },
  { name: "Esther Wanjiku", role: "Cooperative Development Advisor" },
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
              We're building the AI tools that help farmers and field teams make better decisions—faster, cheaper, and with less guesswork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="aspect-[21/9] rounded-2xl overflow-hidden card-shadow">
              <img 
                src={teamImage} 
                alt="Agricultural field team working together at sunset"
                className="w-full h-full object-cover"
              />
            </div>
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
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Agriculture is changing faster than ever. Climate volatility, new pest pressures, and market demands make farming more unpredictable—and the stakes higher. Yet most farmers still rely on experience and intuition alone, without access to the data and insights that could transform their outcomes.
              </p>
              <p>
                Agrolumen exists to close that gap. We combine AI, hyperlocal weather data, and field observations to deliver clear, actionable guidance that any farmer can use. Not to replace agronomists, but to extend their reach. Not to complicate farming, but to simplify the decisions that matter most.
              </p>
              <p className="font-medium text-foreground">
                Our goal: help 1 million farmers make smarter decisions by 2030.
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
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Why now?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whyNow.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
                <div key={member.name} className="flex flex-col md:flex-row gap-6 items-center md:items-start p-6 bg-background rounded-2xl border border-border">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex gap-3 mt-4 justify-center md:justify-start">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
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
              <div className="flex flex-wrap justify-center gap-3">
                {advisors.map((advisor) => (
                  <div key={advisor.name} className="px-4 py-3 rounded-lg bg-background border border-border">
                    <span className="font-medium text-foreground">{advisor.name}</span>
                    <span className="text-muted-foreground text-sm"> · {advisor.role}</span>
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
              We're looking for pilot partners, early adopters, and people who believe in the power of AI for agriculture. If that's you, let's talk.
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
