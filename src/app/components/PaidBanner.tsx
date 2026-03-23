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
        bottom: 0,
        zIndex: 9999,
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "48px", marginBottom: "20px" }}>&#9835;</div>
      <p style={{ color: "#f0c040", fontSize: "28px", fontWeight: 700, margin: "0 0 12px" }}>
        Pago recibido
      </p>
      <p style={{ color: "#ccc", fontSize: "18px", margin: "0 0 8px", lineHeight: 1.5 }}>
        Ya casi queda.
      </p>
      <p style={{ color: "#999", fontSize: "16px", margin: "0 0 32px", lineHeight: 1.5 }}>
        Regresa a WhatsApp y escribe <strong style={{ color: "#fff" }}>&quot;listo&quot;</strong> para confirmar tu pago y empezar la produccion.
      </p>
      <a
        href={WHATSAPP_URL.replace("Hola%20quiero%20mi%20corrido%20personalizado", "listo")}
        style={{
          display: "inline-block",
          background: "#25d366",
          color: "#fff",
          padding: "16px 40px",
          borderRadius: "12px",
          fontWeight: 700,
          fontSize: "18px",
          textDecoration: "none",
        }}
      >
        Abrir WhatsApp
      </a>
      <p style={{ color: "#555", fontSize: "13px", marginTop: "24px" }}>
        corridosperrones.com
      </p>
    </div>
  );
}
