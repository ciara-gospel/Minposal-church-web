/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useLayoutEffect, useState } from 'react';
import { User, Mail, Phone, MapPin, Save, Camera, Shield } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

interface UserData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  branch: string;
  role: 'MEMBRE' | 'ADMIN';
}

export default function SettingsPage() {
  const [profile, setProfile] = useState<UserData>({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    branch: '',
    role: 'MEMBRE',
  });

  useLayoutEffect(() => {
    const stored = localStorage.getItem('userData');
    if (stored) {
      setProfile((prev) => ({ ...prev, ...JSON.parse(stored) }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(profile));
  };

  return (
    <DashboardLayout
      title="Paramètres"
      description="Gérez vos informations personnelles"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="bg-primary/10 flex h-24 w-24 items-center justify-center rounded-full">
              <User className="text-primary h-12 w-12" />
            </div>
            <button
              type="button"
              className="bg-primary text-primary-foreground absolute -right-1 -bottom-1 rounded-full p-2 shadow-lg"
            >
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div>
            <h3 className="text-foreground font-bold">Photo de profil</h3>
            <p className="text-muted-foreground text-sm">
              Cliquez sur l&apos;icône pour changer votre photo
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="text-foreground mb-2 block text-sm font-medium">
              Prénom
            </label>
            <div className="relative">
              <User className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <input
                type="text"
                name="prenom"
                value={profile.prenom}
                onChange={handleChange}
                className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-9 py-2.5 transition-all outline-none focus:ring-2"
              />
            </div>
          </div>

          <div>
            <label className="text-foreground mb-2 block text-sm font-medium">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              value={profile.nom}
              onChange={handleChange}
              className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-2.5 transition-all outline-none focus:ring-2"
            />
          </div>
        </div>

        <div>
          <label className="text-foreground mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-9 py-2.5 transition-all outline-none focus:ring-2"
            />
          </div>
        </div>

        <div>
          <label className="text-foreground mb-2 block text-sm font-medium">
            Téléphone
          </label>
          <div className="relative">
            <Phone className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <input
              type="tel"
              name="telephone"
              value={profile.telephone}
              onChange={handleChange}
              className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-9 py-2.5 transition-all outline-none focus:ring-2"
            />
          </div>
        </div>

        <div>
          <label className="text-foreground mb-2 block text-sm font-medium">
            Branche
          </label>
          <div className="relative">
            <MapPin className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <select
              name="branch"
              value={profile.branch}
              onChange={handleChange}
              className="border-muted text-foreground focus:border-primary focus:ring-primary/20 w-full appearance-none rounded-xl border bg-white px-9 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
            >
              <option value="Yaoundé">Yaoundé</option>
              <option value="Douala">Douala</option>
              <option value="Bafoussam">Bafoussam</option>
              <option value="Bertoua">Bertoua</option>
              <option value="Ebolowa">Ebolowa</option>
              <option value="Yokaduma">Yokaduma</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-foreground mb-2 block text-sm font-medium">
            Rôle
          </label>
          <div className="relative">
            <Shield className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <select
              name="role"
              value={profile.role}
              onChange={handleChange}
              className="border-muted text-foreground focus:border-primary focus:ring-primary/20 w-full appearance-none rounded-xl border bg-white px-9 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
            >
              <option value="MEMBRE">Membre</option>
              <option value="ADMIN">Administrateur</option>
            </select>
          </div>
        </div>

        <div className="border-muted border-t pt-6">
          <h3 className="text-foreground mb-4 font-bold">
            Changer le mot de passe
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-foreground mb-2 block text-sm font-medium">
                Mot de passe actuel
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-2.5 transition-all outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="text-foreground mb-2 block text-sm font-medium">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-2.5 transition-all outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="text-foreground mb-2 block text-sm font-medium">
                Confirmer le nouveau mot de passe
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-2.5 transition-all outline-none focus:ring-2"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary text-primary-foreground flex items-center gap-2 rounded-xl px-6 py-3 font-bold shadow-lg transition-all hover:scale-105"
        >
          <Save className="h-4 w-4" />
          Enregistrer les modifications
        </button>
      </form>
    </DashboardLayout>
  );
}
