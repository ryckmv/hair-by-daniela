"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const slides = [
  {
    src: "/images/daniela.jpg",
    alt: "Daniela Santos com diploma de formação profissional",
    position: "center 35%",
  },
  {
    src: "/images/experiencia/daniela-a-trabalhar.jpeg",
    alt: "Daniela Santos a trabalhar em contexto profissional",
    position: "center 42%",
  },
  {
    src: "/images/experiencia/formacao-profissional.jpeg",
    alt: "Daniela Santos em aperfeiçoamento profissional",
    position: "center 48%",
  },
  {
    src: "/images/experiencia/portugal-fashion.jpeg",
    alt: "Daniela Santos no Portugal Fashion",
    position: "center 42%",
  },
  {
    src: "/images/unhas/estetica-equipa.jpeg",
    alt: "Equipa Hair by Daniela Santos",
    position: "center 38%",
  },
];

export default function ExperienceCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  function goToSlide(index: number) {
    const track = trackRef.current;

    if (!track) return;

    track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
    setActiveSlide(index);
  }

  function handleScroll() {
    const track = trackRef.current;

    if (!track) return;

    const index = Math.round(track.scrollLeft / track.clientWidth);

    if (index !== activeSlide) setActiveSlide(index);
  }

  return (
    <div
      className="relative mx-auto w-full max-w-xl"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Experiência profissional de Daniela Santos"
    >
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex aspect-[5/4] snap-x snap-mandatory overflow-x-auto bg-[#e9ddd8] [scrollbar-width:none] md:aspect-[4/5] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, index) => (
            <figure
              key={slide.src}
              className="relative min-w-full snap-start overflow-hidden"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${slides.length}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                style={{ objectPosition: slide.position }}
                className="object-cover"
                priority={index === 0}
              />
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToSlide((activeSlide - 1 + slides.length) % slides.length)}
          aria-label="Fotografia anterior"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronLeft aria-hidden="true" size={18} />
        </button>

        <button
          type="button"
          onClick={() => goToSlide((activeSlide + 1) % slides.length)}
          aria-label="Fotografia seguinte"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronRight aria-hidden="true" size={18} />
        </button>

        <div className="absolute -bottom-4 -right-2 border border-white/15 bg-[#181110] px-4 py-3 text-white md:-bottom-5 md:-right-7 md:px-8 md:py-5">
          <p className="font-serif text-xl italic md:text-2xl">Técnica &amp; detalhe</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/60">
            Em cada resultado
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2" aria-label="Selecionar fotografia">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Mostrar fotografia ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all ${
              activeSlide === index ? "w-7 bg-[#c67b91]" : "w-1.5 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 border border-white/15 bg-[#181110] px-4 py-3 text-white md:px-6 md:py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d99aae]">
          Portugal Fashion
        </p>
        <p className="mt-1.5 text-xs leading-5 text-white/70 md:text-sm md:leading-6">
          Presença no Portugal Fashion, reforçando a experiência em produções e eventos de moda.
        </p>
      </div>
    </div>
  );
}
