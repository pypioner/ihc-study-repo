import Header from "../_components/Header";
import style from "./perguntas.module.css";

export default function Perguntas() {
  return (
    <>
      <Header path="/perguntas" />
      <main>
        <div>
          <h2>Perguntas e Respostas</h2>
        </div>
        <aside>
          <h3>Filtros</h3>
          <form className="filtros">
            <div className="busca">
              <input type="search" name="busca" placeholder="Buscar..." />
              <button type="submit">Buscar</button>
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
            <div className="checkboxes">
              <h4>Incluir:</h4>
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
      </main>
    </>
  );
}
