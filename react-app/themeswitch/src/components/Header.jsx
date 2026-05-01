import ThemeToggle from "./Themetoggle";

const NAV_LINKS = ["New", "Women", "Men", "Sale"];

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-stone-100 dark:border-stone-800/60 bg-white/70 dark:bg-stone-950/70 backdrop-blur-md top-0">
      <Logo />
      <Nav />
      <HeaderActions />
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-lg bg-stone-900 dark:bg-amber-500 flex items-center justify-center text-white dark:text-stone-900 text-xs font-bold font-[Playfair_Display,Georgia,serif] transition-colors duration-300">
        L
      </span>
      <span className="font-[Playfair_Display,Georgia,serif] text-lg font-bold tracking-tight text-stone-900 dark:text-white">
        Luxe
      </span>
    </div>
  );
}

function Nav() {
  return (
    <nav className="hidden sm:flex items-center gap-6">
      {NAV_LINKS.map((item) => (
        <a
          key={item}
          href="#"
          className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-200 font-medium tracking-wide"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

function SearchButton() {
  return (
    <button
      aria-label="Search"
      className="w-8 h-8 rounded-full flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </button>
  );
}

function HeaderActions() {
  return (
    <div className="flex items-center gap-3">
      <SearchButton />
      <ThemeToggle />
    </div>
  );
}
