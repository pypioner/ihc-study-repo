"use client"

import Header from "../_components/Header";
import style from "./materiais.module.css";
import Paginacao from "../_components/Paginacao";
import Material from "../_components/Material";
import MaterialModal from "../_components/MaterialModal";
import { useState } from "react";


export default function Materiais({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <MaterialModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={() => setShowModal(false)}
      />
      <Header path="/materiais" />
      <div className="page_container">
        <main>
          <div className={style.titulo}>
            <h2>Materiais</h2>
            <button className="button" onClick={() => setShowModal(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="currentColor"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
              Novo material
            </button>
          </div>
           
          <Paginacao
            key={`paginacao_t_${params.page}`}
            page={typeof params.page === "string" ? parseInt(params.page) : 1}
            totalPages={10}
          />
          <ul className={style.lista}>
            {Array(15)
              .fill(null)
              .map((_, i) => ({
                slug: "prova-de-compiladores-2018",
                titulo: "Prova de Compiladores, 2018",
                descricao:
                  "Prova da disciplina de Compiladores do curso de Ciência da Computação da UCS. Traz questões sobre análise léxica e sintática, gramáticas, autômatos e outros temas que costumam cair na matéria. Boa pra revisar o conteúdo ou ter uma ideia do estilo das provas anteriores.",
                filepath: "/provas/Segunda Prova de Compiladores 2018.pdf",
                filename: "Segunda Prova de Compiladores 2018.pdf",
                visualizacoes: Math.floor(Math.random() * 100),
                resolucao: Math.random() < 0.5,
                curso: [
                  {
                    slug: "ciencia-da-computacao",
                    nome: "Ciência da Computação",
                  },
                  {
                    slug: "analise-e-desenvolvimento-de-sistemas",
                    nome: "Análise e Desenvolvimento de Sistemas",
                  },
                ][Math.floor(Math.random() * 2)],
                materia: [
                  {
                    slug: "programacao",
                    nome: "Programação",
                  },
                  {
                    slug: "banco-de-dados",
                    nome: "Banco de Dados",
                  },
                  {
                    slug: "redes",
                    nome: "Redes",
                  },
                ][Math.floor(Math.random() * 3)],
                autor: [
                  {
                    nome: "João Silva",
                    karma: "17mil",
                    slug: "joao-silva",
                  },
                  {
                    nome: "Meu Nome",
                    karma: "5mil",
                    slug: "meu-nome",
                  },
                ][Math.floor(Math.random() * 2)],
                data: new Date(
                  Date.now() - Math.floor(Math.random() * 1000000000)
                ),
                favoritada: Math.random() < 0.5,
              }))
              .filter((material, i) => {
                let include = false;
                if (params.resolvidas === params["sem-resolucao"]) {
                  include = true;
                } else {
                  if (params.resolvidas && material.resolucao) {
                    include = true;
                  }
                  if (params["sem-resolucao"] && !material.resolucao) {
                    include = true;
                  }
                }
                if (include) {
                  if (params.favoritos && !material.favoritada) {
                    return false;
                  }
                  if (params.minhas && material.autor.slug !== "meu-nome") {
                    return false;
                  }
                  if (params.curso && params.curso !== material.curso.slug) {
                    return false;
                  }
                  if (
                    params.materia &&
                    params.materia !== material.materia.slug
                  ) {
                    return false;
                  }
                  if (params.busca) {
                    const busca = (params.busca as string).toLowerCase();
                    return (
                      material.titulo.toLowerCase().includes(busca) ||
                      material.descricao.toLowerCase().includes(busca)
                    );
                  }
                }
                return include;
              })
              .map((material, i) => (
                <Material key={`material_${i}`} material={material} />
              ))}
          </ul>
          <Paginacao
            key={`paginacao_b_${params.page}`}
            page={typeof params.page === "string" ? parseInt(params.page) : 1}
            totalPages={10}
          />
        </main>
        <aside>
          <h3>Filtros</h3>
          <form className="filtros">
            <div className="busca">
              <input
                type="search"
                name="busca"
                placeholder="Buscar..."
                defaultValue={params.busca || ""}
              />
              <button type="submit" className="button">
                Buscar
              </button>
            </div>
            <div className="select">
              <label htmlFor="curso">Curso</label>
              <select name="curso" id="curso" defaultValue={params.curso || ""}>
                <option value="">Todos os cursos</option>
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
                name="materia"
                id="materia"
                defaultValue={params.materia || ""}
              >
                <option value="">Todas as matérias</option>
                <option value="programacao">Programação</option>
                <option value="banco-de-dados">Banco de Dados</option>
                <option value="redes">Redes</option>
              </select>
            </div>
            <div className="select">
              <label htmlFor="ordenacao">Ordenar por</label>
              <select
                name="ordenacao"
                id="ordenacao"
                defaultValue={params.ordenacao || "mais-visualizadas"}
              >
                <option value="mais-visualizadas">Mais visualizadas</option>
                <option value="menos-visualizadas">Menos visualizadas</option>
                <option value="mais-novas">Mais novas</option>
                <option value="mais-antigas">Mais antigas</option>
              </select>
            </div>
            <div className="checkboxes">
              <h4>Incluir</h4>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="com-resolucao"
                    defaultChecked={
                      !params.resolvidas &&
                      !params["sem-resolucao"] &&
                      !params.favoritos &&
                      !params.minhas
                        ? true
                        : params.resolvidas !== undefined
                    }
                  />
                  Com resolução
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="sem-resolucao"
                    defaultChecked={
                      !params.resolvidas &&
                      !params["sem-resolucao"] &&
                      !params.favoritos &&
                      !params.minhas
                        ? true
                        : params["sem-resolucao"] !== undefined
                    }
                  />
                  Sem resolução
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="favoritos"
                    defaultChecked={params.favoritos !== undefined}
                  />
                  Apenas favoritos
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="minhas"
                    defaultChecked={params.minhas !== undefined}
                  />
                  Apenas meus materiais
                </label>
              </div>
            </div>
          </form>
        </aside>
      </div>
    </>
  );
}
