import Image, { type StaticImageData } from "next/image";

type BlogCoverImageProps = {
  src: string | StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  imageClassName?: string;
};

export default function BlogCoverImage({
  src,
  alt,
  sizes,
  priority,
  imageClassName = "",
}: BlogCoverImageProps) {
  return (
    <div className="absolute inset-0">
      <Image
        fill
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}
