import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <div className="flex flex-col w-full bg-muted/10 min-h-[calc(100vh-4rem)]">
      <section className="bg-primary py-16 md:py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <FileText className="h-12 w-12 mx-auto mb-6 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Use</h1>
          <p className="text-xl text-primary-foreground/80">
            The rules and expectations for using The Summit Center website.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm text-muted-foreground mb-10">Last updated: May 2026</p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">About This Site</h2>
          <p className="text-muted-foreground leading-relaxed">
            This website is operated by The Summit Center planning team, a community initiative working to establish a teen recreation, education, and career center in the 29229 zip code of Columbia, South Carolina. By using this website, you agree to the terms described below.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Use of the Site</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may use this website to learn about The Summit Center, sign up for updates, express volunteer interest, submit suggestions, and get in touch with our team. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
            <li>Submit false, misleading, or harmful information through any form.</li>
            <li>Attempt to gain unauthorized access to any part of the site or its systems.</li>
            <li>Use the site to send spam or unsolicited communications.</li>
            <li>Interfere with the operation of the site in any way.</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Information You Submit</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you submit information through our forms — including your name, email, phone number, or suggestions — you confirm that the information is accurate and that you have the right to share it. You understand that submitted information may be used to contact you about The Summit Center.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Community suggestions submitted through this site may be shared publicly (for example, posted on our community voices page) without identifying you personally, unless you request otherwise.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            The content on this site — including text, design, and images — is the property of The Summit Center planning team or used with permission. You may share links to this site and reference its content for community, educational, or informational purposes. Please do not reproduce large portions of the content without permission.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">No Warranties</h2>
          <p className="text-muted-foreground leading-relaxed">
            This site is provided as-is by a volunteer-run community project. We do our best to keep information accurate and the site running smoothly, but we make no guarantees about the availability, accuracy, or completeness of the content. Plans for The Summit Center are subject to change as the project develops.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            To the extent permitted by law, The Summit Center planning team is not liable for any damages arising from your use of this website or reliance on its content. This is a community planning site — not a legally established entity with binding commitments.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">External Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            This site may contain links to other websites for reference or convenience. We are not responsible for the content or practices of those sites.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Changes to These Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update these terms from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site after changes are posted constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-3">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Questions about these terms? Reach us at{" "}
            <a href="mailto:summitteencenter@gmail.com" className="text-primary hover:underline">
              summitteencenter@gmail.com
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
