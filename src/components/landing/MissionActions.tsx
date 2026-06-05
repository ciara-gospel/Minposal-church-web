// src/components/landing/MissionActions.tsx
'use client';
import { Music, Users, BookOpen, Flame, Globe } from 'lucide-react';

const activities = [
  {
    title: 'Louange & Adoration',
    description:
      'Une atmosphère unique pour célébrer Dieu à travers des mélodies et lui rendre la gloire.',
    iconColor: 'text-secondary',
  },
  {
    title: 'Enseignement Biblique',
    description:
      'Approfondir la parole de Dieu pour une fondation spirituelle solide et équilibrée.',
    iconColor: 'text-primary',
  },
  {
    title: 'Fraternité',
    description:
      'Bâtir une communauté soudée où chaque membre est soutenu et valorisé.',
    iconColor: 'text-secondary',
  },
  {
    title: 'Éveil Spirituel',
    description:
      'Encourager la croissance personnelle et la découverte des dons spirituels.',
    iconColor: 'text-primary',
  },
];

export default function MissionActions() {
  return (
    <section id="mission" className="relative overflow-hidden py-24">
      <div className="to-muted/30 dark:to-muted absolute inset-0 bg-gradient-to-b from-white dark:from-gray-900"></div>
      <div className="bg-primary/10 absolute top-10 left-0 h-40 w-40 rounded-full blur-2xl"></div>
      <div className="bg-secondary/10 absolute right-0 bottom-10 h-60 w-60 rounded-full blur-2xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mb-16 text-center opacity-0">
          <p className="text-secondary mb-6 text-xl font-bold tracking-[0.2em] uppercase">
            Notre Mission
          </p>
          <h2 className="text-foreground mb-6 text-3xl font-extrabold md:text-4xl">
            Ce que nous faisons pour la{' '}
            <span className="text-primary">Gloire de Dieu</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg italic">
            &quot;Notre mission est d&apos;impacter et de gagner des vies à
            travers l&apos;Évangile, la formation spirituelle et une communion
            fraternelle authentique.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((item, index) => (
            <div
              key={index}
              className="group animate-fade-in-up rounded-2xl bg-white/70 p-8 opacity-0 shadow-lg backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800/70"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="bg-muted group-hover:bg-primary/10 mb-4 w-fit rounded-xl p-4 transition-transform group-hover:scale-110">
                {index === 0 && (
                  <Music className={`h-8 w-8 ${item.iconColor}`} />
                )}
                {index === 1 && (
                  <BookOpen className={`h-8 w-8 ${item.iconColor}`} />
                )}
                {index === 2 && (
                  <Users className={`h-8 w-8 ${item.iconColor}`} />
                )}
                {index === 3 && (
                  <Flame className={`h-8 w-8 ${item.iconColor}`} />
                )}
              </div>
              <h4 className="text-foreground group-hover:text-primary mb-3 text-xl font-bold transition-colors">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="animate-fade-in-up from-primary/10 to-secondary/10 mt-16 flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-r p-8 opacity-0 md:flex-row md:p-12">
          <div className="animate-float bg-primary shrink-0 rounded-full p-5 shadow-lg">
            <Globe className="h-10 w-10 text-white" />
          </div>
          <div>
            <h4 className="text-foreground mb-2 text-2xl font-bold">
              Notre Rayonnement
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Au-delà de nos murs, nous nous engageons à porter le message de
              paix et d&apos;amour dans notre pays le Cameroun et partout
              ailleurs, en étant le sel et la lumière de la terre et un exemple
              pour la société.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
