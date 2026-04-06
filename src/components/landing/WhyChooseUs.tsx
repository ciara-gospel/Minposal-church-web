// src/components/landing/WhyChooseUs.tsx
'use client';

const features = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: 'Enseignement Biblique',
    description:
      'Des sermons approfondis et des études qui renforcent votre foi et votre compréhension de la parole de Dieu.',
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: 'Communauté Accueillante',
    description:
      'Une famille spirituelle chaleureuse où chacun se sent valorisé et intégré, peu importe son parcours.',
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Discipolat',
    description:
      'Des programmes de formation pour développer votre leadership spirituel et votre connaissance de Dieu.',
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    title: 'Louange et Adoration',
    description:
      'Des moments d adoration puissant et authentique pour encounterter la présence de Dieu.',
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Groupes de Vie',
    description:
      'Des petites cellules où vous pouvez grandir ensemble et vivre des relations authentiques.',
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Impacts Communautaire',
    description:
      "Des actions sociales et caritatives pour servir notre communauté et montrer l'amour de Dieu.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-background relative overflow-hidden py-20">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-primary absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"></div>
        <div className="bg-secondary absolute right-10 bottom-20 h-96 w-96 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="animate-fade-in-up mb-16 text-center opacity-0">
          <p className="text-secondary mb-6 text-xl font-bold tracking-widest uppercase">
            Ce qui nous Identifie
          </p>
          <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            Une Église Qui <span className="text-primary">Transforme</span> des
            Vies
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Découvrez ce qui fait de Minposal un lieu unique où chacun peut
            grandir spirituellement et trouver sa place dans la famille de Dieu
            et dans la societe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-muted/50 hover:border-primary/20 animate-fade-in-up rounded-2xl border border-transparent p-8 opacity-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
                {feature.icon}
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

        {/* Call to action */}
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
