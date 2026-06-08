// src/components/landing/WhyChooseUs.tsx
'use client';

import { BookOpen, Heart, Shield, Music, Users, Zap } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: BookOpen,
    title: 'Enseignement Biblique',
    description:
      'Des enseignements approfondis et des études qui renforcent votre foi et votre compréhension de la parole de Dieu.',
  },
  {
    icon: Heart,
    title: 'Communauté Accueillante',
    description:
      'Une famille spirituelle chaleureuse où chacun se sent valorisé et intégré.',
  },
  {
    icon: Shield,
    title: 'Discipolat',
    description:
      'Des programmes de formation pour développer votre leadership spirituel et votre connaissance de Dieu.',
  },
  {
    icon: Music,
    title: 'Louange et Adoration',
    description:
      "Des moments d'adoration puissant et authentique pour entrer dans la présence de Dieu.",
  },
  {
    icon: Users,
    title: 'Groupes de Vie',
    description:
      'Des rassemblements où vous pouvez grandir ensemble et vivre des relations authentiques.',
  },
  {
    icon: Zap,
    title: 'Impacts Communautaire',
    description:
      "Des actions sociales et caritatives pour servir notre communauté et montrer l'amour de Dieu.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="from-muted/30 to-background dark:from-muted absolute inset-0 bg-gradient-to-b"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="bg-primary absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"></div>
        <div className="bg-secondary absolute right-10 bottom-20 h-96 w-96 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mb-16 text-center opacity-0">
          <p className="text-secondary mb-6 text-xl font-bold tracking-widest uppercase">
            Ce qui nous Identifie
          </p>
          <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            Une Église Qui <span className="text-primary">Transforme</span> des
            Vies
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Découvrez ce qui fait du Minposal un lieu unique où chacun peut
            grandir spirituellement et trouver sa place dans la famille de Dieu.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-in-up rounded-2xl bg-white/70 p-8 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800/70"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-foreground group-hover:text-primary mb-4 text-xl font-bold transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="animate-fade-in-up mt-16 text-center opacity-0"
          style={{ animationDelay: '1s' }}
        >
          <button className="bg-primary text-primary-foreground rounded-xl px-10 py-4 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            Rejoignez Notre Communauté
          </button>
        </div>
      </div>
    </section>
  );
}
