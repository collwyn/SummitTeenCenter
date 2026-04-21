import { useListCommunityQuotes, useSubmitSuggestion } from "@workspace/api-client-react";
import { SubmitSuggestionBody } from "@workspace/api-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare, MessageSquarePlus, Quote } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

export default function Community() {
  const { data: quotes, isLoading, error } = useListCommunityQuotes();
  const submitSuggestion = useSubmitSuggestion();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(SubmitSuggestionBody),
    defaultValues: { name: "", neighborhood: "", suggestion: "" },
  });

  function onSubmit(data: any) {
    submitSuggestion.mutate(
      { data },
      {
        onSuccess: () => {
          toast({ title: "Thank you!", description: "Your suggestion has been submitted." });
          form.reset();
        },
        onError: () => {
          toast({ variant: "destructive", title: "Error", description: "Failed to submit suggestion. Please try again." });
        }
      }
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <MessageSquare className="h-16 w-16 mx-auto mb-6 text-secondary" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Community Voices</h1>
          <p className="text-xl text-primary-foreground/80">
            Hear from the parents, teens, and leaders in the 29229 area who are shaping the future of The Summit Center.
          </p>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-48 w-full rounded-xl" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-destructive p-8 bg-destructive/10 rounded-lg">
              Failed to load community voices. Please try again later.
            </div>
          ) : !quotes || quotes.length === 0 ? (
            <div className="text-center p-8 border rounded-lg bg-white">
              No quotes available yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quotes.map((quote) => (
                <Card key={quote.id} className="border-none shadow-md bg-white hover:shadow-lg transition-shadow relative overflow-hidden">
                  <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/5 -rotate-12" />
                  <CardContent className="p-8 flex flex-col h-full">
                    <p className="text-muted-foreground italic mb-6 flex-grow leading-relaxed">
                      "{quote.quote}"
                    </p>
                    <div className="mt-auto border-t pt-4 border-border/50">
                      <p className="font-bold text-foreground">{quote.name}</p>
                      <p className="text-sm text-primary font-medium">{quote.neighborhood}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Suggestion Box */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 text-secondary mb-6">
              <MessageSquarePlus className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Suggestion Box</h2>
            <p className="text-muted-foreground text-lg">
              We are building this center for you. What would you like to see? Have an idea for a program or facility? Let us know.
            </p>
          </div>

          <Card className="shadow-lg border-border/50">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="neighborhood"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Neighborhood (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Summit Ridge" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="suggestion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Suggestion <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="I'd love to see a program focused on..." 
                            className="min-h-[120px] resize-y"
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
                    disabled={submitSuggestion.isPending}
                  >
                    {submitSuggestion.isPending ? "Submitting..." : "Submit Suggestion"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
