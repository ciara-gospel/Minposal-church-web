'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Shield,
} from 'lucide-react';
import { apiRequest } from '@/utils/api';

interface RegisterData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  branch: string;
  role: 'MEMBRE' | 'ADMIN';
  password: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterData>({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    branch: '',
    role: 'MEMBRE',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userData', JSON.stringify(data.user || data));
        router.push('/dashboard');
      }
    } catch (error) {
      alert(
        `Échec de l'inscription: ${error instanceof Error ? error.message : 'Erreur inconnue'}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="from-muted to-background flex min-h-screen items-center justify-center bg-gradient-to-br p-4">
      <div className="w-full max-w-md">
        <div className="animate-scale-in bg-background rounded-2xl p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <User className="text-primary h-8 w-8" />
            </div>
            <h1 className="text-foreground text-3xl font-bold">Inscription</h1>
            <p className="text-muted-foreground mt-2">Créez votre compte</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  Nom
                </label>
                <div className="relative">
                  <User className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-9 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                    placeholder="Nom"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  Prénom
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-4 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                  placeholder="Prénom"
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-9 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                  placeholder="votre@email.com"
                  required
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
                  value={formData.telephone}
                  onChange={handleChange}
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-9 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                  placeholder="+237..."
                  required
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
                  value={formData.branch}
                  onChange={handleChange}
                  className="border-muted text-foreground focus:border-primary focus:ring-primary/20 w-full appearance-none rounded-xl border bg-white px-9 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                  required
                >
                  <option value="">Sélectionnez une branche</option>
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
                  value={formData.role}
                  onChange={handleChange}
                  className="border-muted text-foreground focus:border-primary focus:ring-primary/20 w-full appearance-none rounded-xl border bg-white px-9 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                  required
                >
                  <option value="MEMBRE">Membre</option>
                  <option value="ADMIN">Administrateur</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-foreground mb-2 block text-sm font-medium">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-9 py-2.5 pr-10 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-primary absolute top-1/2 right-3 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-primary-foreground mt-6 w-full rounded-xl py-3 font-bold shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              {loading ? 'Inscription...' : "S'inscrire"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Déjà un compte ?{' '}
              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Se Connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
