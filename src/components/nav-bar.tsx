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

  return (
    <div className="sticky top-0 z-50 w-full border-b-4 border-foreground bg-background px-4 py-3 shadow-[0_4px_0_0_var(--color-foreground)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <a href="/" className="text-xl font-black uppercase tracking-widest text-primary-foreground bg-primary px-3 py-1 border-4 border-foreground shadow-[4px_4px_0_0_var(--color-foreground)]">
          I.H
        </a>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden sm:flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {navMenu.map((link: linkProps) => (
              <a
                key={link.id}
                href={link.href}
                className="group relative px-2 py-1 text-xs sm:text-sm font-bold uppercase transition-colors hover:bg-secondary hover:text-secondary-foreground hover:shadow-[2px_2px_0_0_var(--color-foreground)] border-2 border-transparent hover:border-foreground"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center border-4 border-foreground bg-secondary text-secondary-foreground p-2 shadow-[2px_2px_0_0_var(--color-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0_0_var(--color-foreground)]"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
