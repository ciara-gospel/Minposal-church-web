// src/components/landing/Branches.tsx
'use client';
import { MapPin, Phone, Users } from 'lucide-react';

const branches = [
  {
    region: 'Yaoundé',
    province: 'Centre',
    address: 'Flamenco face hotel la Colombe',
    phone: '+237 612 345 678',
    leader: 'Rev HERVE',
    members: '500+',
  },
  {
    region: 'Douala',
    province: 'Littoral',
    address: "Bonanjo, Rue de l'Échangeur",
    phone: '+237 611 234 567',
    leader: 'Reverand ASHU UNDERSTANDING',
    members: '350+',
  },
  {
    region: 'Bafoussam',
    province: 'Ouest',
    address: 'Centre-Ville, Rue Principale',
    phone: '+237 610 123 456',
    leader: 'Reverand ARMEL TCHOUATEN',
    members: '200+',
  },
  {
    region: 'Bertoua',
    province: 'Est',
    address: 'Quartier Hotel',
    phone: '+237 609 876 543',
    leader: 'Reverand FESTUS MOUFORZA',
    members: '80+',
  },
  {
    region: 'Ebolowa',
    province: 'Sud',
    address: 'Centre-Ville',
    phone: '+237 608 765 432',
    leader: 'Reverand ZEDANG & HERVE',
    members: '120+',
  },
  {
    region: 'Yokaduma',
    province: 'Est',
    address: 'Quartier Damatou',
    phone: '+237 607 654 321',
    leader: 'Pasteur Mahamat Saleh',
    members: '90+',
  },
];

export default function Branches() {
  return (
    <section id="branches" className="bg-muted relative overflow-hidden py-20">
      <div className="bg-primary/10 absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      <div className="bg-secondary/10 absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mb-16 text-center opacity-0">
          <p className="text-secondary mb-6 text-xl font-bold tracking-widest uppercase">
            Nos Differentes Branches
          </p>
          <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            Une Présence à Travers le{' '}
            <span className="text-primary">Cameroun</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            MINPOSAL s&apos;étend à travers plusieurs régions du Cameroun,
            portant l&apos;Évangile et la louange dans chaque ville.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="group animate-fade-in-up hover:border-primary/20 rounded-2xl border border-transparent bg-white p-6 opacity-0 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-destructive group-hover:text-primary text-xl font-bold transition-colors">
                    {branch.region}
                  </h3>
                  <p className="text-muted-foreground flex items-center gap-1 text-sm">
                    <MapPin className="text-primary h-4 w-4" />
                    {branch.province}
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-2">
                  <Users className="text-primary h-6 w-6" />
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-secondary font-semibold">Adresse:</span>{' '}
                  {branch.address}
                </p>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Phone className="text-secondary h-4 w-4" />
                  {branch.phone}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-secondary font-semibold">
                    Responsable:
                  </span>{' '}
                  {branch.leader}
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <span className="text-primary inline-flex items-center gap-1 font-bold">
                    <Users className="h-4 w-4" />
                    {branch.members} membres
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="animate-fade-in-up mt-16 text-center opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          <button className="bg-primary text-primary-foreground rounded-xl px-10 py-4 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            Voir Toutes les Branches
          </button>
        </div>
      </div>
    </section>
  );
}
