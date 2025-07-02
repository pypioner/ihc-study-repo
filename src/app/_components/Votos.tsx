"use client";

import { useState } from "react";
import style from "./votos.module.css";

export default function Votos({ count }: { count?: number }) {
  const [voted, setVoted] = useState(0);

  return (
    <div className={style.votos}>
      <button
        className={style.upvote}
        aria-pressed={voted === 1}
        onClick={() => (voted === 1 ? setVoted(0) : setVoted(1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="m280-400 200-200 200 200H280Z" />
        </svg>
      </button>
      <span className={style.contador}>
        {count !== undefined ? count + voted : 0}
      </span>
      <button
        className={style.downvote}
        aria-pressed={voted === -1}
        onClick={() => (voted === -1 ? setVoted(0) : setVoted(-1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      </button>
    </div>
  );
}
