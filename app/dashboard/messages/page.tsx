'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Mic, Paperclip, Smile, Trash2, Edit2 } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { apiRequest } from '@/utils/api';
import { useRouter } from 'next/navigation';
import ConfirmModal from '@/components/ui/ConfirmModal';

interface Message {
  _id: string;
  senderId: { _id?: string; nom?: string; prenom?: string; email?: string };
  contenu: string;
  type: 'TEXTE' | 'PRIERE' | 'ANNONCE' | 'AUDIO';
  duration?: number;
  createdAt: string;
  isOwn?: boolean;
}

export default function MessagesPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [userData, setUserData] = useState<{
    role: 'VISITEUR' | 'MEMBRE' | 'ADMIN';
    id?: string;
  } | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, [router]);

  const fetchMessages = useCallback(async () => {
    if (!userData?.id) return;
    try {
      const data = await apiRequest('/message');
      const currentUserId = userData.id;
      const mapped = (Array.isArray(data?.data) ? data.data : [])
        .map((msg: Message) => ({
          _id: msg._id,
          senderId: msg.senderId || {},
          contenu: msg.contenu || '',
          type: msg.type || 'TEXTE',
          duration: msg.duration,
          createdAt: msg.createdAt,
          isOwn:
            String(msg.senderId?._id || msg.senderId) === String(currentUserId),
        }))
        .sort(
          (a: Message, b: Message) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      setMessages(mapped as Message[]);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }, [userData?.id]);

  useEffect(() => {
    if (userData) {
      fetchMessages();
    }
  }, [userData, fetchMessages]);

  useEffect(() => {
    const parent = document.querySelector('.messages-container');
    if (parent) {
      parent.scrollTop = parent.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      const parent = messagesEndRef.current.parentElement;
      if (parent) {
        parent.scrollTop = parent.scrollHeight;
      }
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      newMessage.trim() &&
      userData &&
      ['MEMBRE', 'ADMIN'].includes(userData.role)
    ) {
      setLoading(true);
      try {
        const response = await apiRequest('/message', {
          method: 'POST',
          body: JSON.stringify({ contenu: newMessage, type: 'TEXTE' }),
        });
        const saved = response?.data || response;
        const createdMessage: Message = {
          _id: saved._id,
          senderId: saved.senderId || {},
          contenu: saved.contenu || newMessage,
          type: saved.type || 'TEXTE',
          duration: saved.duration,
          createdAt: saved.createdAt || new Date().toISOString(),
          isOwn: true,
        };
        setMessages((prev) => [...prev, createdMessage]);
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const startEdit = (msg: Message) => {
    setEditingId(msg._id);
    setEditContent(msg.contenu);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditContent('');
  };

  const handleUpdate = async (msgId: string) => {
    if (!editContent.trim()) return;
    try {
      const response = await apiRequest(`/message/${msgId}`, {
        method: 'PUT',
        body: JSON.stringify({ contenu: editContent }),
      });
      const saved = response?.data || response;
      setMessages((prev) =>
        prev.map((m) =>
          m._id === msgId ? { ...m, contenu: saved.contenu || editContent } : m
        )
      );
      cancelEdit();
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const openDeleteModal = (msgId: string) => {
    setDeleteTargetId(msgId);
  };

  const closeDeleteModal = () => {
    setDeleteTargetId(null);
  };

  const confirmDelete = async () => {
    if (!deleteTargetId) return;
    setDeleteLoading(true);
    try {
      await apiRequest(`/message/${deleteTargetId}`, {
        method: 'DELETE',
      });
      setMessages((prev) => prev.filter((m) => m._id !== deleteTargetId));
    } catch (error) {
      console.error('Error deleting message:', error);
    } finally {
      setDeleteLoading(false);
      closeDeleteModal();
    }
  };

  const handleDelete = async (msgId: string) => {
    openDeleteModal(msgId);
  };

  const canModify = (msg: Message) => {
    return userData && ['MEMBRE', 'ADMIN'].includes(userData.role) && msg.isOwn;
  };

  const isAuthorized = userData && ['MEMBRE', 'ADMIN'].includes(userData.role);

  function renderMessage(msg: Message) {
    const isText =
      msg.type === 'TEXTE' || msg.type === 'PRIERE' || msg.type === 'ANNONCE';
    const senderName = msg.senderId?.prenom
      ? `${msg.senderId.prenom} ${msg.senderId.nom || ''}`.trim()
      : 'Inconnu';
    return (
      <div
        key={msg._id}
        className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
      >
        <div className="max-w-[85%]">
          {!msg.isOwn && (
            <p className="text-muted-foreground mb-1 text-xs font-medium">
              {senderName}
            </p>
          )}
          {msg.isOwn && (
            <p className="text-muted-foreground mb-1 text-xs font-medium">
              Moi
            </p>
          )}
          <div
            className={`rounded-2xl px-4 py-2 ${
              msg.isOwn
                ? 'bg-primary text-primary-foreground rounded-br-none'
                : 'bg-incoming text-incoming-foreground rounded-bl-none'
            }`}
          >
            {editingId === msg._id ? (
              <div className="flex flex-col gap-2">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="bg-background/20 border-border rounded-md p-2 text-sm"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="text-xs opacity-70 hover:opacity-100"
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUpdate(msg._id)}
                    className="text-xs font-medium hover:underline"
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {isText ? (
                  <p className="text-sm">{msg.contenu}</p>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="bg-background/20 flex h-8 w-8 items-center justify-center rounded-full">
                      <Mic className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-background/20 h-1 w-24 rounded-full"></div>
                    </div>
                    <span className="text-xs opacity-70">
                      {msg.duration
                        ? `${Math.floor(msg.duration / 60)}:${String(msg.duration % 60).padStart(2, '0')}`
                        : ''}
                    </span>
                  </div>
                )}
                <p className="mt-1 text-right text-xs opacity-70">
                  {new Date(msg.createdAt).toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            )}
          </div>
          {canModify(msg) && editingId !== msg._id && (
            <div
              className={`mt-1 flex ${msg.isOwn ? 'justify-end' : 'justify-start'} gap-3`}
            >
              <button
                type="button"
                onClick={() => startEdit(msg)}
                className="text-muted-foreground hover:text-primary flex items-center gap-1 text-xs"
              >
                <Edit2 className="h-3 w-3" />
                Modifier
              </button>
              <button
                type="button"
                onClick={() => handleDelete(msg._id)}
                className="text-destructive hover:text-destructive/80 flex items-center gap-1 text-xs"
              >
                <Trash2 className="h-3 w-3" />
                Supprimer
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout title="Messages" description="Échangez avec la communauté">
      <div className="flex h-[800px] flex-col">
        {!isAuthorized && (
          <div className="bg-destructive/10 border-destructive/20 mx-4 mt-4 rounded-lg border p-4">
            <p className="text-destructive text-sm font-medium">
              Note: Seuls les administrateurs peuvent envoyer des messages.
            </p>
          </div>
        )}

        <div className="border-muted no-scrollbar messages-container min-h-0 flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <p className="text-muted-foreground text-center">
              Aucun message disponible
            </p>
          ) : (
            messages.map((msg) => renderMessage(msg))
          )}
          <div ref={messagesEndRef} />
        </div>

        {isAuthorized && (
          <div className="border-muted border-t p-4">
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <button
                type="button"
                className="text-muted-foreground hover:text-primary rounded-full p-2"
              >
                <Paperclip className="h-5 w-5" />
              </button>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Écrire un message..."
                  className="border-muted focus:border-primary focus:ring-primary/20 w-full rounded-full border bg-white px-4 py-2.5 pr-20 outline-none focus:ring-2 dark:bg-gray-800"
                />
                <button
                  type="button"
                  className="text-muted-foreground hover:text-primary absolute top-1/2 right-2 -translate-y-1/2"
                >
                  <Smile className="h-5 w-5" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => {}}
                className="text-muted-foreground hover:text-primary rounded-full p-2.5"
              >
                <Mic className="h-5 w-5" />
              </button>
              <button
                type="submit"
                disabled={!newMessage.trim() || loading}
                className="bg-primary text-primary-foreground rounded-full p-2.5 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        )}
      </div>

      <ConfirmModal
        isOpen={!!deleteTargetId}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        title="Supprimer le message"
        message="Voulez-vous supprimer ce message ? Cette action est irréversible."
        confirmLabel="Oui"
        cancelLabel="Non"
        loading={deleteLoading}
      />
    </DashboardLayout>
  );
}
