import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-12">
                {/* Introduction */}
                <section>
                  <p className="text-muted-foreground leading-relaxed">
                    Agrolumen ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy 
                    explains how we collect, use, disclose, and safeguard your information when you use our 
                    AI-powered agricultural decision support platform.
                  </p>
                </section>

                {/* What We Collect */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    What we collect
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Account information:</strong> Name, email address, organisation, role, and country when you sign up or contact us.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Field data:</strong> Photos of crops, location data, and field notes you submit for analysis.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Usage data:</strong> How you interact with our platform, including features used and time spent.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Device information:</strong> Browser type, operating system, and device identifiers.</span>
                    </li>
                  </ul>
                </section>

                {/* How We Use It */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    How we use it
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To provide personalised crop analysis and recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To generate weather-aware action plans for your fields</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To send you alerts about risks in your area</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To improve our AI models and platform features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To communicate with you about your account and our services</span>
                    </li>
                  </ul>
                </section>

                {/* Sharing */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Sharing your information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell your personal information. We may share data with:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Service providers:</strong> Third parties who help us operate our platform (hosting, analytics, weather data providers).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">With your consent:</strong> Cooperatives or organisations you authorise to access your data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Legal requirements:</strong> When required by law or to protect our rights.</span>
                    </li>
                  </ul>
                </section>

                {/* Retention */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Data retention
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your data for as long as your account is active or as needed to provide you services. 
                    You can request deletion of your data at any time by contacting us. Aggregated, anonymised data 
                    may be retained for research and improvement purposes.
                  </p>
                </section>

                {/* Security */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your data, including encryption 
                    in transit and at rest, secure cloud infrastructure, and access controls. However, no method 
                    of transmission over the internet is 100% secure.
                  </p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Contact us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy or your data, please contact us at:
                  </p>
                  <p className="mt-4">
                    <a href="mailto:privacy@agrolumen.com" className="text-primary hover:underline font-medium">
                      privacy@agrolumen.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
