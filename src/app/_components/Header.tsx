import style from "./header.module.css";
import Login from "./Login";

export default function Header({ path }: { path?: string }) {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>UCS Repo</h1>
      <nav>
        <a
          href="/materiais"
          data-active={path === "/materiais" ? "true" : "false"}
        >
          Materiais
        </a>
        <a
          href="/perguntas"
          data-active={path === "/perguntas" ? "true" : "false"}
        >
          Perguntas
        </a>
      </nav>
      <div>
        <Login />
      </div>
    </header>
  );
}
