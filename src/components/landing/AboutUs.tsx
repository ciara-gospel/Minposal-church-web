// src/components/landing/AboutUs.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="from-background to-muted/30 absolute inset-0 bg-gradient-to-b"></div>
      <div className="bg-primary/10 absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"></div>
      <div className="bg-secondary/10 absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full blur-2xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div
            className="animate-fade-in-left relative opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/daddy.jpeg"
                alt="À propos de Minposal"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="bg-primary text-primary-foreground animate-float absolute -right-6 -bottom-6 rounded-xl p-6 shadow-xl">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Années de service</p>
            </div>
          </div>

          <div
            className="animate-fade-in-right opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="text-secondary mb-6 text-xl font-bold tracking-widest uppercase">
              À Propos de Nous
            </p>
            <h2 className="text-foreground mb-6 text-4xl font-bold">
              Une Vision de <span className="text-primary">Restauration</span>{' '}
              et d&apos;Espoir
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              L&apos;Église Minposal, sous la direction de l&apos;Apotre et
              visionnaire Guy Bertrand Sandjo, est un lieu où la foi,
              l&apos;amour et la louange se rencontrent pour transformer des
              vies. Notre ministère accueille chacun avec ouverture et
              compassion.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nous croyons en la puissance de la parole de Dieu pour restaurer,
              guérir et transformer. Chaque membre fait partie d&apos;une grande
              famille spirituelle dédiée à servir et à louer ensemble.
            </p>

            <div className="mb-8 grid grid-cols-3 gap-4">
              <div
                className="animate-scale-in rounded-xl bg-white/70 p-4 text-center opacity-0 shadow-md backdrop-blur-sm transition-all hover:scale-105 dark:bg-gray-800/70"
                style={{ animationDelay: '0.6s' }}
              >
                <p className="text-primary text-2xl font-bold">500+</p>
                <p className="text-muted-foreground text-sm">Membres</p>
              </div>
              <div
                className="animate-scale-in rounded-xl bg-white/70 p-4 text-center opacity-0 shadow-md backdrop-blur-sm transition-all hover:scale-105 dark:bg-gray-800/70"
                style={{ animationDelay: '0.7s' }}
              >
                <p className="text-secondary text-2xl font-bold">50+</p>
                <p className="text-muted-foreground text-sm">Leaders</p>
              </div>
              <div
                className="animate-scale-in rounded-xl bg-white/70 p-4 text-center opacity-0 shadow-md backdrop-blur-sm transition-all hover:scale-105 dark:bg-gray-800/70"
                style={{ animationDelay: '0.8s' }}
              >
                <p className="text-destructive text-2xl font-bold">100+</p>
                <p className="text-muted-foreground text-sm">Événements</p>
              </div>
            </div>

            <Link
              href="#contact"
              className="bg-secondary text-secondary-foreground inline-block rounded-xl px-8 py-3 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              En savoir plus sur nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
