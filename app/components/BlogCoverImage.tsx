"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type BlogCoverImageProps = {
  src: string | StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Extra classes on the image (e.g. group-hover:scale) */
  imageClassName?: string;
};

export default function BlogCoverImage({
  src,
  alt,
  sizes,
  priority,
  imageClassName = "",
}: BlogCoverImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const showPlaceholder = !loaded && !failed;

  return (
    <div className="absolute inset-0">
      <div
        className={`absolute inset-0 z-[2] flex flex-col items-center justify-center gap-3 bg-zinc-900 transition-opacity duration-300 ${
          showPlaceholder ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-busy={showPlaceholder}
        aria-label={showPlaceholder ? "Loading image" : undefined}
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-800 to-zinc-900" />
        <div className="relative flex flex-col items-center gap-3">
          <div
            className="h-9 w-9 rounded-full border-2 border-zinc-600 border-t-sky-400 animate-spin"
            aria-hidden
          />
          <span className="text-xs font-medium text-gray-500 tracking-wide">
            Loading image…
          </span>
        </div>
      </div>

      <Image
        fill
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        onLoadingComplete={() => setLoaded(true)}
        onError={() => {
          setFailed(true);
          setLoaded(true);
        }}
        className={`z-[1] object-cover transition-[opacity,transform] duration-500 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imageClassName}`}
      />
    </div>
  );
}
