import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl tracking-tight text-white mb-4 block">
              The Summit Center
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Building Tomorrow's Leaders, Today. A premier community engagement, recreation, and education center for the teens of Columbia, SC.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-muted-foreground hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/safety" className="text-muted-foreground hover:text-white transition-colors">Safety</Link></li>
              <li><Link href="/news" className="text-muted-foreground hover:text-white transition-colors">News</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/community" className="text-muted-foreground hover:text-white transition-colors">Community Voices</Link></li>
              <li><Link href="/get-involved" className="text-muted-foreground hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Summit Center. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
