import Header from "@/app/_components/Header";
import style from "./material.module.css";
import Link from "next/link";
import Pergunta from "@/app/_components/Pergunta";


export default async function MaterialPage() {
  return (
    <>
      <Header path="/materiais" />
      <div className={style.file_container}>
        <main>
          <Link className={style.voltar} href="/materiais">
            &lt; Materiais
          </Link>

          <iframe
            src="/provas/Segunda Prova de Compiladores 2018.pdf"
          ></iframe>

        </main>
      </div>
    </>
  );
}
''