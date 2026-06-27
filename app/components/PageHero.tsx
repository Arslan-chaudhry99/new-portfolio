type PageHeroProps = {
  heading: string;
  subheading?: string;
  description?: string;
};

export default function PageHero({
  heading,
  subheading,
  description,
}: PageHeroProps) {
  return (
    <section className="md:h-screen-1/2 pt-56 pb-20 md:pt-56 md:pb-0 px-8 2xl:px-32 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gray-100 max-w-4xl">
        {heading}
      </h1>
      {subheading && (
        <p className="mt-7 text-lg leading-relaxed font-medium text-gray-400 max-w-3xl">
          {subheading}
        </p>
      )}
      {description && (
        <p className="mt-4 text-base leading-relaxed font-medium text-gray-500 max-w-2xl">
          {description}
        </p>
      )}
    </section>
  );
}
