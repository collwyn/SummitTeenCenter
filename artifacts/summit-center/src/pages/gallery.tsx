import { useEffect, useState, useCallback } from "react";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      ),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  const active = activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null;

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
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Open image: ${img.alt}`}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-muted/30 aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-zoom-in text-left"
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {isOpen && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          <figure
            className="max-w-6xl w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-white/90 text-sm md:text-base max-w-2xl">
              <span className="block font-medium">{active.caption}</span>
              <span className="block text-white/60 text-xs mt-1">
                {(activeIndex ?? 0) + 1} / {GALLERY_IMAGES.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
