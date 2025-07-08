import Link from "next/link";
import Header from "../../_components/Header";
import style from "../perguntas.module.css";

export default async function NovaPergunta() {
  return (
    <>
      <Header path="/perguntas" />
      <div className="page_container">
        <main>
          <Link className={style.voltar} href="/perguntas">
            &lt; Perguntas e Respostas
          </Link>
          <div className={style.titulo}>
            <h2>Nova pergunta</h2>
          </div>
          <form className={style.form}>
            <div className={style.ladoALado}>
              <div>
                <label htmlFor="curso">Curso</label>
                <select id="curso" name="curso" required>
                  <option value="">Selecione um curso</option>
                  <option value="ciencia-da-computacao">
                    Ciência da Computação
                  </option>
                  <option value="analise-e-desenvolvimento-de-sistemas">
                    Análise e Desenvolvimento de Sistemas
                  </option>
                  <option value="engenharia-de-software">
                    Engenharia de Software
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="materia">Matéria</label>
                <select id="materia" name="materia" required>
                  <option value="">Selecione uma matéria</option>
                  <option value="programacao">Programação</option>
                  <option value="banco-de-dados">Banco de Dados</option>
                  <option value="engenharia-de-software">
                    Engenharia de Software
                  </option>
                  <option value="redes">Redes</option>
                </select>
              </div>
            </div>

            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              placeholder="Digite o título da sua pergunta"
              required
            />

            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Descreva sua dúvida ou problema"
              rows={5}
              required
            ></textarea>

            <Link href="/perguntas/nova-pergunta" className="button">
              Publicar Pergunta
            </Link>
          </form>
        </main>
      </div>
    </>
  );
}
