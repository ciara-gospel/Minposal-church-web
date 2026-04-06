// src/components/landing/Hero.tsx
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const fullText = 'BIENVENUE AU ROYAUME MINPOSAL';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* 1. Image de fond avec Next/Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/daddy.jpeg"
          alt="Arrière-plan Église Minposal"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 2. Overlay pour la lisibilité */}
      <div className="absolute inset-0 -z-10 bg-black/65 backdrop-blur-[1px]"></div>

      {/* 3. Contenu principal */}
      <div className="relative mx-auto max-w-7xl px-4 text-center text-white">
        {/* Définition du ministère en petit au-dessus du titre */}
        <p
          className="text-primary animate-fade-in-up text-m mb-4 font-bold tracking-[0.2em] uppercase opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          Ministère des Portes du Salut et de Louanges
        </p>

        <h1 className="mb-6 min-h-[1.2em] text-5xl leading-tight font-extrabold lg:text-7xl">
          <span className="inline-block text-left">
            <span className="typing-text text-white">
              {displayText.split('MINPOSAL')[0]}
            </span>
            <span className="typing-text text-primary">
              {displayText.includes('MINPOSAL') ? 'MINPOSAL' : ''}
            </span>
            {!isComplete && (
              <span className="animate-blink border-primary ml-1 border-r-4"></span>
            )}
          </span>
        </h1>

        <p
          className="animate-fade-in-up mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-200 opacity-0 md:text-xl"
          style={{ animationDelay: '0.8s' }}
        >
          Un lieu de foi, d&apos;adoration et de fraternité. Rejoignez notre
          communauté pour grandir ensemble dans la parole de DIEU et la louange.
        </p>

        <div
          className="animate-fade-in-up flex flex-col justify-center gap-4 opacity-0 sm:flex-row"
          style={{ animationDelay: '1.2s' }}
        >
          <button className="bg-primary text-primary-foreground animate-pulse-glow rounded-xl px-8 py-4 font-bold shadow-lg transition-all hover:scale-105">
            Nos Programmes
          </button>
          <button className="rounded-xl border-2 border-white/80 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-white/10">
            En savoir plus
          </button>
        </div>
      </div>

      {/* 4. Effet de transition vers la section suivante */}
      <div className="from-background absolute bottom-0 left-0 -z-10 h-32 w-full bg-gradient-to-t to-transparent"></div>
    </section>
  );
}
