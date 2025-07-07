"use client";
import { useState } from "react";
import style from "./cursospopup.module.css";

export default function CursosPopup() {
  const [open, setOpen] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState<string>("");
  const [meusCursos, setMeusCursos] = useState<string[]>([
    "Ciência da Computação",
    "Análise e Desenvolvimento de Sistemas",
  ]);
  const [materiaSelecionada, setMateriaSelecionada] = useState<string>("");
  const [minhasMaterias, setMinhasMaterias] = useState<string[]>([
    "Programação",
    "Banco de Dados",
    "Redes",
  ]);

  const todosOsCursos: Record<string, string[]> = {
    "Ciência da Computação": ["Programação", "Banco de Dados", "Redes"],
    "Análise e Desenvolvimento de Sistemas": [
      "Programação",
      "Banco de Dados",
      "Redes",
    ],
    Direito: ["Direito Civil", "Direito Penal", "Direito Constitucional"],
    "Engenharia Civil": ["Mecânica dos Sólidos", "Hidráulica", "Estruturas"],
  };

  return (
    <>
      <span className={style.buttonRelative}>
        <button className={style.button} onClick={() => setOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="m405.38-120-14.46-115.69q-19.15-5.77-41.42-18.16-22.27-12.38-37.88-26.53L204.92-235l-74.61-130 92.23-69.54q-1.77-10.84-2.92-22.34-1.16-11.5-1.16-22.35 0-10.08 1.16-21.19 1.15-11.12 2.92-25.04L130.31-595l74.61-128.46 105.93 44.61q17.92-14.92 38.77-26.92 20.84-12 40.53-18.54L405.38-840h149.24l14.46 116.46q23 8.08 40.65 18.54 17.65 10.46 36.35 26.15l109-44.61L829.69-595l-95.31 71.85q3.31 12.38 3.7 22.73.38 10.34.38 20.42 0 9.31-.77 19.65-.77 10.35-3.54 25.04L827.92-365l-74.61 130-107.23-46.15q-18.7 15.69-37.62 26.92-18.92 11.23-39.38 17.77L554.62-120H405.38ZM440-160h78.23L533-268.31q30.23-8 54.42-21.96 24.2-13.96 49.27-38.27L736.46-286l39.77-68-87.54-65.77q5-17.08 6.62-31.42 1.61-14.35 1.61-28.81 0-15.23-1.61-28.81-1.62-13.57-6.62-29.88L777.77-606 738-674l-102.08 42.77q-18.15-19.92-47.73-37.35-29.57-17.42-55.96-23.11L520-800h-79.77l-12.46 107.54q-30.23 6.46-55.58 20.81-25.34 14.34-50.42 39.42L222-674l-39.77 68L269-541.23q-5 13.46-7 29.23t-2 32.77q0 15.23 2 30.23t6.23 29.23l-86 65.77L222-286l99-42q23.54 23.77 48.88 38.12 25.35 14.34 57.12 22.34L440-160Zm38.92-220q41.85 0 70.93-29.08 29.07-29.07 29.07-70.92t-29.07-70.92Q520.77-580 478.92-580q-42.07 0-71.04 29.08-28.96 29.07-28.96 70.92t28.96 70.92Q436.85-380 478.92-380ZM480-480Z" />
          </svg>
        </button>
      </span>
      <div
        className="popupBackground"
        data-open={open}
        onClick={() => setOpen(false)}
      >
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <h3>Selecione seus cursos e matérias</h3>
          <div className={style.selectContainer}>
            <select
              name="curso"
              id="curso"
              value={cursoSelecionado}
              onChange={(e) => {
                setCursoSelecionado(e.target.value);
                setMateriaSelecionada("");
              }}
            >
              <option value="">Selecione um curso</option>
              {Object.keys(todosOsCursos).map((curso) => (
                <option key={curso} value={curso}>
                  {curso}
                </option>
              ))}
            </select>
            <select
              name="materia"
              id="materia"
              value={materiaSelecionada}
              onChange={(e) => setMateriaSelecionada(e.target.value)}
            >
              <option value="">Selecione uma matéria</option>
              {cursoSelecionado &&
                todosOsCursos[cursoSelecionado].map((materia) => (
                  <option key={materia} value={materia}>
                    {materia}
                  </option>
                ))}
            </select>
            <button
              className="button"
              onClick={() => {
                if (cursoSelecionado && materiaSelecionada) {
                  if (!meusCursos.includes(cursoSelecionado)) {
                    setMeusCursos((prev) => [...prev, cursoSelecionado]);
                  }
                  if (!minhasMaterias.includes(materiaSelecionada)) {
                    setMinhasMaterias((prev) => [...prev, materiaSelecionada]);
                  }
                }
              }}
            >
              Adicionar
            </button>
          </div>
          <p>Clique nos itens abaixo para removê-los</p>
          <div className={style.assuntosContainer}>
            <div className={style.cursos}>
              <h4>Meus Cursos</h4>
              <ul>
                {meusCursos.map((curso, index) => (
                  <li key={index}>
                    <button
                      className="button secondary"
                      onClick={() => {
                        const newMeusCursos: string[] = meusCursos.filter(
                          (c) => c !== curso
                        );
                        // Se nenhum curso em meusCursos tiver as mesmas matérias que o curso deletado,
                        // remover as matérias associadas a ele
                        const allNewMaterias = newMeusCursos.reduce(
                          (acc, c) => {
                            const materiasInCurso = todosOsCursos[c] || [];
                            return acc.concat(materiasInCurso);
                          },
                          [] as string[]
                        );
                        const newMinhasMaterias = minhasMaterias.filter((m) =>
                          allNewMaterias.includes(m)
                        );
                        setMeusCursos(newMeusCursos);
                        setMinhasMaterias(newMinhasMaterias);
                      }}
                    >
                      {curso}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.cursos}>
              <h4>Minhas Matérias</h4>
              <ul>
                {minhasMaterias.map((materia, index) => (
                  <li key={index}>
                    <button
                      className="button secondary"
                      onClick={() =>
                        setMinhasMaterias((prev) =>
                          prev.filter((m) => m !== materia)
                        )
                      }
                    >
                      {materia}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
}
