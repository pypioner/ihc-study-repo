"use client";

import Link from "next/link";
import style from "./paginacao.module.css";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Paginacao({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const generatePageLink = (page: number) => {
    const searchParamsCopy = new URLSearchParams(searchParams);
    searchParamsCopy.set("page", page.toString());
    return pathname + "?" + searchParamsCopy.toString();
  };

  const [typedInPage, setTypedInPage] = useState(page);

  return (
    <div className={style.paginacao}>
      <Link
        href={generatePageLink(page - 1)}
        className={`button secondary ${style.button}`}
        aria-label="Página anterior"
        aria-disabled={page <= 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M560-267.69 347.69-480 560-692.31 588.31-664l-184 184 184 184L560-267.69Z" />
        </svg>
      </Link>
      <div className={style.page}>
        <span>Página </span>
        <input
          type="number"
          name="page"
          id="page"
          value={typedInPage}
          onChange={(e) => setTypedInPage(e.target.valueAsNumber)}
          min={1}
          max={totalPages}
        />
        <span> de {totalPages}</span>
        <Link
          href={generatePageLink(typedInPage)}
          className={`button secondary ${style.button}`}
          aria-label="Ir para página"
          onClick={(e) => {
            if (typedInPage < 1 || typedInPage > totalPages) {
              e.preventDefault();
            }
          }}
        >
          Ir
        </Link>
      </div>
      <Link
        href={generatePageLink(page + 1)}
        className={`button secondary ${style.button}`}
        aria-label="Próxima página"
        aria-disabled={page >= totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M400-267.69 612.31-480 400-692.31 371.69-664l184 184-184 184L400-267.69Z" />
        </svg>
      </Link>
    </div>
  );
}
