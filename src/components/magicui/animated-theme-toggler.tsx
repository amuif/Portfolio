'use client';

import { Moon, SunDim } from 'lucide-react';
import { useRef } from 'react';
import { flushSync } from 'react-dom';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useTheme } from '@/components/Theme-Provider';

type Props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        // Also toggle 'dark' class on <html> for tailwind etc.
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      },
    );
  };

  return (
    <Button
      variant="ghost"
      ref={buttonRef}
      onClick={changeTheme}
      className={cn('size-12 rounded-full', className)}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <SunDim /> : <Moon />}
    </Button>
  );
};
