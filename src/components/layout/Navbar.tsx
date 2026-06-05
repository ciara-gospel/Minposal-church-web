// src/components/layout/Navbar.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="border-muted fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex flex-shrink-0 items-center gap-2 transition-opacity hover:opacity-90"
          >
            <Image
              src="/Minposal.jpg"
              alt="Minposal Logo"
              width={60}
              height={50}
              style={{ height: 'auto' }}
              className="object-contain"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-foreground font-bold tracking-tighter">
                MINPOSAL
              </span>
              <span className="text-primary text-[10px] font-semibold">
                GSPM
              </span>
            </div>
          </Link>

          <div className="text-secondary hidden items-center space-x-8 text-sm font-bold md:flex">
            <Link href="#about" className="transition-opacity hover:opacity-80">
              À Propos
            </Link>
            <Link
              href="#mission"
              className="transition-opacity hover:opacity-80"
            >
              Mission
            </Link>
            <Link
              href="#branches"
              className="transition-opacity hover:opacity-80"
            >
              Branches
            </Link>
            <Link
              href="#contact"
              className="transition-opacity hover:opacity-80"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:bg-muted rounded-full p-2 transition-all"
              aria-label="Basculer le thème"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <Link
              href="/login"
              className="text-destructive px-4 py-2 text-sm font-bold transition-opacity hover:opacity-80"
            >
              Se Connecter
            </Link>
            <Link
              href="/register"
              className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-extrabold shadow-md transition-all hover:scale-105 hover:shadow-lg"
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
