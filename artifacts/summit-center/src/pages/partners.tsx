import { useListPartners } from "@workspace/api-client-react";
import { Link } from "wouter";
import { Handshake, CheckCircle2, ChevronRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Partners() {
  const { data: tiers, isLoading, error } = useListPartners();

  const getTierColors = (tierName: string) => {
    const name = tierName.toLowerCase();
    if (name.includes("gold")) {
      return {
        card: "border-secondary/50 shadow-xl ring-1 ring-secondary/20 bg-white relative overflow-hidden",
        header: "bg-secondary/10",
        title: "text-secondary",
        button: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        isPremier: true
      };
    }
    if (name.includes("silver")) {
      return {
        card: "border-border/50 bg-white shadow-md",
        header: "bg-muted/30",
        title: "text-slate-600",
        button: "bg-primary text-primary-foreground hover:bg-primary/90",
        isPremier: false
      };
    }
    return {
      card: "border-border/50 bg-white shadow-sm",
      header: "bg-muted/10",
      title: "text-amber-700/80",
      button: "bg-primary text-primary-foreground hover:bg-primary/90",
      isPremier: false
    };
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Handshake className="h-16 w-16 mx-auto mb-6 text-secondary" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Corporate Partnerships</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Invest in the future leaders of Columbia. Partnering with The Summit Center aligns your brand with community growth, youth empowerment, and civic responsibility.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-[500px] w-full rounded-xl" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-destructive p-8 bg-destructive/10 rounded-lg">
              Failed to load partner tiers. Please try again later.
            </div>
          ) : !tiers || tiers.length === 0 ? (
            <div className="text-center p-12 border rounded-lg bg-white">
              <p className="text-lg text-muted-foreground">Sponsorship information coming soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {tiers.map((tier) => {
                const styles = getTierColors(tier.tier);
                
                return (
                  <Card key={tier.id} className={`flex flex-col h-full ${styles.card}`}>
                    {styles.isPremier && (
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-secondary"></div>
                    )}
                    <CardHeader className={`border-b border-border/50 text-center pb-8 pt-8 ${styles.header}`}>
                      {styles.isPremier && (
                        <div className="inline-block mx-auto mb-3 bg-secondary/20 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          Premier Partner
                        </div>
                      )}
                      <CardTitle className={`text-3xl font-display font-bold mb-2 ${styles.title}`}>
                        {tier.tier}
                      </CardTitle>
                      <div className="text-2xl font-bold text-foreground mb-4">{tier.priceRange}</div>
                      <CardDescription className="text-base text-foreground/70">
                        {tier.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-1 p-6 md:p-8">
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Included Benefits</h4>
                      <ul className="space-y-4 mb-8">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className={`h-5 w-5 shrink-0 ${styles.isPremier ? 'text-secondary' : 'text-primary/70'}`} />
                            <span className="text-sm text-foreground/80 leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {tier.sampleSponsors && tier.sampleSponsors.length > 0 && (
                        <div className="mt-auto pt-6 border-t border-border/50">
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 text-center">Join partners like</p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {tier.sampleSponsors.map((sponsor, idx) => (
                              <span key={idx} className="text-xs font-medium bg-muted px-2 py-1 rounded-md text-foreground/70">
                                {sponsor}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                    
                    <CardFooter className="p-6 md:p-8 pt-0 mt-auto">
                      <Link href="/contact" className="w-full">
                        <Button className={`w-full h-12 text-base ${styles.button}`}>
                          Become a {tier.tier} Partner
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Briefcase className="h-12 w-12 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl font-display font-bold mb-6">Looking for a custom engagement?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer bespoke partnerships including naming rights for specific rooms, equipment sponsorships, and in-kind donation matching.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="h-12 px-8">
              Discuss Custom Options <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
