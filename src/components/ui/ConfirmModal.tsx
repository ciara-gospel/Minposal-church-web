'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string | null;
  loading?: boolean;
  variant?: 'default' | 'destructive' | 'alert';
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Oui',
  cancelLabel = 'Non',
  loading = false,
  variant = 'destructive',
}: ConfirmModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        ref={dialogRef}
        className="bg-background border-border relative z-50 w-full max-w-md rounded-2xl border p-6 shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground absolute top-4 right-4"
        >
          <X className="h-4 w-4" />
        </button>
        <h3 className="text-foreground text-lg font-bold">{title}</h3>
        <p className="text-muted-foreground mt-2 text-sm">{message}</p>
        <div className="mt-6 flex justify-end gap-3">
          {cancelLabel && (
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="border-border text-foreground hover:bg-muted rounded-xl border px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50"
            >
              {cancelLabel}
            </button>
          )}
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={
              variant === 'alert'
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50'
                : 'bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50'
            }
          >
            {loading
              ? variant === 'destructive'
                ? 'Suppression...'
                : 'Chargement...'
              : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
