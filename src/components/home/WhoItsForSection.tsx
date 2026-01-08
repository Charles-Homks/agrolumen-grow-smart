import { motion } from "framer-motion";
import { User, Users, Building2 } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Farmers",
    items: [
      "Smallholders managing multiple crops",
      "Commercial growers scaling operations",
      "Farmers seeking data-driven insights",
    ],
  },
  {
    icon: Users,
    title: "Cooperatives & Aggregators",
    items: [
      "Farmer groups coordinating activities",
      "Aggregators tracking supplier quality",
      "Organisations supporting grower networks",
    ],
  },
  {
    icon: Building2,
    title: "Agribusiness Field Teams",
    items: [
      "Extension officers covering large areas",
      "Input suppliers advising customers",
      "Agronomists managing multiple clients",
    ],
  },
];

export function WhoItsForSection() {
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
            Who it's for
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for anyone making decisions in the field.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background border border-border card-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <audience.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {audience.title}
              </h3>
              <ul className="space-y-3">
                {audience.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
