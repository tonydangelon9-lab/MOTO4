/* ============================================================
   PANEL DE DATOS — HISTÓRICO DE MÉTRICAS (metrics-data.js)
   ------------------------------------------------------------
   Cada entrada del array METRICS es una "foto" (snapshot) de los
   números en una fecha. REGLAS:
   1) Agregar SIEMPRE al final, nunca borrar entradas anteriores.
   2) Una entrada por día como máximo.
   3) Si un dato no se pudo obtener ese día, poner null.
   Fuentes: perfiles públicos de Instagram/YouTube y páginas de
   Facebook administradas (leídas vía navegador o API).
   ============================================================ */
var METRICS = [
{ fecha: "2026-07-18",
  ig_moto4latin:   { seguidores: 11100, publicaciones: 449 },
  ig_gp3sports:    { seguidores: 29800, publicaciones: 1942 },
  yt_gp3tv:        { suscriptores: 2540, videos: 127 },
  fb_gp3sports:    { seguidores: 17000 },
  fb_moto4:        { seguidores: 4400 },
  fb_gp3sports2:   { seguidores: 6000 },
  fb_motovelatam:  { seguidores: 8800 },
  fb_tonydangelo:  { seguidores: 6900 },
  fb_gp3motorcycle:{ seguidores: 1500 },
  fb_rubus:        { seguidores: 5100 },
  fb_monomarca:    { seguidores: 505 },
  notas: "Línea base del panel. Valores tal como los muestran las plataformas (redondeados)."
}
];
