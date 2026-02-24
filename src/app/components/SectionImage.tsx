import Image from "next/image";

interface SectionImageProps {
  src: string;
  alt: string;
}

export default function SectionImage({ src, alt }: SectionImageProps) {
  return (
    <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden" data-animate="fade">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
    </div>
  );
}
