import { Shield, Camera, Ban, FileText, Stethoscope, UserCheck, Search, Users, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Safety() {
  const policies = [
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Metal Detector Entry",
      description: "All entrances are equipped with state-of-the-art, non-intrusive metal detection systems to ensure a secure environment for everyone inside."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-primary" />,
      title: "Access Control",
      description: "Secure, monitored access to the facility and specific areas like bathrooms. Members use ID badges, and all visitors must sign in at the front desk."
    },
    {
      icon: <Camera className="h-6 w-6 text-primary" />,
      title: "Security Cameras",
      description: "Comprehensive 24/7 video monitoring across all public spaces, hallways, and exterior perimeters to deter issues and ensure accountability."
    },
    {
      icon: <Ban className="h-6 w-6 text-destructive" />,
      title: "Zero-Tolerance Policy",
      description: "Strict prohibition of weapons, drugs, alcohol, and violence. Any violation results in immediate removal and suspension of membership."
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Liability Waivers",
      description: "Clear and comprehensive waivers signed by parents or guardians for all activities to ensure mutual understanding of expectations and risks."
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      title: "First Aid Station",
      description: "Fully equipped on-site first aid station manned by CPR/AED certified staff during all operating hours to address medical needs promptly."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Age Verification",
      description: "Strict age verification policies to ensure our programs and facilities remain an exclusive, safe environment for teenagers."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-primary" />,
      title: "Background Checks",
      description: "Mandatory, rigorous criminal background checks for all staff, volunteers, and mentors before they can interact with our members."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Parent Involvement",
      description: "We require active parent/guardian communication and offer orientation sessions to keep families engaged in our safety protocols."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Safety & Standards</h1>
          <p className="text-xl text-muted-foreground">
            We take the safety of our teens seriously. Our facility is built on a foundation of trust, vigilance, and comprehensive security protocols.
          </p>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors bg-white shadow-sm">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    {policy.icon}
                  </div>
                  <CardTitle className="text-lg leading-tight">{policy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {policy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-display font-bold mb-4">Have Questions About Our Policies?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            We believe transparency is key to safety. If you are a parent or guardian with concerns about our security measures, we want to hear from you.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
