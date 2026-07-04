import Image from "next/image";

type Brand = {
  name: string;
  src?: string;
  monochrome?: boolean;
};

type ClientLogosProps = {
  heading: string;
  brands: Brand[];
};

export default function ClientLogos({ heading, brands }: ClientLogosProps) {
  return (
    <div className="mt-8 sm:mt-10">
      <p className="text-sm font-medium text-primary-light/90 mb-5">{heading}</p>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-5 sm:gap-x-10">
        {brands.map((brand) => (
          <li
            key={brand.name}
            className="relative flex h-10 w-[140px] shrink-0 items-center justify-center sm:h-11 sm:w-[160px]"
          >
            {brand.src ? (
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                sizes="160px"
                className={`object-contain object-center transition-opacity opacity-70 hover:opacity-100 ${
                  brand.monochrome ? "brightness-0 invert" : ""
                }`}
              />
            ) : (
              <span className="text-[13px] sm:text-sm font-semibold tracking-wide text-foreground/40 whitespace-nowrap">
                {brand.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
