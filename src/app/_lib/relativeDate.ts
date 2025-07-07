/*
 * JavaScript Pretty Date
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed under the MIT and GPL licenses.
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
export function relativeDate(time: Date): string {
  var date = new Date(
      time.toISOString().replace(/-/g, "/").replace(/[TZ]/g, " ")
    ),
    diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);

  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) return "agora";

  return (
    (day_diff == 0 &&
      ((diff < 60 && "agora") ||
        (diff < 120 && "há 1 minuto") ||
        (diff < 3600 && "há " + Math.floor(diff / 60) + " minutos") ||
        (diff < 7200 && "há 1 hora") ||
        (diff < 86400 && "há " + Math.floor(diff / 3600) + " horas"))) ||
    (day_diff == 1 && "ontem") ||
    (day_diff < 7 && "há " + day_diff + " dias") ||
    (day_diff == 7 && "há 1 semana") ||
    (day_diff < 31 && "há " + Math.ceil(day_diff / 7) + " semanas") ||
    (day_diff == 30 && "há 1 mês") ||
    (day_diff < 365 && "há " + Math.ceil(day_diff / 30) + " meses") ||
    (day_diff == 365 && "há 1 ano") ||
    (day_diff >= 365 && "há " + Math.floor(day_diff / 365) + " anos") ||
    "agora"
  );
}
