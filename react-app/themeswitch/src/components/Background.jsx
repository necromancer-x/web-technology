export default function Background() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-100/60 dark:bg-amber-900/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-stone-200/80 dark:bg-stone-800/30 blur-3xl" />
    </div>
  );
}
