import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-field.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Early access now open
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            AI decision support for{" "}
            <span className="text-gradient">smarter farming</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Turn field photos, weather data, and crop insights into weekly action plans—so you catch problems early, reduce input waste, and grow with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/demo">
                View demo
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="relative mx-auto max-w-5xl rounded-2xl bg-gradient-to-b from-primary/10 to-primary/5 p-2">
            <div className="rounded-xl overflow-hidden aspect-[16/9]">
              <img 
                src={heroImage} 
                alt="Lush green agricultural field at sunrise with rows of healthy crops"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-3 card-shadow">
                  <p className="text-sm font-medium text-foreground">Field Health: Excellent</p>
                  <p className="text-xs text-muted-foreground">Last scanned: 2 hours ago</p>
                </div>
                <div className="bg-primary/90 backdrop-blur-sm rounded-lg px-4 py-3 text-primary-foreground">
                  <p className="text-sm font-medium">3 tasks this week</p>
                  <p className="text-xs text-primary-foreground/80">View action plan →</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
