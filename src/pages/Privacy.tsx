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
              Last updated: January 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-12">
                {/* Introduction */}
                <section>
                  <p className="text-muted-foreground leading-relaxed">
                    Agrolumen ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy 
                    explains how we collect, use, disclose, and safeguard your information when you use our 
                    AI-powered agricultural decision support platform and related services.
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
                      <span><strong className="text-foreground">Account information:</strong> Name, email address, phone number, organisation, role, and country when you register or contact us.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Field data:</strong> Photos of crops, GPS coordinates, field notes, and other agricultural data you submit for analysis.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Usage data:</strong> How you interact with our platform, including features used, frequency of access, and time spent.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Device information:</strong> Browser type, operating system, device identifiers, and IP address.</span>
                    </li>
                  </ul>
                </section>

                {/* How We Use It */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    How we use your information
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To provide personalised crop health analysis and recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To generate weather-aware action plans tailored to your fields</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To send risk alerts about pests, diseases, and weather events in your area</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To improve our AI models and platform features based on aggregated, anonymised data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To communicate with you about your account, updates, and our services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>To comply with legal obligations and protect our rights</span>
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
                      <span><strong className="text-foreground">Service providers:</strong> Third parties who help us operate our platform (cloud hosting, weather data providers, analytics).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">With your consent:</strong> Cooperatives, aggregators, or organisations you explicitly authorise to access your data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Legal requirements:</strong> When required by law, court order, or to protect our rights and safety.</span>
                    </li>
                  </ul>
                </section>

                {/* Retention */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Data retention
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal data for as long as your account is active or as needed to provide you services. 
                    Field data (photos, notes) is retained for up to 3 years to enable historical tracking and analysis.
                    You can request deletion of your data at any time. Aggregated, anonymised data may be retained 
                    indefinitely for research and improvement purposes.
                  </p>
                </section>

                {/* Security */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your data, including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mt-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>Encryption in transit (TLS/SSL) and at rest (AES-256)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>Secure cloud infrastructure with regular security audits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>Role-based access controls and authentication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>Regular backups and disaster recovery procedures</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                {/* User Rights */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Your rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal data:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Portability:</strong> Request your data in a machine-readable format.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span><strong className="text-foreground">Withdrawal of consent:</strong> Withdraw consent for data processing where applicable.</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise any of these rights, please contact us at the email address below.
                  </p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Contact us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy, your data, or wish to exercise your rights, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-card rounded-xl border border-border">
                    <p className="font-medium text-foreground">Agrolumen Privacy Team</p>
                    <a href="mailto:privacy@agrolumen.com" className="text-primary hover:underline">
                      privacy@agrolumen.com
                    </a>
                  </div>
                </section>

                {/* Updates */}
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Changes to this policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by 
                    posting the new policy on this page and updating the "Last updated" date. We encourage you to review 
                    this policy periodically.
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
