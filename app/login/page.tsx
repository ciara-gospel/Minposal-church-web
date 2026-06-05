'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';
import { apiRequest } from '@/utils/api';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem('token', data.token || data.access_token);
      localStorage.setItem('userData', JSON.stringify(data.user || data));
      router.push('/dashboard');
    } catch (error) {
      alert(
        `Échec de la connexion: ${error instanceof Error ? error.message : 'Erreur inconnue'}`
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
              <LogIn className="text-primary h-8 w-8" />
            </div>
            <h1 className="text-foreground text-3xl font-bold">Connexion</h1>
            <p className="text-muted-foreground mt-2">
              Accédez à votre espace personnel
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-foreground mb-2 block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <Mail className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-10 py-3 transition-all outline-none focus:ring-2"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-foreground mb-2 block text-sm font-medium">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-10 py-3 pr-12 transition-all outline-none focus:ring-2"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-primary absolute top-1/2 right-3 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="border-muted text-primary rounded"
                />
                <span className="text-muted-foreground text-sm">
                  Se souvenir de moi
                </span>
              </label>
              <a
                href="/forgot-password"
                className="text-primary text-sm font-medium hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-primary-foreground flex w-full items-center justify-center gap-2 rounded-xl py-3 font-bold shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              {loading ? 'Connexion...' : 'Se Connecter'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Pas encore de compte ?{' '}
              <a
                href="/register"
                className="text-primary font-medium hover:underline"
              >
                S&apos;inscrire
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
