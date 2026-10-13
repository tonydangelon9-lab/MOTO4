/* Público por fecha de carrera 2026 — cifras del organizador (Antonio D'Angelo), 13-oct-2026.
   Archivo aparte para que el Motor diario (que reescribe metrics-data.js) no lo pise.
   entradas = entradas vendidas (aprox.); pilotos_staff = promedio estimado fijo; null = dato no disponible. */
var PUBLICO = {
  "San Nicolás (ARG)":            { entradas: 550, pilotos_staff: 500 },
  "Concordia · Entre Ríos (ARG)": { entradas: 760, pilotos_staff: 500, nota: "Fecha CAV/GP3 sin Moto4." },
  "San Juan · Villicum (ARG)":    { entradas: 850, pilotos_staff: 500 },
  "Termas de Río Hondo 2 (ARG)":  { entradas: 144, pilotos_staff: 500, nota: "Además ≈800 personas estimadas en la gradería general gratuita (estimación del organizador, sin registro)." }
};
/* Fecha cerrada hace menos de 7 días: sus métricas de Facebook y YouTube se completan al cierre. */
var EVENTOS_EXTRA = [
  { nombre: "Termas de Río Hondo 2 (ARG)", marca: "CAV / GP3", fechas: "9–11 oct",
    fb_moto4: null, fb_gp3: null, yt_stream: null,
    nota: "6ª fecha del CAV (Moto4 no corrió). Facebook y YouTube: dato no disponible hasta el cierre a 7 días." }
];
