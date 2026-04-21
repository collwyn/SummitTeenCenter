import { Link } from "wouter";
import { ArrowRight, Trophy, BookOpen, Users, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSubscribeNewsletter } from "@workspace/api-client-react";
import { SubscribeNewsletterBody } from "@workspace/api-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const subscribe = useSubscribeNewsletter();
  
  const form = useForm({
    resolver: zodResolver(SubscribeNewsletterBody),
    defaultValues: { name: "", email: "" },
  });

  function onSubmit(data: any) {
    subscribe.mutate(
      { data },
      {
        onSuccess: () => {
          toast({ title: "Subscribed!", description: "You're now on the list." });
          form.reset();
        },
        onError: () => {
          toast({ variant: "destructive", title: "Error", description: "Could not subscribe." });
        }
      }
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary pt-24 pb-32 text-primary-foreground">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            <span>Coming to 29229, Columbia SC</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 max-w-4xl leading-tight">
            Building Tomorrow's Leaders, <span className="text-secondary">Today.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10">
            A state-of-the-art recreation and education center designed exclusively for teens. 
            Providing a safe, inspiring space to play, learn, and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about">
              <Button size="lg" className="h-12 px-8 text-base bg-white text-primary hover:bg-white/90">
                Learn More
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button size="lg" className="h-12 px-8 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Core Pillars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything we do at The Summit Center is built around three core focus areas designed to support comprehensive youth development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-8 pb-8 px-6 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Recreation</h3>
                <p className="text-muted-foreground mb-6">
                  State-of-the-art sports facilities, fitness programs, and creative arts studios to keep teens active and engaged.
                </p>
                <Link href="/programs">
                  <Button variant="outline" className="mt-auto">Explore Activities</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-8 pb-8 px-6 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Career Development</h3>
                <p className="text-muted-foreground mb-6">
                  Mentorship, tutoring, coding bootcamps, and skilled trade workshops to prepare teens for successful futures.
                </p>
                <Link href="/programs">
                  <Button variant="outline" className="mt-auto">View Programs</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-8 pb-8 px-6 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-chart-3/10 flex items-center justify-center mb-6 text-chart-3">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-muted-foreground mb-6">
                  Civic engagement projects, leadership councils, and volunteer opportunities to build strong community ties.
                </p>
                <Link href="/programs">
                  <Button variant="outline" className="mt-auto">See Initiatives</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-12 w-12 mx-auto mb-6 text-secondary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Join the Movement</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Stay updated on our progress, upcoming events, and opportunities to help bring The Summit Center to life.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="Your Name" className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="Email Address" type="email" className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 shrink-0" disabled={subscribe.isPending}>
                  {subscribe.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
