import Header from "../_components/Header";
import Pergunta from "../_components/Pergunta";
import style from "./perguntas.module.css";

export default function Perguntas() {
  return (
    <>
      <Header path="/perguntas" />
      <div className="page_container">
        <main>
          <h2>Perguntas e Respostas</h2>
          <ul className={style.lista}>
            {Array(15)
              .fill(null)
              .map((_, i) => (
                <Pergunta
                  key={i}
                  pergunta={{
                    slug: "como-fazer-um-loop-em-javascript",
                    titulo: "Como fazer um loop em JavaScript?",
                    descricao:
                      "Estou tentando entender como funcionam os loops em JavaScript, alguém pode me ajudar? Tudo que encontro na internet é muito técnico e não consigo entender, gostaria de um exemplo simples que eu possa testar e ver o resultado.",
                    votos: 10,
                    resolvida: true,
                    curso: {
                      slug: "ciencia-da-computacao",
                      nome: "Ciência da Computação",
                    },
                    materia: { slug: "programacao", nome: "Programação" },
                    autor: {
                      nome: "João Silva",
                      karma: "17mil",
                      slug: "joao-silva",
                    },
                    data: "há 2 dias",
                    respostas: 3,
                  }}
                />
              ))}
          </ul>
        </main>
        <aside>
          <h3>Filtros</h3>
          <form className="filtros">
            <div className="busca">
              <input type="search" name="busca" placeholder="Buscar..." />
              <button type="submit" className="button">
                Buscar
              </button>
            </div>
            <div className="select">
              <label htmlFor="curso">Curso</label>
              <select name="curso" id="curso">
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
              <select name="materia" id="materia">
                <option value="">Todas as matérias</option>
                <option value="programacao">Programação</option>
                <option value="banco-de-dados">Banco de Dados</option>
                <option value="redes">Redes</option>
              </select>
            </div>
            <div className="select">
              <label htmlFor="ordenacao">Ordenar por</label>
              <select name="ordenacao" id="ordenacao">
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
                    defaultChecked={true}
                  />
                  Resolvidas
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="nao-resolvidas"
                    defaultChecked={true}
                  />
                  Não resolvidas
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="favoritas"
                    defaultChecked={true}
                  />
                  Favoritas
                </label>
                <label>
                  <input type="checkbox" name="minhas" />
                  Minhas perguntas
                </label>
                <label>
                  <input type="checkbox" name="minhas-respostas" />
                  Minhas respostas
                </label>
              </div>
            </div>
          </form>
        </aside>
      </div>
    </>
  );
}
