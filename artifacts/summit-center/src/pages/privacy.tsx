import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="flex flex-col w-full bg-muted/10 min-h-[calc(100vh-4rem)]">
      <section className="bg-primary py-16 md:py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Shield className="h-12 w-12 mx-auto mb-6 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-primary-foreground/80">
            How The Summit Center collects, uses, and protects your information.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
          <p className="text-sm text-muted-foreground mb-10">Last updated: May 2026</p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Summit Center is a community initiative working to establish a teen recreation, education, and career center in the 29229 zip code of Columbia, South Carolina. This website is operated by The Summit Center planning team. You can reach us at{" "}
            <a href="mailto:summitteencenter@gmail.com" className="text-primary hover:underline">
              summitteencenter@gmail.com
            </a>.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            We only collect information you choose to give us through the forms on this site:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
            <li><strong className="text-foreground">Newsletter sign-up:</strong> your name and email address.</li>
            <li><strong className="text-foreground">Volunteer interest form:</strong> your name, email address, phone number, neighborhood, areas of interest, and any message you include.</li>
            <li><strong className="text-foreground">Contact form:</strong> your name, email address, subject, and message.</li>
            <li><strong className="text-foreground">Community suggestion box:</strong> your name and neighborhood (both optional) and your suggestion.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We do not collect any payment information, government IDs, or sensitive personal data.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use the information you submit solely to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
            <li>Send you updates about The Summit Center's progress (newsletter).</li>
            <li>Follow up with volunteers and community members who express interest in helping.</li>
            <li>Respond to your questions and contact messages.</li>
            <li>Understand community needs and preferences as we plan the center.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We do not sell, rent, trade, or share your personal information with any third party for marketing purposes.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Email Communications</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you sign up for the newsletter, we will send you occasional updates about the center. You can opt out at any time by emailing us at{" "}
            <a href="mailto:summitteencenter@gmail.com" className="text-primary hover:underline">
              summitteencenter@gmail.com
            </a>{" "}
            and asking to be removed from our list.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Data Storage and Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your information is stored in a secure database. We take reasonable precautions to protect it from unauthorized access. This is a volunteer-run community project; while we do our best to keep your data safe, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            This website is intended for adults and community members. We do not knowingly collect personal information from anyone under 13 years of age through our website forms.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request to review, update, or delete any personal information you have submitted to us by contacting us at{" "}
            <a href="mailto:summitteencenter@gmail.com" className="text-primary hover:underline">
              summitteencenter@gmail.com
            </a>. We will respond within a reasonable timeframe.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this policy as the project grows. When we do, we will update the date at the top of this page. Continued use of the site after changes are posted means you accept the updated policy.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            Questions about this privacy policy? Reach us at{" "}
            <a href="mailto:summitteencenter@gmail.com" className="text-primary hover:underline">
              summitteencenter@gmail.com
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
