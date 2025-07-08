"use client";
import { useState } from "react";
import style from "./editar.module.css";

export default function Editar({
  titulo,
  texto,
  type,
}: {
  type: "pergunta" | "resposta" | "comentario" | "material";
  texto: string;
  titulo?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={style.editar}
        onClick={() => {
          setOpen(true);
        }}
      >
        Editar
      </button>
      <div
        className="popupBackground"
        data-open={open}
        onClick={() => setOpen(false)}
      >
        <div
          className={"popup " + style.popup}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="closeButton" onClick={() => setOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z" />
            </svg>
          </button>
          <h3>Editando {type}</h3>
          <form>
            {titulo && (
              <>
                <label htmlFor="titulo">Título</label>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  placeholder="Título"
                  required
                  defaultValue={titulo}
                />
              </>
            )}
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Descrição"
              rows={10}
              required
              defaultValue={texto}
            ></textarea>
            {type === "material" && (
              <>
                <label htmlFor="arquivo">Arquivo</label>
                <input
                  type="file"
                  id="arquivo"
                  name="arquivo"
                  accept="application/pdf,image/png,image/jpeg,image/jpg"
                  required
                />
                <label className={style.checkbox}>
                  Com resolução?
                  <input
                    type="checkbox"
                    name="resolucao"
                    id="resolucao"
                    value="sim"
                    defaultChecked
                  />
                </label>
              </>
            )}
            <button type="submit" className="button">
              Salvar alterações
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
