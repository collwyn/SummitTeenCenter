import { useSubmitContact } from "@workspace/api-client-react";
import { SubmitContactBody } from "@workspace/api-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const submitContact = useSubmitContact();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(SubmitContactBody),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(data: any) {
    submitContact.mutate(
      { data },
      {
        onSuccess: () => {
          toast({ title: "Message Sent", description: "Thank you for reaching out. We will get back to you soon." });
          form.reset();
        },
        onError: () => {
          toast({ variant: "destructive", title: "Error", description: "Failed to send message. Please try again." });
        }
      }
    );
  }

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-4rem)] bg-muted/20">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <MessageSquare className="h-16 w-16 mx-auto mb-6 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/80">
            Have questions about The Summit Center? Want to discuss a partnership? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-none shadow-md bg-white overflow-hidden">
                <div className="h-2 w-full bg-secondary"></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Future Location</p>
                        <p className="text-muted-foreground mt-1">29229 Area<br />Columbia, SC</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Email</p>
                        <a href="mailto:summitteencenter@gmail.com" className="text-muted-foreground hover:text-primary transition-colors mt-1 block">
                          summitteencenter@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      The best way to reach out is via this contact form or email at summitteencenter@gmail.com.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form (3 cols) */}
            <div className="lg:col-span-3">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-display font-bold mb-8">Send us a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name <span className="text-destructive">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="jane@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your inquiry..." 
                                className="min-h-[150px] resize-y"
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
                        disabled={submitContact.isPending}
                      >
                        {submitContact.isPending ? "Sending Message..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
