import Header from "@/app/_components/Header";
import style from "../../perguntas/[slug]/pergunta.module.css";
import Link from "next/link";
import Pergunta from "@/app/_components/Pergunta";
import Favoritar from "@/app/_components/Favoritar";
import Excluir from "@/app/_components/Excluir";
import Editar from "@/app/_components/Editar";
import { relativeDate } from "@/app/_lib/relativeDate";
import Votos from "@/app/_components/Votos";
import Reportar from "@/app/_components/Reportar";
import Material from "@/app/_components/Material";

export default async function MaterialPage() {
  return (
    <>
      <Header path="/materiais" />
      <div className="page_container">
        <main>
          <Link className={style.voltar} href="/materiais">
            &lt; Materiais
          </Link>
          <div className={style.card}>
            <div className={style.tituloContainer}>
              <h2>
                Prova de Compiladores, 2018
                <span
                  className={style.resolvida}
                  style={{ whiteSpace: "nowrap" }}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="currentColor"
                    >
                      <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
                    </svg>
                    <span>Com resolução</span>
                  </div>
                </span>
              </h2>
              <Favoritar defaultValue={false} />
            </div>
            <div className={style.informacoes}>
              <div className={style.tags}>
                <Link
                  href="/perguntas?curso=ciencia-da-computacao"
                  className="button secondary"
                >
                  Ciência da Computação
                </Link>
                <Link
                  href="/perguntas?curso=ciencia-da-computacao&materia=programacao"
                  className="button secondary"
                >
                  Programação
                </Link>
              </div>
              <div className={style.acoes}>
                <Excluir type="material" />
                <Editar
                  type="material"
                  titulo="Prova de Compiladores, 2018"
                  texto={
                    "Prova da disciplina de Compiladores do curso de Ciência da Computação da UCS. Traz questões sobre análise léxica e sintática, gramáticas, autômatos e outros temas que costumam cair na matéria. Boa pra revisar o conteúdo ou ter uma ideia do estilo das provas anteriores."
                  }
                />
              </div>
            </div>
          </div>

          <div className={style.descricao}>
            <Votos count={Math.floor(Math.random() * 100)} />
            <div className={style.texto}>
              <iframe
                src="/provas/Segunda Prova de Compiladores 2018.pdf"
                className={style.file}
              ></iframe>
              <p>
                Prova da disciplina de Compiladores do curso de Ciência da
                Computação da UCS. Traz questões sobre análise léxica e
                sintática, gramáticas, autômatos e outros temas que costumam
                cair na matéria. Boa pra revisar o conteúdo ou ter uma ideia do
                estilo das provas anteriores.
              </p>
              <div className={style.meta}>
                <div className={style.autor}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M247.85-260.62q51-36.69 108.23-58.03Q413.31-340 480-340t123.92 21.35q57.23 21.34 108.23 58.03 39.62-41 63.73-96.84Q800-413.31 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 66.69 24.12 122.54 24.11 55.84 63.73 96.84ZM480-460q-50.54 0-85.27-34.73T360-580q0-50.54 34.73-85.27T480-700q50.54 0 85.27 34.73T600-580q0 50.54-34.73 85.27T480-460Zm0 340q-75.31 0-141-28.04t-114.31-76.65Q176.08-273.31 148.04-339 120-404.69 120-480t28.04-141q28.04-65.69 76.65-114.31 48.62-48.61 114.31-76.65Q404.69-840 480-840t141 28.04q65.69 28.04 114.31 76.65 48.61 48.62 76.65 114.31Q840-555.31 840-480t-28.04 141q-28.04 65.69-76.65 114.31-48.62 48.61-114.31 76.65Q555.31-120 480-120Z" />
                  </svg>
                  <Link href="/perfil/meu-nome">Meu Nome</Link>
                  <strong className={style.karma}>5mil</strong>
                </div>
                <span>
                  {relativeDate(
                    new Date(
                      Date.now() - Math.floor(Math.random() * 1000000000)
                    )
                  )}
                  , 2 respostas
                </span>
              </div>
            </div>
          </div>

          <div className={style.respostas}>
            <h3>2 Comentários</h3>
            <form action="" className={style.postar}>
              <textarea
                placeholder="Escreva seu comentário..."
                rows={3}
                required
              ></textarea>
              <div className={style.botoes}>
                <button type="reset" className="button secondary">
                  Cancelar
                </button>
                <button type="submit" className="button primary">
                  Postar Comentário
                </button>
              </div>
            </form>
            <ul>
              <li className={style.resposta}>
                <div className={style.esquerda}>
                  <Votos count={Math.floor(Math.random() * 100)} />
                </div>
                <div className={style.direita}>
                  <div className={style.texto}>
                    <p>Muito obrigado pelo material!</p>
                  </div>
                  <div className={style.meta}>
                    <div className={style.autor}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="currentColor"
                      >
                        <path d="M247.85-260.62q51-36.69 108.23-58.03Q413.31-340 480-340t123.92 21.35q57.23 21.34 108.23 58.03 39.62-41 63.73-96.84Q800-413.31 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 66.69 24.12 122.54 24.11 55.84 63.73 96.84ZM480-460q-50.54 0-85.27-34.73T360-580q0-50.54 34.73-85.27T480-700q50.54 0 85.27 34.73T600-580q0 50.54-34.73 85.27T480-460Zm0 340q-75.31 0-141-28.04t-114.31-76.65Q176.08-273.31 148.04-339 120-404.69 120-480t28.04-141q28.04-65.69 76.65-114.31 48.62-48.61 114.31-76.65Q404.69-840 480-840t141 28.04q65.69 28.04 114.31 76.65 48.61 48.62 76.65 114.31Q840-555.31 840-480t-28.04 141q-28.04 65.69-76.65 114.31-48.62 48.61-114.31 76.65Q555.31-120 480-120Z" />
                      </svg>
                      <Link href="/perfil/joao-silva">João Silva</Link>
                      <strong className={style.karma}>17mil</strong>
                    </div>
                    <span>
                      <Reportar type="comentario" />
                      <span>
                        {relativeDate(
                          new Date(
                            Date.now() - Math.floor(Math.random() * 1000000000)
                          )
                        )}
                      </span>
                    </span>
                  </div>
                </div>
              </li>
              <li className={style.resposta} data-downvoted="true">
                <div className={style.esquerda}>
                  <Votos count={-83} />
                </div>
                <div className={style.direita}>
                  <div className={style.texto}>
                    <p>fsdjfdsjodfskofdso</p>
                  </div>
                  <div className={style.meta}>
                    <div className={style.autor}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="currentColor"
                      >
                        <path d="M247.85-260.62q51-36.69 108.23-58.03Q413.31-340 480-340t123.92 21.35q57.23 21.34 108.23 58.03 39.62-41 63.73-96.84Q800-413.31 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 66.69 24.12 122.54 24.11 55.84 63.73 96.84ZM480-460q-50.54 0-85.27-34.73T360-580q0-50.54 34.73-85.27T480-700q50.54 0 85.27 34.73T600-580q0 50.54-34.73 85.27T480-460Zm0 340q-75.31 0-141-28.04t-114.31-76.65Q176.08-273.31 148.04-339 120-404.69 120-480t28.04-141q28.04-65.69 76.65-114.31 48.62-48.61 114.31-76.65Q404.69-840 480-840t141 28.04q65.69 28.04 114.31 76.65 48.61 48.62 76.65 114.31Q840-555.31 840-480t-28.04 141q-28.04 65.69-76.65 114.31-48.62 48.61-114.31 76.65Q555.31-120 480-120Z" />
                      </svg>
                      <Link href="/perfil/meu-nome">Meu Nome</Link>
                      <strong className={style.karma}>5mil</strong>
                    </div>
                    <span>
                      <Excluir type="comentario" />
                      <Editar type="comentario" texto="fsdjfdsjodfskofdso" />
                      <span>
                        {relativeDate(
                          new Date(
                            Date.now() - Math.floor(Math.random() * 1000000000)
                          )
                        )}
                      </span>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
