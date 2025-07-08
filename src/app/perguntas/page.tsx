import Link from "next/link";
import Header from "../_components/Header";
import Paginacao from "../_components/Paginacao";
import Pergunta from "../_components/Pergunta";
import style from "./perguntas.module.css";

export default async function Perguntas({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return (
    <>
      <Header path="/perguntas" />
      <div className="page_container">
        <main>
          <div className={style.titulo}>
            <h2>Perguntas e Respostas</h2>
            <Link
              href="/perguntas/novo"
              className="button"
              title="Criar nova pergunta"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="currentColor"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
              Nova pergunta
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
                slug: "como-fazer-um-loop-em-javascript",
                titulo: "Como fazer um loop em JavaScript?",
                descricao:
                  "Estou tentando entender como funcionam os loops em JavaScript, alguém pode me ajudar? Tudo que encontro na internet é muito técnico e não consigo entender, gostaria de um exemplo simples que eu possa testar e ver o resultado.",
                votos: Math.floor(Math.random() * 100),
                resolvida: Math.random() < 0.5,
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
                respostas: 3,
                favoritada: Math.random() < 0.5,
              }))
              .filter((pergunta, i) => {
                let include = false;
                if (params.resolvidas === params["nao-resolvidas"]) {
                  include = true;
                } else {
                  if (params.resolvidas && pergunta.resolvida) {
                    include = true;
                  }
                  if (params["nao-resolvidas"] && !pergunta.resolvida) {
                    include = true;
                  }
                }
                if (include) {
                  if (params.favoritas && !pergunta.favoritada) {
                    return false;
                  }
                  if (params.minhas && pergunta.autor.slug !== "meu-nome") {
                    return false;
                  }
                  if (params.curso && params.curso !== pergunta.curso.slug) {
                    return false;
                  }
                  if (
                    params.materia &&
                    params.materia !== pergunta.materia.slug
                  ) {
                    return false;
                  }
                  if (params.busca) {
                    const busca = (params.busca as string).toLowerCase();
                    return (
                      pergunta.titulo.toLowerCase().includes(busca) ||
                      pergunta.descricao.toLowerCase().includes(busca)
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
              .map((pergunta, i) => (
                <Pergunta key={`pergunta_${i}`} pergunta={pergunta} />
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
                    name="resolvidas"
                    defaultChecked={
                      !params.resolvidas &&
                      !params["nao-resolvidas"] &&
                      !params.favoritas &&
                      !params.minhas
                        ? true
                        : params.resolvidas !== undefined
                    }
                  />
                  Resolvidas
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="nao-resolvidas"
                    defaultChecked={
                      !params.resolvidas &&
                      !params["nao-resolvidas"] &&
                      !params.favoritas &&
                      !params.minhas
                        ? true
                        : params["nao-resolvidas"] !== undefined
                    }
                  />
                  Não resolvidas
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="favoritas"
                    defaultChecked={params.favoritas !== undefined}
                  />
                  Apenas favoritas
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="minhas"
                    defaultChecked={params.minhas !== undefined}
                  />
                  Apenas minhas perguntas
                </label>
              </div>
            </div>
          </form>
        </aside>
      </div>
    </>
  );
}
