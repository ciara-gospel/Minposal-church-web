'use client';

import { useEffect, useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  User,
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { apiRequest } from '@/utils/api';
import { useRouter } from 'next/navigation';
import ConfirmModal from '@/components/ui/ConfirmModal';

interface Programme {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  branch: string;
  createdBy?: string;
  createdAt?: string;
}

interface UserData {
  role: 'VISITEUR' | 'MEMBRE' | 'ADMIN';
  name?: string;
  username?: string;
  email?: string;
}

export default function ProgrammesPage() {
  const router = useRouter();
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProgramme, setEditingProgramme] = useState<Programme | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState<string | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [creatorName, setCreatorName] = useState<string>('');
  const [formData, setFormData] = useState<Partial<Programme>>({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    branch: '',
    createdBy: '',
    createdAt: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const parsedUser: UserData = JSON.parse(storedUser);
      setUserData(parsedUser);
      setCreatorName(
        parsedUser.name ||
          parsedUser.username ||
          parsedUser.email ||
          'Utilisateur'
      );
    }
    fetchProgrammes();
  }, [router]);

  const fetchProgrammes = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await apiRequest('/programme', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const rawData = Array.isArray(response?.data) ? response.data : [];
      const data = rawData.map((p: Record<string, unknown>) => ({
        ...p,
        id: (p.id ?? p._id) as number,
      }));
      setProgrammes(data);
    } catch (error) {
      console.error('Error fetching programmes:', error);
    }
  };

  const handleEdit = (programme: Programme) => {
    setEditingProgramme(programme);
    setFormData(programme);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingProgramme(null);
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      branch: '',
    });
    setShowForm(true);
  };

  const openDeleteModal = (id: number) => {
    setDeleteTargetId(id);
  };

  const closeDeleteModal = () => {
    setDeleteTargetId(null);
  };

  const confirmDeleteProgramme = async () => {
    if (deleteTargetId === null) return;
    setDeleteLoading(true);
    try {
      const token = localStorage.getItem('token');
      await apiRequest(`/programme/${deleteTargetId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProgrammes(programmes.filter((p) => p.id !== deleteTargetId));
    } catch (error) {
      console.error('Error deleting programme:', error);
    } finally {
      setDeleteLoading(false);
      closeDeleteModal();
    }
  };

  const handleDelete = (id: number) => {
    openDeleteModal(id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const programmeData = {
        ...formData,
        id: editingProgramme?.id ?? Date.now(),
      };

      if (editingProgramme) {
        await apiRequest(`/programme/${editingProgramme.id}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(programmeData),
        });
        setProgrammes(
          programmes.map((p) =>
            p.id === editingProgramme.id ? { ...p, ...programmeData } : p
          )
        );
      } else {
        const newProgrammeData = {
          ...programmeData,
          createdBy: creatorName,
          createdAt: new Date().toISOString(),
        };
        const response = await apiRequest('/programme', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newProgrammeData),
        });
        const saved = response?.data || response;
        setProgrammes([...programmes, saved]);
      }
      setShowForm(false);
    } catch (error) {
      console.error('Error saving programme:', error);
      setErrorModal(error instanceof Error ? error.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isAdmin = userData?.role === 'ADMIN';

  return (
    <DashboardLayout
      title="Programmes"
      description="Gérez les programmes de l'église"
    >
      <div className="space-y-6">
        {!isAdmin && (
          <div className="bg-destructive/10 border-destructive/20 rounded-lg border p-4">
            <p className="text-destructive text-sm font-medium">
              Note: Seuls les administrateurs peuvent créer des programmes.
            </p>
          </div>
        )}

        {isAdmin && (
          <button
            onClick={handleAdd}
            className="bg-primary text-primary-foreground flex items-center gap-2 rounded-xl px-4 py-2.5 font-medium shadow-lg transition-all hover:scale-105"
          >
            <Plus className="h-4 w-4" />
            Ajouter un programme
          </button>
        )}

        {showForm && isAdmin && (
          <div className="bg-muted/50 rounded-xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-foreground font-bold">
                {editingProgramme
                  ? 'Modifier le programme'
                  : 'Nouveau programme'}
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    Titre
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title || ''}
                    onChange={handleChange}
                    className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-4 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                    required
                  />
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    Branche
                  </label>
                  <select
                    name="branch"
                    value={formData.branch || ''}
                    onChange={handleChange}
                    className="border-muted text-foreground focus:border-primary focus:ring-primary/20 w-full appearance-none rounded-xl border bg-white px-4 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                    required
                  >
                    <option value="">Sélectionner une branche</option>
                    <option value="Yaoundé">Yaoundé</option>
                    <option value="Douala">Douala</option>
                    <option value="Bafoussam">Bafoussam</option>
                    <option value="Bertoua">Bertoua</option>
                    <option value="Ebolowa">Ebolowa</option>
                    <option value="Yokaduma">Yokaduma</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date || ''}
                    onChange={handleChange}
                    className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-4 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                    required
                  />
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm font-medium">
                    Heure
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time || ''}
                    onChange={handleChange}
                    className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-4 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  Lieu
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location || ''}
                  onChange={handleChange}
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-4 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                  required
                />
              </div>

              <div>
                <label className="text-foreground mb-2 block text-sm font-medium">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description || ''}
                  onChange={handleChange}
                  rows={3}
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-4 py-2.5 transition-all outline-none focus:ring-2 dark:bg-gray-800"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground flex items-center gap-2 rounded-xl px-6 py-2.5 font-medium shadow-lg transition-all hover:scale-105"
              >
                <Save className="h-4 w-4" />
                {loading
                  ? 'Enregistrement...'
                  : editingProgramme
                    ? 'Mettre à jour'
                    : 'Enregistrer'}
              </button>
            </form>
          </div>
        )}

        <div className="space-y-4">
          {programmes.length === 0 ? (
            <p className="text-muted-foreground py-8 text-center">
              Aucun programme disponible
            </p>
          ) : (
            programmes.map((programme) => (
              <div
                key={programme.id}
                className="bg-muted/50 flex items-start justify-between rounded-xl p-6"
              >
                <div className="flex-1">
                  <h3 className="text-foreground mb-2 text-lg font-bold">
                    {programme.title}
                  </h3>
                  <div className="text-muted-foreground mb-3 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {programme.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {programme.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {programme.location}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {programme.description}
                  </p>
                  {(programme.createdBy || programme.createdAt) && (
                    <div className="text-muted-foreground border-muted-foreground/20 mt-3 flex flex-wrap gap-4 border-t pt-3 text-xs">
                      {programme.createdBy && (
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          Créé par: {programme.createdBy}
                        </div>
                      )}
                      {programme.createdAt && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Le:{' '}
                          {new Date(programme.createdAt).toLocaleString(
                            'fr-FR'
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {isAdmin && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(programme)}
                      className="text-secondary hover:bg-secondary/10 rounded-lg p-2 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(programme.id)}
                      className="text-destructive hover:bg-destructive/10 rounded-lg p-2 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <ConfirmModal
        isOpen={!!errorModal}
        onClose={() => setErrorModal(null)}
        onConfirm={() => setErrorModal(null)}
        title="Erreur"
        message={errorModal || ''}
        confirmLabel="OK"
        cancelLabel={null}
        loading={false}
      />

      <ConfirmModal
        isOpen={!!deleteTargetId}
        onClose={closeDeleteModal}
        onConfirm={confirmDeleteProgramme}
        title="Supprimer le programme"
        message="Voulez-vous supprimer ce programme ? Cette action est irréversible."
        confirmLabel="Oui"
        cancelLabel="Non"
        loading={deleteLoading}
      />
    </DashboardLayout>
  );
}
