export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 border-t border-border pb-28 sm:pb-10">
      <div className="max-w-2xl mx-auto text-center space-y-3">
        <p className="text-muted text-sm">
          Entrega por WhatsApp / Pago por Zelle o tarjeta
        </p>
        <p className="text-muted/60 text-xs">
          {year} Corridos Personalizados. Todos los derechos reservados.
        </p>
        <p className="text-muted/60 text-xs">
          Sitio web por{" "}
          <a href="https://www.poppymarketingandconsulting.com" target="_blank" rel="noopener" className="underline-offset-2 hover:underline">Poppy Marketing</a>
        </p>
      </div>
    </footer>
  );
}
