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
/* ===== ACUMULADO TEMPORADA 2026 =====
   Meta (FB+IG): ventana de 90 días exportada de Meta Business Suite (18 abr - 16 jul 2026).
   YouTube: YouTube Studio, 1 mar - 16 jul 2026. No editar hacia atrás; se actualiza por corte. */
var ACUMULADO = {
  corte: "2026-07-16",
  periodo_meta: "18 abr – 16 jul 2026 (90 días)",
  periodo_yt: "1 mar – 16 jul 2026",
  gp3_fb:  { visualizaciones: 2600000, espectadores: 1200000, interacciones: 5600, clics: 59100, visitas: 5100, seg_nuevos: 191 },
  gp3_ig:  { visualizaciones: 1111448, alcance: 616600, interacciones: 18800, clics: 20500, visitas: 12100, seg_nuevos: 1800 },
  m4_fb:   { visualizaciones: 63800, espectadores: 34400, interacciones: 1500, clics: 0, visitas: 1100, seg_nuevos: 64 },
  m4_ig:   { visualizaciones: 221175, alcance: 42500, interacciones: 5300, clics: 10, visitas: 3300, seg_nuevos: 437 },
  youtube: { vistas: 23640, horas: 3900, seg_nuevos: 324,
             top: [ ["2026 (lanzamiento, 5 abr)", 10564],
                    ["Transmisión San Nicolás (21 jun)", 4912],
                    ["Transmisión Toay · La Pampa (24 may)", 4079],
                    ["2ª Fecha Binacional Huachalalume (31 may)", 1974] ] },
  notas: "Cifras tal como las reportan Meta Business Suite y YouTube Studio. Los picos diarios coinciden con los fines de semana de carrera (hasta 237.591 visualizaciones en un día, dom 17 may; 30.074 en la página Moto4 el domingo 21 jun, San Nicolás). Alcance verificado como ORGÁNICO: el Administrador de Anuncios no registra pauta pagada en 2026 (última campaña pagada: 2018)."
};

/* ===== POR FIN DE SEMANA DE CARRERA (ventana Meta 90 días) =====
   Sumas de visualizaciones de Facebook por página en la ventana del evento,
   calculadas de la serie diaria de Meta Business Suite. YouTube = vistas del
   directo en el canal GP3 Sports TV. */
var EVENTOS = [
  { nombre: "San Nicolás (ARG)", marca: "Moto4 + GP3", fechas: "19–22 jun",
    fb_moto4: 39110, fb_gp3: 2840, yt_stream: 4912, nota: "pico FB Moto4: 30.074 el domingo 21" },
  { nombre: "Huachalalume (CHI)", marca: "GP3 binacional", fechas: "29 may – 1 jun",
    fb_moto4: 254, fb_gp3: 91793, yt_stream: 1974, nota: "2ª fecha binacional" },
  { nombre: "Toay, La Pampa (ARG)", marca: "CAV / GP3", fechas: "22–25 may",
    fb_moto4: 10990, fb_gp3: 275599, yt_stream: 4079, nota: "" }
];

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
