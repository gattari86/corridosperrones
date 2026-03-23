"use client";

import { useSearchParams } from "next/navigation";
import { WHATSAPP_URL } from "../lib/constants";

export default function PaidBanner() {
  const searchParams = useSearchParams();
  const paid = searchParams.get("paid");

  if (paid !== "true") return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #1a1a1a, #0d0d0d)",
        borderBottom: "2px solid #f0c040",
        padding: "20px 16px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#f0c040", fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>
        Pago recibido
      </p>
      <p style={{ color: "#ccc", fontSize: "14px", margin: "0 0 12px" }}>
        Regresa a WhatsApp y escribe &quot;listo&quot; para confirmar tu pago.
      </p>
      <a
        href={WHATSAPP_URL.replace("Hola%20quiero%20mi%20corrido%20personalizado", "listo")}
        style={{
          display: "inline-block",
          background: "#25d366",
          color: "#fff",
          padding: "10px 24px",
          borderRadius: "8px",
          fontWeight: 700,
          fontSize: "14px",
          textDecoration: "none",
        }}
      >
        Abrir WhatsApp
      </a>
    </div>
  );
}
