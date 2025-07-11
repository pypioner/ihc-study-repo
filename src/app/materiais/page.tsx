import Header from "../_components/Header";
import style from "./materiais.module.css";
import Paginacao from "../_components/Paginacao";
import Material from "../_components/Material";
import Link from "next/link";

export default async function Materiais({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return (
    <>
      <Header path="/materiais" />
      <div className="page_container">
        <main>
          <div className={style.titulo}>
            <h2>Materiais</h2>
            <Link className="button" href="/materiais/novo">
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
            </Link>
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
                votos: Math.floor(Math.random() * 100),
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
              .filter((material) => {
                let include = false;
                if (params["com-resolucao"] === params["sem-resolucao"]) {
                  include = true;
                } else {
                  if (params["com-resolucao"] && material.resolucao) {
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
              .sort((a, b) => {
                if (params.ordenacao === "mais-votadas") {
                  return b.votos - a.votos;
                }
                if (params.ordenacao === "menos-votadas") {
                  return a.votos - b.votos;
                }
                if (params.ordenacao === "mais-novas") {
                  return b.data.getTime() - a.data.getTime();
                }
                if (params.ordenacao === "mais-antigas") {
                  return a.data.getTime() - b.data.getTime();
                }
                // Default = mais-votadas
                return b.votos - a.votos;
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
                defaultValue={params.ordenacao || "mais-votadas"}
              >
                <option value="mais-votadas">Maior nota</option>
                <option value="menos-votadas">Menor nota</option>
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
                      !params["com-resolucao"] &&
                      !params["sem-resolucao"] &&
                      !params.favoritos &&
                      !params.minhas
                        ? true
                        : params["com-resolucao"] !== undefined
                    }
                  />
                  Com resolução
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="sem-resolucao"
                    defaultChecked={
                      !params["com-resolucao"] &&
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
