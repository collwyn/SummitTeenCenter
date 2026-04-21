import { Image as ImageIcon } from "lucide-react";

import imgGaming from "@assets/0c834c6342fc704e844c275b99b1dcdc_1776784489756.jpg";
import imgReadingLounge from "@assets/0e848e9b5c9c1f06b32f1c2d12f5c323_1776784489757.jpg";
import imgPresentation from "@assets/105c99ba4f6950e3146abc9164689028_1776784489758.jpg";
import imgBeanbagTheater from "@assets/11680ee7bd209c83bffc085b80fd7b11_1776784489758.jpg";
import imgMuralLounge from "@assets/47516a890c3d6afa9043bbcd02e1a19b_1776784489758.jpg";
import imgLibrary from "@assets/AshlandYouthCenterComplex_Lnd_150dpi_web-1_1776784489758.jpg";
import imgChairs from "@assets/bc3f5616ccbb8fcd7450126e1f0207cb_1776784489758.jpg";
import imgGreenSpace from "@assets/fbea80803fa051f2e3d4aa822af965b8_1776784489759.jpg";
import imgGym from "@assets/Fogarty-Finger-3_1776784489759.jpg";
import imgBasketballCourt from "@assets/eed268aceb43bbe07aae29805019715b_1776795638962.jpg";
import imgActiveLounge from "@assets/FallonYouthCenter19+edit_1776795638964.webp";
import imgExterior from "@assets/Saint-Cloud-Youth-Center-1_1776795638964.jpg";
import imgCommons from "@assets/WHY-Architects-Buildings-EPA-YAMC-01-scaled_1776795638964.jpg";

const GALLERY_IMAGES = [
  { src: imgGaming, alt: "Teen gaming and music lounge", caption: "A vibrant gaming and music lounge" },
  { src: imgReadingLounge, alt: "Reading and study lounge", caption: "Comfortable corners for reading and study" },
  { src: imgPresentation, alt: "Beanbag presentation hall", caption: "Workshops, talks, and movie nights" },
  { src: imgBeanbagTheater, alt: "Colorful theater seating", caption: "A bold, teen-first theater space" },
  { src: imgMuralLounge, alt: "Mural-filled lounge", caption: "Art-forward gathering spaces" },
  { src: imgLibrary, alt: "Open library and lounge", caption: "An open Reading Room and library" },
  { src: imgChairs, alt: "Colorful collaboration room", caption: "Rooms made for hanging out and creating" },
  { src: imgGreenSpace, alt: "Indoor green hangout", caption: "Indoor green spaces to decompress" },
  { src: imgGym, alt: "Recreation hall with basketball court", caption: "Pride, identity, and a place to belong" },
  { src: imgBasketballCourt, alt: "Full-size indoor basketball courts", caption: "Full-size courts for leagues and pick-up games" },
  { src: imgActiveLounge, alt: "Active teen lounge with bold graphics", caption: "Bold, active spaces designed for teens" },
  { src: imgExterior, alt: "Modern teen center exterior at dusk", caption: "Architecture that signals: this place is yours" },
  { src: imgCommons, alt: "Open commons with grand staircase and cafe", caption: "An open commons to gather, eat, and connect" },
];

export default function Gallery() {
  return (
    <div className="flex flex-col w-full bg-muted/10 min-h-[calc(100vh-4rem)]">
      <section className="bg-primary py-16 md:py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ImageIcon className="h-12 w-12 mx-auto mb-6 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Vision Gallery</h1>
          <p className="text-xl text-primary-foreground/80">
            A few examples of outstanding teen center design from around the world! Our county can set an example for others to follow, let's work together to make this a reality!
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-muted/30 aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
