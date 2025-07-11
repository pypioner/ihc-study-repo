import Votos from "./Votos";
import Link from "next/link";
import style from "./pergunta.module.css";
import Favoritar from "./Favoritar";
import { relativeDate } from "../_lib/relativeDate";

export default function Pergunta({
  pergunta,
  compact = false,
  hideTags = false,
}: {
  pergunta: {
    slug: string;
    titulo: string;
    descricao: string;
    votos: number;
    resolvida: boolean;
    curso: {
      slug: string;
      nome: string;
    };
    materia: {
      slug: string;
      nome: string;
    };
    autor: {
      nome: string;
      karma: string;
      slug: string;
    };
    data: Date;
    respostas: number;
    favoritada?: boolean;
  };
  compact?: boolean;
  hideTags?: boolean;
}) {
  return (
    <li className={`${style.pergunta} ${compact ? style.compact : ""}`}>
      {compact ? (
        <b className={style.votos}>{pergunta.votos}</b>
      ) : (
        <Votos count={pergunta.votos} />
      )}
      <div className={style.conteudo}>
        <div className={style.tituloContainer}>
          <Link
            className={style.titulo}
            href={`/perguntas/${pergunta.slug}`}
            title={`Pergunta: ${pergunta.titulo}`}
          >
            <h3>
              <span className={style.tituloTexto}>{pergunta.titulo}</span>
              {pergunta.resolvida && (
                <span className={style.resolvida}>
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
                    <span>Resolvida</span>
                  </div>
                </span>
              )}
            </h3>
          </Link>
          {!compact && <Favoritar defaultValue={pergunta.favoritada} />}
        </div>
        {!compact && (
          <p className={style.descricao}>
            {pergunta.descricao.length > 200
              ? pergunta.descricao.slice(0, 200).trim() + "..."
              : pergunta.descricao}
          </p>
        )}
        {!(compact && hideTags) && (
          <div className={style.informacoes}>
            {!hideTags && (
              <div className={style.tags}>
                {!compact && (
                  <Link
                    href={`/perguntas?curso=${pergunta.curso.slug}`}
                    className="button secondary"
                  >
                    {pergunta.curso.nome}
                  </Link>
                )}
                <Link
                  href={`/perguntas?curso=${pergunta.curso.slug}&materia=${pergunta.materia.slug}`}
                  className="button secondary"
                >
                  {pergunta.materia.nome}
                </Link>
              </div>
            )}
            {!compact && (
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
                  <Link href={`/perfil/${pergunta.autor.slug}`}>
                    {pergunta.autor.nome}
                  </Link>
                  <strong className={style.karma}>
                    {pergunta.autor.karma}
                  </strong>
                </div>
                <div className={style.info}>
                  {relativeDate(pergunta.data)}, {pergunta.respostas}{" "}
                  {pergunta.respostas === 1 ? "resposta" : "respostas"}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {compact && (
        <div className={style.meta}>
          <Link href={`/perfil/${pergunta.autor.slug}`} className={style.autor}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M247.85-260.62q51-36.69 108.23-58.03Q413.31-340 480-340t123.92 21.35q57.23 21.34 108.23 58.03 39.62-41 63.73-96.84Q800-413.31 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 66.69 24.12 122.54 24.11 55.84 63.73 96.84ZM480-460q-50.54 0-85.27-34.73T360-580q0-50.54 34.73-85.27T480-700q50.54 0 85.27 34.73T600-580q0 50.54-34.73 85.27T480-460Zm0 340q-75.31 0-141-28.04t-114.31-76.65Q176.08-273.31 148.04-339 120-404.69 120-480t28.04-141q28.04-65.69 76.65-114.31 48.62-48.61 114.31-76.65Q404.69-840 480-840t141 28.04q65.69 28.04 114.31 76.65 48.61 48.62 76.65 114.31Q840-555.31 840-480t-28.04 141q-28.04 65.69-76.65 114.31-48.62 48.61-114.31 76.65Q555.31-120 480-120Z" />
            </svg>
          </Link>
        </div>
      )}
    </li>
  );
}
