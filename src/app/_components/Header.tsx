import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <a href="/" className={style.logo}>
        UCS Repo
      </a>
      <nav>
        <a href="/materiais">Materiais</a>
        <a href="/perguntas">Perguntas</a>
      </nav>
      <div>
        <a href="/login">Login</a>
      </div>
    </header>
  );
}
