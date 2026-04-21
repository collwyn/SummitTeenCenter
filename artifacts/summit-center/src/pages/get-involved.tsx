import { useSubmitVolunteer, useSubscribeNewsletter } from "@workspace/api-client-react";
import { SubmitVolunteerBody, SubscribeNewsletterBody } from "@workspace/api-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeartHandshake, Mail, MapPin } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const INTERESTS = [
  { id: "mentoring", label: "Mentoring" },
  { id: "events", label: "Events" },
  { id: "fundraising", label: "Fundraising" },
  { id: "skilled_trade_teaching", label: "Skilled Trade Teaching" },
  { id: "administrative", label: "Administrative" },
  { id: "security_monitoring", label: "Security / Monitoring" },
  { id: "other", label: "Other" },
] as const;

export default function GetInvolved() {
  const submitVolunteer = useSubmitVolunteer();
  const subscribeNewsletter = useSubscribeNewsletter();
  const { toast } = useToast();

  const volunteerForm = useForm({
    resolver: zodResolver(SubmitVolunteerBody),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      neighborhood: "",
      interests: [],
      message: "",
    },
  });

  const newsletterForm = useForm({
    resolver: zodResolver(SubscribeNewsletterBody),
    defaultValues: { name: "", email: "" },
  });

  function onVolunteerSubmit(data: any) {
    submitVolunteer.mutate(
      { data },
      {
        onSuccess: () => {
          toast({ title: "Application Submitted!", description: "We'll be in touch soon regarding volunteer opportunities." });
          volunteerForm.reset();
        },
        onError: () => {
          toast({ variant: "destructive", title: "Error", description: "Failed to submit volunteer application. Please try again." });
        }
      }
    );
  }

  function onNewsletterSubmit(data: any) {
    subscribeNewsletter.mutate(
      { data },
      {
        onSuccess: () => {
          toast({ title: "Subscribed!", description: "You are now on our mailing list." });
          newsletterForm.reset();
        },
        onError: () => {
          toast({ variant: "destructive", title: "Error", description: "Could not subscribe. Please try again." });
        }
      }
    );
  }

  return (
    <div className="flex flex-col w-full bg-muted/20 min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <HeartHandshake className="h-16 w-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-white/90">
            The Summit Center is built by the community, for the community. We need your help to make it a reality.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Volunteer Form (takes up 3 columns) */}
            <div className="lg:col-span-3">
              <Card className="shadow-lg border-border/50 bg-white">
                <CardHeader className="border-b bg-muted/20 pb-8">
                  <CardTitle className="text-2xl font-display font-bold text-primary">Volunteer Interest Form</CardTitle>
                  <CardDescription className="text-base mt-2">
                    We are currently recruiting passionate volunteers for when our doors open. Tell us how you'd like to contribute.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <Form {...volunteerForm}>
                    <form onSubmit={volunteerForm.handleSubmit(onVolunteerSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={volunteerForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={volunteerForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address <span className="text-destructive">*</span></FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={volunteerForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number <span className="text-destructive">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="(803) 555-0123" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={volunteerForm.control}
                          name="neighborhood"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Neighborhood <span className="text-destructive">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Lake Carolina" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={volunteerForm.control}
                        name="interests"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel className="text-base">Areas of Interest <span className="text-destructive">*</span></FormLabel>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {INTERESTS.map((interest) => (
                                <FormField
                                  key={interest.id}
                                  control={volunteerForm.control}
                                  name="interests"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={interest.id}
                                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 shadow-sm bg-muted/10 hover:bg-muted/30 transition-colors cursor-pointer"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(interest.id as any)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, interest.id])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value: string) => value !== interest.id
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal cursor-pointer w-full">
                                          {interest.label}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={volunteerForm.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Details (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us a bit about your experience or why you want to volunteer..." 
                                className="min-h-[100px] resize-y"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={submitVolunteer.isPending}
                      >
                        {submitVolunteer.isPending ? "Submitting Application..." : "Submit Application"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar / Newsletter (takes up 2 columns) */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-primary text-primary-foreground border-none shadow-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
                <CardHeader>
                  <Mail className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="text-2xl font-display font-bold">Stay Updated</CardTitle>
                  <CardDescription className="text-primary-foreground/80 text-base">
                    Not ready to volunteer? Join our mailing list to follow our progress and get notified when we open.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...newsletterForm}>
                    <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-4">
                      <FormField
                        control={newsletterForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Your Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={newsletterForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input type="email" placeholder="Email Address" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                        disabled={subscribeNewsletter.isPending}
                      >
                        {subscribeNewsletter.isPending ? "Subscribing..." : "Subscribe to Newsletter"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Serving the 29229 zip code.<br/>
                        Columbia, South Carolina
                      </p>
                      <p className="text-sm text-primary mt-2 font-medium">Facility under construction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
