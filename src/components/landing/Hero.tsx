// src/components/landing/Hero.tsx - Version améliorée
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Calendar, PlayCircle } from 'lucide-react';

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
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/daddy.jpeg"
          alt="Arrière-plan Église Minposal"
          fill
          priority
          className="animate-float scale-105 object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      <div className="from-background absolute top-0 left-0 -z-5 h-32 w-full bg-gradient-to-b to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-4 text-center text-white">
        <div
          className="bg-primary/20 animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-primary text-xs font-bold">GSPM</span>
          <span className="bg-primary h-1 w-1 rounded-full"></span>
          <p className="text-primary text-sm font-bold tracking-widest uppercase">
            Ministère des Portes du Salut et de Louanges
          </p>
        </div>

        <h1 className="mb-6 min-h-[1.2em] text-4xl leading-tight font-extrabold md:text-6xl lg:text-7xl">
          <span className="inline-block">
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
          style={{ animationDelay: '1s' }}
        >
          <Link
            href="/dashboard/programmes"
            className="bg-primary text-primary-foreground animate-pulse-glow flex items-center gap-2 rounded-xl px-8 py-4 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <Calendar className="h-5 w-5" />
            Nos Programmes
          </Link>
          <Link
            href="/dashboard/messages"
            className="flex items-center gap-2 rounded-xl border-2 border-white/80 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-white/10"
          >
            <PlayCircle className="h-5 w-5" />
            Messages
          </Link>
        </div>

        <div
          className="animate-fade-in-up mt-16 flex justify-center gap-8 opacity-0"
          style={{ animationDelay: '1.4s' }}
        >
          <div className="text-center">
            <p className="text-primary text-3xl font-bold">500+</p>
            <p className="text-sm text-gray-300">Membres</p>
          </div>
          <div className="text-center">
            <p className="text-secondary text-3xl font-bold">15+</p>
            <p className="text-sm text-gray-300">Années</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">6</p>
            <p className="text-sm text-gray-300">Branches</p>
          </div>
        </div>
      </div>
    </section>
  );
}
