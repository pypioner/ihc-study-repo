"use client";

import { useState } from "react";
import style from "./favoritar.module.css";

export default function Favoritar({
  defaultValue = false,
}: {
  defaultValue?: boolean;
}) {
  const [favoritado, setFavoritado] = useState(defaultValue);

  return (
    <button
      className={style.favoritar}
      aria-pressed={favoritado}
      onClick={() => setFavoritado(!favoritado)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36px"
        viewBox="0 -960 960 960"
        width="36px"
        fill="currentColor"
      >
        {favoritado ? (
          <path d="m293-203.08 49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08Z" />
        ) : (
          <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm-61 83.92 49.62-212.54-164.93-142.84 217.23-18.85L480-777.69l85.08 200.38 217.23 18.85-164.93 142.84L667-203.08 480-315.92 293-203.08ZM480-470Z" />
        )}
      </svg>
    </button>
  );
}
