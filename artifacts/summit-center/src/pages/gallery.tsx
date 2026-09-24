import { useEffect, useState, useCallback } from "react";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import studioImage from "@assets/Acolytical_teen_singing_--v_8.2_bc288fe2-9800-4888-b399-e3358b_1790270216862.png";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop",
    alt: "Teens playing basketball in a gym",
    caption: "Full-size courts for leagues and pick-up games",
  },
  {
    src: studioImage,
    alt: "Teen singing into a microphone",
    caption: "Recording and performing arts studio and venue",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
    alt: "Students studying together at a table",
    caption: "Safe, quiet spaces for homework and collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
    alt: "Teen using a computer for coding",
    caption: "Technology and career skills for the future",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
    alt: "Group of teens laughing together",
    caption: "A place to belong, connect, and grow",
  },
  {
    src: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop",
    alt: "Adult mentor talking with a teen",
    caption: "One-on-one mentorship with community leaders",
  },
  {
    src: "https://images.pexels.com/photos/12885616/pexels-photo-12885616.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Teen students visiting an educational edible garden",
    caption: "Hands-on agriculture and conservation programs",
  },
  {
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
    alt: "Teens playing video games together",
    caption: "A monitored gaming lounge with tournaments",
  },
  {
    src: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&auto=format&fit=crop",
    alt: "Teen reading in a bright, comfortable space",
    caption: "A welcoming Reading Room to explore and unwind",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop",
    alt: "Young people collaborating in a modern space",
    caption: "Entrepreneurship workshops and career development",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop",
    alt: "Community workshop with young people",
    caption: "Workshops, talks, and life-skills training",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
    alt: "Teens in a classroom setting",
    caption: "Academic support and tutoring programs",
  },
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop",
    alt: "Youth volleyball game in a gymnasium",
    caption: "Leagues and open gym for every skill level",
  },
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
