import { useEffect, useState } from "react";
import { navMenu } from "../data/nav-menu";
import type { linkProps } from "../types/nav-link";
import { Moon, Sun } from "lucide-react";

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);
  const openDrawer = () => setDrawerOpen(true);

  return (
    <div className="sticky top-0 z-50 w-full bg-background px-4 py-3">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <a href="/" className="text-xl font-black uppercase tracking-widest text-foreground bg-yellow-200 dark:bg-yellow-900/50 px-3 py-1 border-4 border-foreground shadow-[4px_4px_0_0_var(--color-foreground)]">
          I.H
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Desktop navigation */}
          <nav className="hidden sm:flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {navMenu.map((link: linkProps) => (
              <a
                key={link.id}
                href={link.href}
                className="group relative px-2 py-1 text-xs sm:text-sm font-bold uppercase transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40 text-foreground hover:shadow-[2px_2px_0_0_var(--color-foreground)] border-2 border-transparent hover:border-foreground"
              >
                {link.name}
              </a>
            ))}
          </nav>



          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center border-4 border-foreground bg-orange-100 dark:bg-orange-900/50 text-foreground p-2 shadow-[2px_2px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0_0_var(--color-foreground)]"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={openDrawer}
            className="sm:hidden flex items-center justify-center border-4 border-foreground bg-orange-100 dark:bg-orange-900/50 text-foreground p-2 shadow-[2px_2px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/30" onClick={closeDrawer} />
          {/* Drawer panel */}
          <aside className="relative w-64 max-w-xs bg-background border-r-4 border-foreground shadow-[4px_0_0_0_var(--color-foreground)] transition-transform">
            <button
              onClick={closeDrawer}
              className="absolute top-2 right-2 text-foreground"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <nav className="mt-12 flex flex-col gap-4 p-4">
              {navMenu.map((link: linkProps) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="group px-2 py-2 text-sm font-bold uppercase border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors"
                  onClick={closeDrawer}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};

export default NavBar;
