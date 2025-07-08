import Link from "next/link";
import Header from "../../_components/Header";
import style from "../materiais.module.css";

export default async function NovoMaterial() {
  return (
    <>
      <Header path="/materiais" />
      <div className="page_container">
        <main>
          <Link className={style.voltar} href="/materiais">
            &lt; Materiais
          </Link>
          <div className={style.titulo}>
            <h2>Novo material</h2>
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
              placeholder="Digite o título do seu material"
              required
            />

            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Descreva o seu material"
              rows={5}
              required
            ></textarea>

            <label htmlFor="arquivo">Arquivo</label>
            <input
              type="file"
              id="arquivo"
              name="arquivo"
              accept="application/pdf,image/png,image/jpeg,image/jpg"
              required
            />

            <Link href="/materiais/novo-material" className="button">
              Publicar Material
            </Link>
          </form>
        </main>
      </div>
    </>
  );
}
