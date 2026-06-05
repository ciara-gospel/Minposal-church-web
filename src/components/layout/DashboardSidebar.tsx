'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  Home,
} from 'lucide-react';

const menuItems = [
  {
    icon: LayoutDashboard,
    label: 'Tableau de bord',
    href: '/dashboard',
  },
  {
    icon: Calendar,
    label: 'Programmes',
    href: '/dashboard/programmes',
  },
  {
    icon: MessageSquare,
    label: 'Messages',
    href: '/dashboard/messages',
  },
  {
    icon: Settings,
    label: 'Paramètres',
    href: '/dashboard/settings',
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-background border-muted fixed top-0 left-0 z-40 h-screen w-64 border-r">
      <div className="flex h-full flex-col">
        <div className="border-muted border-b p-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
              <span className="text-primary font-bold">M</span>
            </div>
            <div>
              <p className="text-foreground font-bold">MINPOSAL</p>
              <p className="text-muted-foreground text-xs">GSPM</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-muted border-t p-4">
          <Link
            href="/"
            className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all"
          >
            <Home className="h-5 w-5" />
            Retour au site
          </Link>
          <button className="text-destructive hover:bg-destructive/10 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all">
            <LogOut className="h-5 w-5" />
            Déconnexion
          </button>
        </div>
      </div>
    </aside>
  );
}
