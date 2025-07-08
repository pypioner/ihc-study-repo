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
  const [curso, setCurso] = useState("");
  const [materia, setMateria] = useState("");

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
          <label htmlFor="resolucao">
            <input type="checkbox" name="resolucao" defaultChecked={false} />
            Possui resolução?
          </label>

          <div className="select">
            <label htmlFor="curso">Curso</label>
            <select
              id="curso"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
              required
            >
              <option value="">Selecione um curso</option>
              <option value="ciencia-da-computacao">
                Ciência da Computação
              </option>
              <option value="analise-e-desenvolvimento-de-sistemas">
                Análise e Desenvolvimento de Sistemas
              </option>
            </select>
          </div>

          <div className="select">
            <label htmlFor="materia">Matéria</label>
            <select
              id="materia"
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
              required
            >
              <option value="">Selecione uma matéria</option>
              <option value="programacao">Programação</option>
              <option value="banco-de-dados">Banco de Dados</option>
              <option value="redes">Redes</option>
            </select>
          </div>

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
