import { useListPrograms } from "@workspace/api-client-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Activity, Briefcase, Compass, Users } from "lucide-react";

export default function Programs() {
  const { data: categories, isLoading, error } = useListPrograms();

  const getIcon = (name: string) => {
    if (name.includes("Recreation")) return <Activity className="h-5 w-5" />;
    if (name.includes("Career")) return <Briefcase className="h-5 w-5" />;
    if (name.includes("Personal")) return <Compass className="h-5 w-5" />;
    return <Users className="h-5 w-5" />;
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-primary-foreground/80">
            Comprehensive programming designed to engage mind, body, and spirit.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {isLoading ? (
            <div className="space-y-8">
              <Skeleton className="h-12 w-full max-w-md mx-auto" />
              <div className="grid gap-6 md:grid-cols-2">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-48 w-full" />
              </div>
            </div>
          ) : error ? (
            <div className="text-center text-destructive p-8 bg-destructive/10 rounded-lg">
              Failed to load programs. Please try again later.
            </div>
          ) : !categories || categories.length === 0 ? (
            <div className="text-center p-8 border rounded-lg bg-muted/20">
              No programs listed yet.
            </div>
          ) : (
            <Tabs defaultValue={categories[0].id} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-3xl grid-cols-4 h-auto p-1 bg-muted/50">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="py-3 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary"
                    >
                      <span className="hidden sm:inline-block mr-2">{getIcon(category.name)}</span>
                      <span className="font-semibold">{category.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold text-foreground mb-4">{category.name}</h2>
                    <p className="text-lg text-muted-foreground">{category.tagline}</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.offerings.map((offering, idx) => (
                      <Card key={idx} className="border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                        <CardHeader>
                          <CardTitle className="text-xl text-primary">{offering.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base text-muted-foreground leading-relaxed">
                            {offering.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>
    </div>
  );
}
