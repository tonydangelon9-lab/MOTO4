/* Panel de datos · bloques adicionales (aditivo). Si algo falla, el panel original sigue igual. */
(function(){
  function lang(){
    try{ var q=(location.search.match(/[?&]lang=(es|en|pt)/)||[])[1]; if(q) return q; }catch(e){}
    try{ var s=localStorage.getItem("m4lang"); if(s==="en"||s==="pt"||s==="es") return s; }catch(e){}
    return "es";
  }
  var L=lang();
  function T(es,en,pt){ return L==="en"?en:(L==="pt"?pt:es); }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function n(x){ if(x==null||!isFinite(x)) return "—"; return String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, L==="en"?",":"."); }
  function sec(html){ var s=document.createElement("section"); s.style.paddingTop="0"; s.innerHTML='<div class="wrap">'+html+'</div>'; return s; }
  function after(ref,el){ ref.parentNode.insertBefore(el,ref.nextSibling); }
  function run(){
    try{
      /* 1) Prensa espontánea + 2) Visitas web por carrera, tras el bloque de visitas a la web */
      var web=document.getElementById("webvis");
      var anchor=web&&web.closest("section");
      if(anchor){
        var pr='<h2 class="msec">'+T("Cobertura en medios (PR)","Media coverage (PR)","Cobertura na mídia (PR)")+'</h2>'+
          '<div class="kgrid">'+
          '<div class="kcard"><div class="lbl">'+T("Publicaciones","Publications","Publicações")+'</div><div class="val">80+</div><div class="sub">'+T("mínimo verificado","verified minimum","mínimo verificado")+'</div></div>'+
          '<div class="kcard"><div class="lbl">'+T("Medios","Outlets","Veículos")+'</div><div class="val">42</div><div class="sub">'+T("medios distintos","distinct outlets","veículos distintos")+'</div></div>'+
          '<div class="kcard"><div class="lbl">'+T("Países","Countries","Países")+'</div><div class="val">6</div><div class="sub">BR · AR · PY · PT · US · FR</div></div>'+
          '</div>'+
          '<div class="metod">'+T(
            "Corte: 5-oct-2026 (próxima actualización al cierre de la siguiente fecha). Fuente: monitoreo propio de medios durante la temporada 2026. Son cifras mínimas verificadas, no totales: puede haber publicaciones sin detectar. «Medio» es un sitio de prensa, portal o diario con nota publicada sobre la copa; no incluye redes sociales. No incluye alcance ni equivalente de valor publicitario (no disponibles).",
            "Cut-off: 5 Oct 2026 (next update at the close of the next race). Source: our own media monitoring during the 2026 season. These are verified minimums, not totals: some publications may be undetected. An \"outlet\" is a news site, portal or newspaper with a published article on the cup; social networks are not included. Reach and advertising value equivalency (AVE) are not included (not available).",
            "Corte: 5-out-2026 (próxima atualização no fechamento da próxima etapa). Fonte: monitoramento próprio de mídia durante a temporada 2026. São números mínimos verificados, não totais: pode haver publicações não detectadas. «Veículo» é um site de notícias, portal ou jornal com matéria publicada sobre a copa; redes sociais não entram. Não inclui alcance nem equivalência de valor publicitário (indisponíveis).")+'</div>';
        var webr='<h2 class="msec">'+T("Visitas web por fin de semana de carrera","Website visits per race weekend","Visitas ao site por fim de semana de corrida")+'</h2>'+
          '<div class="panelbox tscroll"><table>'+
          '<tr><th>'+T("Evento","Event","Evento")+'</th><th>'+T("Fechas 2026","2026 dates","Datas 2026")+'</th><th>'+T("Visitas registradas","Recorded visits","Visitas registradas")+'</th><th>'+T("Desde Brasil","From Brazil","Do Brasil")+'</th><th>'+T("Desde Argentina","From Argentina","Da Argentina")+'</th><th>'+T("Nota","Note","Nota")+'</th></tr>'+
          '<tr><td>Santa Cruz do Sul (BRA)</td><td>'+T("25–28 sep","25–28 Sep","25–28 set")+'</td><td>'+n(634)+'</td><td>'+n(468)+'</td><td>'+n(21)+'</td><td>'+T("Singapur no figura entre los países principales.","Singapore is not among the top countries.","Singapura não figura entre os principais países.")+'</td></tr>'+
          '<tr><td>San Juan · Villicum (ARG)</td><td>'+T("4–7 sep","4–7 Sep","4–7 set")+'</td><td>'+n(1163)+'</td><td>'+n(412)+'</td><td>'+n(103)+'</td><td>'+T("Incluye 184 visitas de Singapur (probable tráfico automatizado); sin Singapur: 979.","Includes 184 visits from Singapore (likely automated traffic); without Singapore: 979.","Inclui 184 visitas de Singapura (provável tráfego automatizado); sem Singapura: 979.")+'</td></tr>'+
          '<tr><td>San Nicolás (ARG)</td><td>'+T("19–22 jun","19–22 Jun","19–22 jun")+'</td><td>—</td><td>—</td><td>—</td><td>'+T("Anterior al inicio de la medición (18-jul-2026).","Before measurement started (18 Jul 2026).","Anterior ao início da medição (18-jul-2026).")+'</td></tr>'+
          '</table></div>'+
          '<div class="metod">'+T(
            "Visitas al sitio completo medidas con GoatCounter (desde el 18-jul-2026), en la ventana de cada fin de semana de carrera (de viernes a lunes). Incluyen todas las páginas, también la postulación al Selection Program 2027, y pueden recibir tráfico de campañas pagadas; no todas las visitas se deben a la carrera y no hay una línea base de semanas sin carrera. Una visita no es una persona única; la medición no filtra tráfico automatizado salvo lo indicado.",
            "Visits to the whole site measured with GoatCounter (since 18 Jul 2026), within each race weekend window (Friday to Monday). They include every page, also the Selection Program 2027 application, and may receive traffic from paid campaigns; not all visits are caused by the race and there is no baseline from non-race weeks. A visit is not a unique person; the measurement does not filter automated traffic except where noted.",
            "Visitas ao site como um todo medidas com GoatCounter (desde 18-jul-2026), na janela de cada fim de semana de corrida (de sexta a segunda). Incluem todas as páginas, também a inscrição no Selection Program 2027, e podem receber tráfego de campanhas pagas; nem todas as visitas se devem à corrida e não há linha de base de semanas sem corrida. Uma visita não é uma pessoa única; a medição não filtra tráfego automatizado, exceto onde indicado.")+'</div>';
        var s1=sec(pr), s2=sec(webr);
        after(anchor,s1); after(s1,s2);
      }
      /* 3) Separar Moto4 y GP3 en el acumulado */
      var nota=document.getElementById("acumnota");
      var A=(typeof ACUMULADO!=="undefined")?ACUMULADO:null;
      if(nota&&A&&A.m4_fb&&A.m4_ig&&A.gp3_fb&&A.gp3_ig){
        var m4=(A.m4_fb.visualizaciones||0)+(A.m4_ig.visualizaciones||0);
        var gp=(A.gp3_fb.visualizaciones||0)+(A.gp3_ig.visualizaciones||0);
        var d=document.createElement("div"); d.className="metod";
        d.innerHTML="<b>"+T("Cuántas son de Moto4:","How many are Moto4:","Quantas são de Moto4:")+"</b> "+
          T("Facebook + Instagram de Moto4: "+n(m4)+" visualizaciones. Páginas de GP3 Sports (Facebook + Instagram): "+n(gp)+"; difunden también contenido de CAV y CCV, no solo de la copa. Total del titular: "+n(m4+gp)+" (≈ "+(Math.round((m4+gp)/1e5)/10).toString().replace(".",",")+" M). Las cifras incluyen distribución orgánica y pagada, y las visualizaciones no son personas únicas.",
            "Moto4 Facebook + Instagram: "+n(m4)+" views. GP3 Sports pages (Facebook + Instagram): "+n(gp)+"; they also promote CAV and CCV content, not only the cup. Headline total: "+n(m4+gp)+" (≈ "+(Math.round((m4+gp)/1e5)/10).toString()+" M). Figures include organic and paid distribution, and views are not unique people.",
            "Facebook + Instagram de Moto4: "+n(m4)+" visualizações. Páginas da GP3 Sports (Facebook + Instagram): "+n(gp)+"; também divulgam conteúdo de CAV e CCV, não só da copa. Total do destaque: "+n(m4+gp)+" (≈ "+(Math.round((m4+gp)/1e5)/10).toString().replace(".",",")+" M). Os números incluem distribuição orgânica e paga, e as visualizações não são pessoas únicas.")+
          "<br><b>"+T("Corte:","Cut-off:","Corte:")+"</b> "+
          T("este acumulado de temporada se actualiza al cierre de cada fecha (7 días después de la carrera), no a diario.",
            "this season-to-date block is updated at each race's close (7 days after the race), not daily.",
            "este acumulado da temporada é atualizado no fechamento de cada etapa (7 dias após a corrida), não diariamente.");
        after(nota,d);
      }
      /* 4) Hueco de la serie de seguidores */
      var ms=document.querySelectorAll(".metod");
      for(var i=0;i<ms.length;i++){
        if(ms[i].textContent.indexOf("Serie hist")>-1||ms[i].textContent.indexOf("Historical series")>-1||ms[i].textContent.indexOf("Série hist")>-1){
          var g=document.createElement("div"); g.className="metod";
          g.textContent=T("Sin medición de seguidores del 3 al 16 de septiembre de 2026 (incluye el fin de semana de San Juan): no se estimaron ni se rellenaron esos días.",
            "No follower measurement from 3 to 16 September 2026 (includes the San Juan weekend): those days were not estimated or filled in.",
            "Sem medição de seguidores de 3 a 16 de setembro de 2026 (inclui o fim de semana de San Juan): esses dias não foram estimados nem preenchidos.");
          after(ms[i],g); break;
        }
      }
    }catch(e){ if(window.console) console.warn("exposicion-extra",e); }
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",run); else run();
})();
