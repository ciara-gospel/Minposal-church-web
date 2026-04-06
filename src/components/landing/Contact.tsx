// src/components/landing/Contact.tsx
'use client';

export default function Contact() {
  return (
    <section id="contact" className="bg-muted relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="bg-secondary/10 absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      <div className="bg-primary/10 absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="animate-fade-in-up mb-16 text-center opacity-0">
          <p className="text-secondary mb-6 text-xl font-bold tracking-widest uppercase">
            Contactez-Nous
          </p>
          <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            Nous <span className="text-primary">Ecouter</span> et Répondre
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Vous avez des questions ? Vous souhaitez nous rendre visite ?
            N&apos;hésitez pas à nous contacter, nous sommes là pour vous aider.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div
            className="animate-fade-in-left space-y-8 opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground mb-2 font-bold">Adresse</h3>
                <p className="text-muted-foreground">
                  Quartier General situer a Yaounde cameroun, Flamenco face
                  hotel la colombe
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground mb-2 font-bold">Téléphone</h3>
                <p className="text-muted-foreground">+237 682 345 678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-destructive/10 text-destructive flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-5 8v1m-8-4v1m-8 4h12M3 3h18M3 3v18h18"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground mb-2 font-bold">Email</h3>
                <p className="text-muted-foreground">contact@minposal.org</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-foreground mb-2 font-bold">
                  Heures de Bureau
                </h3>
                <p className="text-muted-foreground">
                  Lundi - Samedi: 9h00 - 18h00
                  <br />
                  Dimanche: 14h00 - 16h00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-background animate-fade-in-right rounded-2xl p-8 opacity-0 shadow-xl"
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="text-foreground mb-6 text-2xl font-bold">
              Envoyez-nous un Message
            </h3>
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-all outline-none focus:ring-2"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-all outline-none focus:ring-2"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-all outline-none focus:ring-2"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-all outline-none focus:ring-2"
                  placeholder="+237..."
                />
              </div>

              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full resize-none rounded-xl border px-4 py-3 transition-all outline-none focus:ring-2"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground w-full rounded-xl py-4 font-bold shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
