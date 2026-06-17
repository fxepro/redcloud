/** Slim navy utility bar above the header — carries the brand taglines. */
export function TopBar() {
  return (
    <div className="bg-gradient-to-r from-accent-950 via-accent-900 to-accent-700 text-white">
      <div className="container flex h-10 items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] sm:justify-between">
        <span className="hidden text-white/70 sm:block">Higher standard, higher purpose</span>
        <span className="text-white/90">Re-imagine, Engineer, Deliver.</span>
      </div>
    </div>
  );
}
