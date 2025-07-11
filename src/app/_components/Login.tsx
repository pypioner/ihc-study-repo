"use client";

import { useRef, useState } from "react";
import style from "./login.module.css";
import { useOutsideClick } from "../_lib/outsideClickHandler";

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);
  useOutsideClick(popupRef, () => {
    if (popupVisible) {
      setPopupVisible(false);
    }
  });

  return loggedIn ? (
    <div className={style.loggedIn}>
      <button className={style.avatar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="currentColor"
          onClick={() => setPopupVisible(!popupVisible)}
        >
          <path d="M247.85-260.62q51-36.69 108.23-58.03Q413.31-340 480-340t123.92 21.35q57.23 21.34 108.23 58.03 39.62-41 63.73-96.84Q800-413.31 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 66.69 24.12 122.54 24.11 55.84 63.73 96.84ZM480-460q-50.54 0-85.27-34.73T360-580q0-50.54 34.73-85.27T480-700q50.54 0 85.27 34.73T600-580q0 50.54-34.73 85.27T480-460Zm0 340q-75.31 0-141-28.04t-114.31-76.65Q176.08-273.31 148.04-339 120-404.69 120-480t28.04-141q28.04-65.69 76.65-114.31 48.62-48.61 114.31-76.65Q404.69-840 480-840t141 28.04q65.69 28.04 114.31 76.65 48.61 48.62 76.65 114.31Q840-555.31 840-480t-28.04 141q-28.04 65.69-76.65 114.31-48.62 48.61-114.31 76.65Q555.31-120 480-120Z" />
        </svg>
      </button>
      <div className={style.popup} aria-hidden={!popupVisible} ref={popupRef}>
        <a href="/perfil/meu-nome">Meu perfil</a>
        <button
          onClick={() => {
            setLoggedIn(false);
            setPopupVisible(false);
          }}
        >
          Sair
        </button>
      </div>
    </div>
  ) : (
    <button
      className={`button ${style.login}`}
      onClick={() => setLoggedIn(true)}
    >
      Login
    </button>
  );
}
