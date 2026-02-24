import Image from "next/image";
import { WHATSAPP_URL } from "../lib/constants";

const steps = [
  {
    number: "1",
    title: "Mandas tu historia",
    description: "Por WhatsApp nos cuentas de quien es el corrido y que quieres que diga.",
  },
  {
    number: "2",
    title: "Recibes la letra",
    description: "Te escribimos la letra personalizada y te la mandamos para que la revises.",
  },
  {
    number: "3",
    title: "Haces ajustes",
    description: "Si quieres cambios, los hacemos. Hasta 3 revisiones sin costo extra.",
  },
  {
    number: "4",
    title: "Apruebas y pagas",
    description: "Cuando digas \"la apruebo\", haces el pago por Zelle o tarjeta.",
  },
  {
    number: "5",
    title: "Recibes tu corrido",
    description: "Ese mismo dia te mandamos el MP3 y la letra lista para imprimir.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 px-4 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-heading text-3xl sm:text-4xl font-bold text-cream text-center mb-4"
          data-animate
        >
          Asi de facil
        </h2>
        <p
          className="text-muted text-center text-base sm:text-lg mb-12 max-w-md mx-auto"
          data-animate
        >
          De tu historia a tu corrido en 5 pasos.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Text steps */}
          <div className="space-y-6" data-animate>
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <span className="font-heading text-gold font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-cream mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Process graphic */}
          <div className="relative" data-animate>
            <Image
              src="/images/process.jpg"
              alt="Infografia: 5 pasos para tu corrido personalizado"
              width={500}
              height={900}
              className="w-full max-w-sm mx-auto rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-animate>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light active:bg-gold-dark text-bg font-heading font-bold text-base sm:text-lg py-3.5 px-8 rounded-xl transition-colors w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Comenzar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
