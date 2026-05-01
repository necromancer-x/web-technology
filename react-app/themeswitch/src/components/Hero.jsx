export default function Hero() {
  return (
    <div className="text-center max-w-md">
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 mb-3 font-[Outfit,sans-serif]">
        New Season Drop
      </p>
      <h1 className="font-[Playfair_Display,Georgia,serif] text-5xl sm:text-6xl font-bold leading-[1.05] text-stone-900 dark:text-white">
        Featured{" "}
        <em className="not-italic text-stone-400 dark:text-stone-600">Pick</em>
      </h1>
      <p className="mt-4 text-sm text-stone-500 dark:text-stone-400 font-[Outfit,sans-serif] leading-relaxed">
        Handpicked for those who value precision, craft, and quiet luxury.
      </p>
    </div>
  );
}
