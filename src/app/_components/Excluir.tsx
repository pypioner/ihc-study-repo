"use client";
import { useState } from "react";
import style from "./reportar.module.css";

export default function Excluir({
  type,
}: {
  type: "pergunta" | "resposta" | "comentario" | "material";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={style.reportar}
        onClick={() => {
          setOpen(true);
        }}
      >
        Excluir
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
          <h3>Excluir {type}?</h3>
          <p>
            Esta ação é irreversível. Você tem certeza de que deseja excluir est
            {["comentario", "material"].includes(type) ? "e" : "a"} {type}?
          </p>
          <p>Para confirmar, digite EXCLUIR:</p>
          <form>
            <input type="text" required name="deletar" pattern="EXCLUIR" />
            <button type="submit" className="button destructive">
              Excluir
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
