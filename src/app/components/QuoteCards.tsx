import Image from "next/image";

const quotes = [
  {
    src: "/images/quote-jorge.jpg",
    alt: "Jorge R. de Texas: Cuando escuche mi nombre en el corrido se me puso la piel chinita.",
  },
  {
    src: "/images/quote-son.jpg",
    alt: "Padre compartiendo su corrido con su hijo: Que mis hijos escuchen mi historia, eso no tiene precio.",
  },
  {
    src: "/images/quote-truck.jpg",
    alt: "Martin G. de California: Nunca pense que mi historia valiera tanto. Pero al escucharla en corrido, si pesa.",
  },
];

export default function QuoteCards() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-heading text-3xl sm:text-4xl font-bold text-cream text-center mb-4"
          data-animate
        >
          Lo que dicen quienes ya tienen su corrido
        </h2>
        <p
          className="text-muted text-center text-base sm:text-lg mb-12 max-w-lg mx-auto"
          data-animate
        >
          Historias reales de gente real.
        </p>

        <div
          className="grid sm:grid-cols-2 gap-4 sm:gap-5"
          data-animate
        >
          {quotes.map((q, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-border"
            >
              <Image
                src={q.src}
                alt={q.alt}
                width={700}
                height={450}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
