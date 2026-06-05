'use client';

import { ReactNode } from 'react';
import DashboardSidebar from '@/components/layout/DashboardSidebar';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function DashboardLayout({
  children,
  title,
  description,
}: DashboardLayoutProps) {
  return (
    <div className="bg-muted min-h-screen">
      <DashboardSidebar />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-foreground text-3xl font-bold">{title}</h1>
          {description && (
            <p className="text-muted-foreground mt-2">{description}</p>
          )}
        </div>
        <div className="bg-background rounded-2xl p-6 shadow-lg">
          {children}
        </div>
      </main>
    </div>
  );
}
