"use client";

import { useState } from "react";
import Image from "next/image";
import { TESTIMONIAL_CONTEXTS } from "../lib/constants";

const testimonials = [
  { src: "/images/testimonial-1.jpg", context: TESTIMONIAL_CONTEXTS[0] },
  { src: "/images/testimonial-2.jpg", context: TESTIMONIAL_CONTEXTS[1] },
  { src: "/images/testimonial-3.jpg", context: TESTIMONIAL_CONTEXTS[2] },
  { src: "/images/testimonial-4.jpg", context: TESTIMONIAL_CONTEXTS[3] },
];

export default function Testimonials() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="testimonios" className="py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-heading text-3xl sm:text-4xl font-bold text-cream text-center mb-4"
          data-animate
        >
          Conversaciones reales por WhatsApp
        </h2>
        <p
          className="text-muted text-center text-base sm:text-lg mb-12 max-w-xl mx-auto"
          data-animate
        >
          Asi reaccionan nuestros clientes cuando reciben su corrido.
        </p>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          data-animate
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setLightboxSrc(t.src)}
              className="group relative rounded-xl overflow-hidden border border-border hover:border-gold/40 transition-colors cursor-pointer"
              aria-label={`Ver testimonio ${i + 1}`}
            >
              <Image
                src={t.src}
                alt={`Conversacion de WhatsApp con cliente satisfecho - testimonio ${i + 1}`}
                width={400}
                height={500}
                className="w-full h-auto"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </button>
          ))}
        </div>

        {/* Context captions */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-2"
          data-animate
        >
          {testimonials.map((t, i) => (
            <p key={i} className="text-muted text-xs sm:text-sm text-center leading-snug">
              {t.context}
            </p>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Testimonio ampliado"
        >
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-4 right-4 text-cream/80 hover:text-cream z-10"
            aria-label="Cerrar"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Image
            src={lightboxSrc}
            alt="Testimonio ampliado"
            width={600}
            height={750}
            className="max-h-[85vh] w-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
