// src/components/layout/Footer.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="bg-primary absolute top-0 right-0 h-64 w-64 rounded-full blur-3xl"></div>
        <div className="bg-secondary absolute bottom-0 left-0 h-48 w-48 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Colonne 1: Logo & Description */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/Minposal.jpg"
                alt="Logo Minposal"
                width={50}
                height={50}
                className="rounded-lg object-contain"
              />
              <div>
                <span className="text-primary text-2xl font-bold">
                  MINPOSAL
                </span>
                <p className="text-destructive text-xs">
                  Ministère des Portes du Salut et de Louanges
                </p>
              </div>
            </div>
            <p className="max-w-md leading-relaxed text-gray-400">
              Porter l&apos;Évangile et la louange au cœur de notre nation. Une
              famille spirituelle dédiée à servir et à louer Dieu ensemble.
            </p>
            <div className="flex gap-4">
              <span className="text-secondary text-sm">
                Suivez-nous sur les réseaux sociaux
              </span>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h4 className="text-background mb-6 text-lg font-bold">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="hover:text-primary text-gray-400 transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="#mission"
                  className="hover:text-primary text-gray-400 transition-colors"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  href="#activities"
                  className="hover:text-primary text-gray-400 transition-colors"
                >
                  Branches
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-primary text-gray-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Contact Info */}
          <div>
            <h4 className="text-background mb-6 text-lg font-bold">
              Contactez-nous
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="text-primary h-5 w-5 shrink-0" />
                <span>Flamenco face Hotel la Colombe, Yaounde, Cameroun</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-primary h-5 w-5 shrink-0" />
                <span>+237 682 345 678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-primary h-5 w-5 shrink-0" />
                <span>contact@minposal.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MINPOSAL - GSPM. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
