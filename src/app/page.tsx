import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import AudioSamples from "./components/AudioSamples";
import WhatIncluded from "./components/WhatIncluded";
import QuoteCards from "./components/QuoteCards";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyWhatsApp from "./components/StickyWhatsApp";
import ScrollAnimator from "./components/ScrollAnimator";
import SectionImage from "./components/SectionImage";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <main>
        <Hero />
        <HowItWorks />
        <AudioSamples />
        <WhatIncluded />

        {/* Gifting section break */}
        <SectionImage
          src="/images/gifting.jpg"
          alt="Hombre regalando un corrido personalizado a su esposa"
        />

        <QuoteCards />
        <Testimonials />

        {/* Listening section break */}
        <SectionImage
          src="/images/listening-truck.jpg"
          alt="Hombre escuchando su corrido en la troca"
        />

        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
      <StickyWhatsApp />
    </>
  );
}
