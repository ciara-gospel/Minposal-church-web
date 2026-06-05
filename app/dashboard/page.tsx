'use client';

import { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  MessageSquare,
  Users,
  Settings,
  ArrowRight,
  User,
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

interface UserData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  branch: string;
}

const stats = [
  {
    label: 'Programmes à venir',
    value: '12',
    icon: Calendar,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    label: 'Messages reçus',
    value: '24',
    icon: MessageSquare,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    label: 'Membres de ma branche',
    value: '156',
    icon: Users,
    color: 'text-destructive',
    bg: 'bg-destructive/10',
  },
];

const quickActions = [
  {
    title: 'Programmes',
    description: 'Consultez les programmes à venir',
    href: '/dashboard/programmes',
    icon: Calendar,
    color: 'text-primary',
  },
  {
    title: 'Messages',
    description: 'Lisez vos messages',
    href: '/dashboard/messages',
    icon: MessageSquare,
    color: 'text-secondary',
  },
  {
    title: 'Paramètres',
    description: 'Gérez votre profil',
    href: '/dashboard/settings',
    icon: Settings,
    color: 'text-destructive',
  },
];

/* eslint-disable react-hooks/set-state-in-effect */
export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useLayoutEffect(() => {
    const stored = localStorage.getItem('userData');
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  return (
    <DashboardLayout
      title="Tableau de bord"
      description="Bienvenue dans votre espace personnel"
    >
      <div className="space-y-8">
        {userData && (
          <div className="bg-primary/10 mb-8 flex items-center gap-4 rounded-2xl p-6">
            <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-foreground text-2xl font-bold">
                Bonjour, {userData.prenom} {userData.nom}
              </h2>
              <p className="text-muted-foreground">
                {userData.email} • {userData.branch}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-muted/50 flex items-center gap-4 rounded-xl p-6"
            >
              <div className={`${stat.bg} rounded-xl p-3`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-foreground text-2xl font-bold">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-foreground mb-4 text-xl font-bold">
            Actions rapides
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="bg-muted/50 hover:bg-muted group rounded-xl p-6 transition-all"
              >
                <action.icon className={`h-8 w-8 ${action.color} mb-3`} />
                <h3 className="text-foreground mb-1 font-bold">
                  {action.title}
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  {action.description}
                </p>
                <ArrowRight className="text-muted-foreground h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-foreground mb-4 text-xl font-bold">
            Derniers programmes
          </h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-muted border-b pb-3 last:border-0">
                <p className="text-foreground font-medium">
                  Culte dominical - Dimanche {i}
                </p>
                <p className="text-muted-foreground text-sm">
                  14h00 - 16h00 | Yaoundé
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
