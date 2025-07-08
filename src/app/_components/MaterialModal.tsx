"use client";
import { useState } from "react";
import styles from "./materialmodal.module.css";

interface MaterialModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (formData: FormData) => void;
}

export default function MaterialModal({
  open,
  onClose,
  onSubmit,
}: MaterialModalProps) {
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (onSubmit) {
      await onSubmit(formData);
    }

    setLoading(false);
    onClose();
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <h3>Enviar novo material</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="titulo" placeholder="Título" required />
          <textarea name="descricao" placeholder="Descrição" required />
          <input
            type="file"
            name="arquivo"
            accept="application/pdf,image/png,image/jpeg,image/jpg"
            required
          />
          <div className={styles.modal_actions}>
            <button type="submit" className="button" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
            <button type="button" className="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
