"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "../lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h2
          className="font-heading text-3xl sm:text-4xl font-bold text-cream text-center mb-12"
          data-animate
        >
          Preguntas frecuentes
        </h2>

        <div className="space-y-3" data-animate>
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-hover transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-base sm:text-lg font-medium text-cream pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-muted text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
