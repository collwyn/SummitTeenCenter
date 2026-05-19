import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Programs from "@/pages/programs";
import Safety from "@/pages/safety";
import Community from "@/pages/community";
import GetInvolved from "@/pages/get-involved";
import News from "@/pages/news";
import Gallery from "@/pages/gallery";
import Partners from "@/pages/partners";
import Contact from "@/pages/contact";
import Admin from "@/pages/admin";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs" component={Programs} />
          <Route path="/safety" component={Safety} />
          <Route path="/community" component={Community} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route path="/news" component={News} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/partners" component={Partners} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route component={Router} />
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
