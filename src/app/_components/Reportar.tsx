"use client";
import { useState } from "react";
import style from "./reportar.module.css";

export default function Reportar({
  type,
}: {
  type: "pergunta" | "resposta" | "comentario" | "material";
}) {
  const [open, setOpen] = useState(false);
  const [enviado, setEnviado] = useState(false);

  return (
    <>
      <button
        className={style.reportar}
        onClick={() => {
          setOpen(true);
          setEnviado(false);
        }}
      >
        Reportar
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
          <h3>Reportar {type}</h3>
          {enviado ? (
            <>
              <p>
                Obrigado por reportar! Vamos avaliar sua denúncia e tomar as
                medidas necessárias.
              </p>
              <button className="button" onClick={() => setOpen(false)}>
                Concluir
              </button>
            </>
          ) : (
            <>
              <p>
                Informe o motivo pelo qual você está reportando est
                {["material", "comentario"].includes(type) ? "e" : "a"} {type}.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEnviado(true);
                }}
              >
                <textarea
                  id="motivo"
                  name="motivo"
                  placeholder="Descreva o motivo da sua denúncia..."
                  rows={5}
                  required
                ></textarea>
                <button type="submit" className="button destructive">
                  Reportar
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
