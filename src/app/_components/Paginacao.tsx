"use client";

import Link from "next/link";
import style from "./paginacao.module.css";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Paginacao({
  page,
  totalPages,
  paramName = "page",
}: {
  page: number;
  totalPages: number;
  paramName?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const generatePageLink = (page: number) => {
    const searchParamsCopy = new URLSearchParams(searchParams);
    searchParamsCopy.set(paramName, page.toString());
    return pathname + "?" + searchParamsCopy.toString();
  };

  const [typedInPage, setTypedInPage] = useState(page.toString());

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
          name={paramName}
          id="page"
          value={typedInPage}
          onChange={(e) => setTypedInPage(e.target.value)}
          min={1}
          max={totalPages}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const newPage = e.currentTarget.valueAsNumber;
              const newPageLink = generatePageLink(newPage);
              if (newPage >= 1 && newPage <= totalPages) {
                window.location.href = newPageLink;
              } else {
                e.preventDefault();
                alert(`Por favor, insira um número entre 1 e ${totalPages}.`);
              }
            }
          }}
        />
        <span> de {totalPages}</span>
        <Link
          href={generatePageLink(parseInt(typedInPage))}
          className={`button secondary ${style.button}`}
          aria-label="Ir para página"
          onClick={(e) => {
            if (
              parseInt(typedInPage) < 1 ||
              parseInt(typedInPage) > totalPages
            ) {
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
