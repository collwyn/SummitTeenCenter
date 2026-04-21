import { Image as ImageIcon } from "lucide-react";

// To swap in real photos, replace the imports below with the correct paths 
// or URLs to your actual images, and update the array accordingly.
import imgBasketball from "@/assets/gallery/basketball.png";
import imgArt from "@/assets/gallery/art.png";
import imgCooking from "@/assets/gallery/cooking.png";
import imgMentor from "@/assets/gallery/mentor.png";
import imgCoding from "@/assets/gallery/coding.png";
import imgGarden from "@/assets/gallery/garden.png";
import imgStudy from "@/assets/gallery/study.png";
import imgPortrait from "@/assets/gallery/portrait.png";

const GALLERY_IMAGES = [
  {
    src: imgBasketball,
    alt: "Teens playing basketball",
    caption: "State-of-the-art recreation facilities"
  },
  {
    src: imgArt,
    alt: "Teens in art studio",
    caption: "Fostering creativity and self-expression"
  },
  {
    src: imgCooking,
    alt: "Teens cooking together",
    caption: "Life skills and nutrition classes"
  },
  {
    src: imgMentor,
    alt: "Mentoring session",
    caption: "One-on-one academic support"
  },
  {
    src: imgCoding,
    alt: "Teens coding",
    caption: "Preparing for the careers of tomorrow"
  },
  {
    src: imgGarden,
    alt: "Community garden",
    caption: "Connecting with nature and community"
  },
  {
    src: imgStudy,
    alt: "Study group",
    caption: "Safe spaces for collaboration"
  },
  {
    src: imgPortrait,
    alt: "Group portrait",
    caption: "Building lifelong friendships"
  }
];

export default function Gallery() {
  return (
    <div className="flex flex-col w-full bg-muted/10 min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <section className="bg-primary py-16 md:py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ImageIcon className="h-12 w-12 mx-auto mb-6 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Vision Gallery</h1>
          <p className="text-xl text-primary-foreground/80">
            A glimpse into the future of The Summit Center. This is what we are building together.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-muted/30 aspect-square"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-sm leading-snug">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
