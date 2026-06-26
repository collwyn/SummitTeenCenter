import { Heart, Target, Users, MapPin } from "lucide-react";
import headerBg from "@assets/Acolytical_group_of_school-age_teenagers_all_races_smiling_gr__1782509626872.png";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <img
          src={headerBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-35 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-primary/55 pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">About The Summit Center</h1>
          <p className="text-xl text-white/85">
            A community-driven initiative to create a safe, inspiring space for the youth of 29229.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 text-primary">How It Started</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Summit Center didn't start in a boardroom. It started on a Nextdoor thread in the 29229 neighborhood.
                </p>
                <p>
                  Parents and community members were noticing a common problem: teenagers in our area simply didn't have enough safe, engaging places to go after school and on weekends.
                </p>
                <p>
                  What began as a simple conversation is quickly turning into a movement. Local leaders, parents, and teens themselves came together to envision a space that wasn't just a rec center, but a hub for growth, learning, and community connection.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <MapPin className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Community</h3>
              <p className="text-muted-foreground mb-4">
                Proudly serving the 29229 zip code of Columbia, South Carolina. We are building a facility that reflects the diversity, energy, and potential of our neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Target className="h-10 w-10 text-secondary mb-4" />
              <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                To empower the youth of Columbia by providing a safe, accessible, and inspiring environment where they can discover their passions, develop critical skills, and build meaningful community connections.
              </p>
            </div>
            <div>
              <Heart className="h-10 w-10 text-secondary mb-4" />
              <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                We envision a community where every teenager has the resources, mentorship, and opportunities they need to become confident, capable leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-display font-bold mb-12 text-foreground">Why It Matters</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Safe Spaces</h3>
                <p className="text-muted-foreground text-sm">
                  Teens need environments where they can be themselves without pressure, surrounded by positive influences and secure boundaries.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Skill Building</h3>
                <p className="text-muted-foreground text-sm">
                  From coding to cooking to conflict resolution, we focus on practical skills that translate directly to future success.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-chart-3/10 flex items-center justify-center text-chart-3 mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Mental Wellbeing</h3>
                <p className="text-muted-foreground text-sm">
                  Physical activity, creative expression, and strong peer relationships are crucial for healthy adolescent development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="mb-8 relative">
            <span className="text-6xl text-primary/20 font-serif absolute -top-4 -left-4">"</span>
            <p className="text-xl md:text-2xl font-medium text-foreground italic relative z-10 px-8">
              This center isn't just a building. It's a promise to our kids that we believe in them, that we value them, and that we are willing to invest in their future.
            </p>
            <span className="text-6xl text-primary/20 font-serif absolute -bottom-8 -right-4">"</span>
          </div>
          <div className="mt-8">
            <p className="font-bold text-lg">Colin Cleveland</p>
            <p className="text-muted-foreground text-sm uppercase tracking-wider">Project Founder</p>
          </div>
        </div>
      </section>
    </div>
  );
}
