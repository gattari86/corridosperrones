import { WHATSAPP_URL } from "../lib/constants";

const inclusions = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    text: "Letra 100% personalizada con tu historia",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
      </svg>
    ),
    text: "Produccion profesional en MP3 de alta calidad",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    text: "Letra lista para imprimir (para enmarcar o regalar)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    text: "Hasta 3 revisiones de letra antes de produccion",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Entrega el mismo dia (si apruebas antes de las 6 PM)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    text: "Todo por WhatsApp, sin apps, sin cuentas, sin complicaciones",
  },
];

export default function WhatIncluded() {
  return (
    <section id="que-incluye" className="py-16 sm:py-24 px-4 bg-surface">
      <div className="max-w-2xl mx-auto">
        <h2
          className="font-heading text-3xl sm:text-4xl font-bold text-cream text-center mb-4"
          data-animate
        >
          Todo esto por solo $49
        </h2>
        <p
          className="text-muted text-center text-base sm:text-lg mb-10"
          data-animate
        >
          Sin sorpresas, sin costos escondidos.
        </p>

        <div className="space-y-4" data-animate>
          {inclusions.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-bg/50 border border-border rounded-xl p-4 sm:p-5"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                {item.icon}
              </div>
              <p className="text-cream text-base sm:text-lg pt-1.5">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Distribution add-on */}
        <div
          className="mt-8 border border-gold/20 rounded-xl p-5 sm:p-6 bg-gold/5 text-center"
          data-animate
        >
          <p className="text-gold font-heading text-lg font-semibold mb-2">
            Extra opcional: +$20
          </p>
          <p className="text-muted text-sm sm:text-base">
            Distribuimos tu corrido en Spotify, Apple Music, YouTube Music y
            mas. El tiempo de publicacion varia segun la plataforma.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10" data-animate>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="que-incluye"
            className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light active:bg-gold-dark text-bg font-heading font-bold text-base sm:text-lg py-3.5 px-8 rounded-xl transition-colors w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar mi historia
          </a>
        </div>
      </div>
    </section>
  );
}
