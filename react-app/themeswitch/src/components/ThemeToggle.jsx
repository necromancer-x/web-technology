import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        group flex items-center gap-2.5 px-3 py-1.5
        rounded-full border cursor-pointer
        border-stone-200 dark:border-stone-700
        bg-white/80 dark:bg-stone-900/80
        backdrop-blur-sm
        shadow-sm hover:shadow-md
        transition-all duration-300
        focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2
      "
    >
      <span
        className="
        relative shrink-0
        w-10 h-5.5 rounded-full
        bg-stone-200 dark:bg-amber-500
        transition-colors duration-300
      "
      >
        <span
          className="
          absolute top-0.75 left-0.75
          w-4 h-4 rounded-full
          bg-white shadow-sm
          flex items-center justify-center
          transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          dark:translate-x-4.5
        "
        >
          <span className="text-[8px] leading-none select-none">
            {isDark ? "🌙" : "☀️"}
          </span>
        </span>
      </span>
      <span
        className="
        text-xs font-medium tracking-wide
        text-stone-500 dark:text-stone-400
        font-[Outfit,sans-serif]
        min-w-7.5
        transition-colors duration-300
      "
      >
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
