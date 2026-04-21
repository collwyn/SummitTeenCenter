import { useState } from "react";
import { useListNewsPosts } from "@workspace/api-client-react";
import { format, parseISO } from "date-fns";
import { ChevronRight, ChevronDown, Calendar, User, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function News() {
  const { data: posts, isLoading, error } = useListNewsPosts();
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);

  const togglePost = (id: string) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full bg-muted/20 min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <section className="bg-primary py-16 md:py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Newspaper className="h-12 w-12 mx-auto mb-6 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-primary-foreground/80">
            The latest on our progress, upcoming events, and community stories.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-border/50">
                  <CardContent className="p-8 space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-destructive p-8 bg-destructive/10 rounded-lg">
              Failed to load news posts. Please try again later.
            </div>
          ) : !posts || posts.length === 0 ? (
            <div className="text-center p-12 border rounded-lg bg-white">
              <p className="text-lg text-muted-foreground">No news posts published yet.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => {
                const isExpanded = expandedPostId === post.id;
                
                return (
                  <Card 
                    key={post.id} 
                    className={`border-border/50 bg-white transition-all duration-300 ${isExpanded ? 'shadow-md ring-1 ring-primary/20' : 'shadow-sm hover:shadow-md'}`}
                  >
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-2xl font-display font-bold text-foreground mb-3 leading-tight">
                        {post.title}
                      </h2>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{format(parseISO(post.date), "MMMM d, yyyy")}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <div className="prose prose-slate max-w-none">
                        {!isExpanded ? (
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {post.excerpt}
                          </p>
                        ) : (
                          <div className="text-foreground leading-relaxed whitespace-pre-line animate-in fade-in slide-in-from-top-2 duration-300">
                            {post.body}
                          </div>
                        )}
                      </div>

                      <div className="mt-8 pt-4 border-t border-border/50 flex justify-end">
                        <Button 
                          variant={isExpanded ? "secondary" : "ghost"} 
                          onClick={() => togglePost(post.id)}
                          className="font-medium"
                        >
                          {isExpanded ? (
                            <>Show less <ChevronDown className="ml-2 h-4 w-4" /></>
                          ) : (
                            <>Read more <ChevronRight className="ml-2 h-4 w-4" /></>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
