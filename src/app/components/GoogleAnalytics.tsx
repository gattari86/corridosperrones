"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { trackEvent } from "../lib/ga";

const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  const scrollFired = useRef(false);

  useEffect(() => {
    if (!GA_ID) return;

    // --- WhatsApp click tracking (event delegation) ---
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href*="wa.me"]'
      );
      if (!link) return;

      const location = link.getAttribute("data-cta") || "unknown";
      const text = link.textContent?.trim() || "";

      trackEvent("whatsapp_click", {
        cta_location: location,
        button_text: text,
      });
    };

    // --- Scroll depth tracking (50%) ---
    const handleScroll = () => {
      if (scrollFired.current) return;

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0 && scrollTop / docHeight >= 0.5) {
        scrollFired.current = true;
        trackEvent("scroll_50", {
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
