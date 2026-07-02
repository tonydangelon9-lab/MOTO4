/* ============================================================
   MOTO4 LATIN CUP · Selector de idioma (ES / EN / PT)
   ------------------------------------------------------------
   - Un solo archivo compartido por todas las paginas.
   - Español es el idioma base (castellano). Lo que no este en el
     diccionario simplemente queda en español.
   - Para corregir una traduccion: buscar el texto y editar
     su "en" (ingles) o "pt" (portugues).
   ============================================================ */
(function(){
var D = {
/* ===== NAV / GENERAL ===== */
"Inicio":{en:"Home",pt:"Início"},
"Calendario":{en:"Calendar",pt:"Calendário"},
"Pilotos":{en:"Riders",pt:"Pilotos"},
"Ranking 2026":{en:"2026 Standings",pt:"Ranking 2026"},
"Postular":{en:"Apply",pt:"Inscreva-se"},
"Media":{en:"Media",pt:"Mídia"},
"Galería oficial de fotos del campeonato.":{en:"Official photo gallery of the championship.",pt:"Galeria oficial de fotos do campeonato."},
"Todos":{en:"All",pt:"Todos"},
"Generales":{en:"General",pt:"Gerais"},
"Cargando fotos…":{en:"Loading photos…",pt:"Carregando fotos…"},
"Aún no hay fotos en esta categoría.":{en:"No photos in this category yet.",pt:"Ainda não há fotos nesta categoria."},
"Próximamente: las fotos del campeonato.":{en:"Coming soon: championship photos.",pt:"Em breve: as fotos do campeonato."},
"Postular 2027":{en:"Apply 2027",pt:"Inscreva-se 2027"},
"Postular ahora":{en:"Apply now",pt:"Inscreva-se agora"},
"Volver al inicio":{en:"Back to home",pt:"Voltar ao início"},
"Español · English · Português":{en:"Español · English · Português",pt:"Español · English · Português"},

/* ===== INDEX ===== */
"El camino latino al":{en:"The Latin road to",pt:"O caminho latino para o"},
"El campeonato oficial FIM Latin America de la categoría Moto4. Jóvenes talentos, motos iguales, un solo sueño.":{en:"The official FIM Latin America championship of the Moto4 class. Young talents, equal bikes, one dream.",pt:"O campeonato oficial FIM Latin America da categoria Moto4. Jovens talentos, motos iguais, um só sonho."},
"El campeonato oficial FIM Latin America de la categoría Moto4: la base de la pirámide que lleva a los jóvenes talentos de Latinoamérica hacia el Mundial.":{en:"The official FIM Latin America Moto4 championship: the base of the pyramid taking Latin America's young talents to the World Championship.",pt:"O campeonato oficial FIM Latin America da categoria Moto4: a base da pirâmide que leva os jovens talentos da América Latina ao Mundial."},
"Las 6 fechas de la temporada 2026.":{en:"The 6 rounds of the 2026 season.",pt:"As 6 etapas da temporada 2026."},
"Los 16 talentos de la grilla.":{en:"The 16 talents on the grid.",pt:"Os 16 talentos do grid."},
"La clasificación general.":{en:"The overall standings.",pt:"A classificação geral."},
"Selection Program 2027.":{en:"Selection Program 2027.",pt:"Selection Program 2027."},

/* ===== CALENDARIO ===== */
"FIM Latin America · Temporada 2026":{en:"FIM Latin America · 2026 Season",pt:"FIM Latin America · Temporada 2026"},
"Seis fechas · 4 en Brasil y 2 en Argentina · Road to MotoGP.":{en:"Six rounds · 4 in Brazil and 2 in Argentina · Road to MotoGP.",pt:"Seis etapas · 4 no Brasil e 2 na Argentina · Road to MotoGP."},
"20–22 MAR · Apoyo MotoGP · 1 carrera":{en:"MAR 20–22 · MotoGP support · 1 race",pt:"20–22 MAR · Apoio MotoGP · 1 corrida"},
"10–12 ABR · 1000GP":{en:"APR 10–12 · 1000GP",pt:"10–12 ABR · 1000GP"},
"19–21 JUN · GP3":{en:"JUN 19–21 · GP3",pt:"19–21 JUN · GP3"},
"4–6 SEPT · GP3":{en:"SEP 4–6 · GP3",pt:"4–6 SET · GP3"},
"25–27 SEPT · 1000GP":{en:"SEP 25–27 · 1000GP",pt:"25–27 SET · 1000GP"},
"6–8 NOV · 1000GP":{en:"NOV 6–8 · 1000GP",pt:"6–8 NOV · 1000GP"},
"Brasil 🇧🇷":{en:"Brazil 🇧🇷",pt:"Brasil 🇧🇷"},
"Argentina 🇦🇷":{en:"Argentina 🇦🇷",pt:"Argentina 🇦🇷"},
"Por confirmar":{en:"To be confirmed",pt:"A confirmar"},

/* ===== PILOTOS ===== */
"Grilla 2026":{en:"2026 Grid",pt:"Grid 2026"},
"16 talentos de toda Latinoamérica rumbo al Mundial.":{en:"16 talents from all over Latin America heading to the World Championship.",pt:"16 talentos de toda a América Latina rumo ao Mundial."},
"14 años":{en:"14 years old",pt:"14 anos"},
"15 años":{en:"15 years old",pt:"15 anos"},
"16 años":{en:"16 years old",pt:"16 anos"},
"17 años":{en:"17 years old",pt:"17 anos"},
"18 años":{en:"18 years old",pt:"18 anos"},
"Estados Unidos":{en:"United States",pt:"Estados Unidos"},
"Brasil":{en:"Brazil",pt:"Brasil"},
"México":{en:"Mexico",pt:"México"},
"Palestina":{en:"Palestine",pt:"Palestina"},
"Nacimiento":{en:"Date of birth",pt:"Nascimento"},
"Altura":{en:"Height",pt:"Altura"},
"Peso":{en:"Weight",pt:"Peso"},
"Campeonatos":{en:"Championships",pt:"Campeonatos"},
"Palmarés":{en:"Achievements",pt:"Palmarés"},

/* ===== CAMPEONATO ===== */
"Clasificación general oficial rumbo al título.":{en:"Official overall standings on the road to the title.",pt:"Classificação geral oficial rumo ao título."},
"Clase Moto4 · Honda · Fuente oficial FIM Latin America · Se actualiza con la planilla del campeonato.":{en:"Moto4 class · Honda · Official FIM Latin America source · Updated from the championship sheet.",pt:"Categoria Moto4 · Honda · Fonte oficial FIM Latin America · Atualizado com a planilha do campeonato."},
"En vivo":{en:"Live",pt:"Ao vivo"},
"Transmisión en vivo":{en:"Live broadcast",pt:"Transmissão ao vivo"},
"Ver en YouTube":{en:"Watch on YouTube",pt:"Assistir no YouTube"},
"Tu tiempo en vivo":{en:"Live timing",pt:"Cronometragem ao vivo"},

/* ===== POSTULAR: PROGRAMA ===== */
"Tu lugar en el camino oficial al MotoGP™":{en:"Your place on the official road to MotoGP™",pt:"Seu lugar no caminho oficial para o MotoGP™"},
"La Mobil Moto4 Latin Cup no es un campeonato más: es la puerta de entrada oficial de Latinoamérica a la pirámide mundial del MotoGP™.":{en:"The Mobil Moto4 Latin Cup is not just another championship: it is Latin America's official gateway into the global MotoGP™ pyramid.",pt:"A Mobil Moto4 Latin Cup não é apenas mais um campeonato: é a porta de entrada oficial da América Latina para a pirâmide mundial do MotoGP™."},
"Creada dentro del programa":{en:"Created within the",pt:"Criada dentro do programa"},
"Road to MotoGP™":{en:"Road to MotoGP™ program",pt:"Road to MotoGP™"},
"—la estructura oficial de la FIM y Dorna Sports para el desarrollo de pilotos— y respaldada por":{en:"—the official FIM and Dorna Sports structure for rider development—and backed by",pt:"—a estrutura oficial da FIM e da Dorna Sports para o desenvolvimento de pilotos—e apoiada por"},
"Honda, Mobil y FIM Latin America":{en:"Honda, Mobil and FIM Latin America",pt:"Honda, Mobil e FIM Latin America"},
", la Moto4 Latin Cup forma parte de la nueva generación de categorías Moto4 que la FIM y Dorna lanzaron a nivel mundial en 2026. Lo que pasa aquí, se ve desde el paddock del Mundial.":{en:", the Moto4 Latin Cup is part of the new generation of Moto4 categories launched worldwide by the FIM and Dorna in 2026. What happens here is seen from the World Championship paddock.",pt:", a Moto4 Latin Cup faz parte da nova geração de categorias Moto4 que a FIM e a Dorna lançaram mundialmente em 2026. O que acontece aqui é visto do paddock do Mundial."},
"La moto: Honda NSF250R.":{en:"The bike: Honda NSF250R.",pt:"A moto: Honda NSF250R."},
"Todos compiten con la misma máquina de especificación Moto3 con la que Dorna forma campeones en sus copas de talento de todo el planeta, con neumáticos Pirelli de especificación única. Igualdad total de material: aquí gana el talento, no el presupuesto.":{en:"Everyone races the same Moto3-specification machine Dorna uses to develop champions in its talent cups around the world, on single-specification Pirelli tyres. Total equality of machinery: here talent wins, not budget.",pt:"Todos competem com a mesma máquina de especificação Moto3 com a qual a Dorna forma campeões em suas copas de talento pelo mundo, com pneus Pirelli de especificação única. Igualdade total de material: aqui vence o talento, não o orçamento."},
"Categoría OPEN — abierta al mundo.":{en:"OPEN category — open to the world.",pt:"Categoria OPEN — aberta ao mundo."},
"Las categorías de FIM Latin America son abiertas: puede participar un piloto de cualquier país. En la grilla 2026 ya corren pilotos de Estados Unidos, Palestina, Puerto Rico y toda Latinoamérica.":{en:"FIM Latin America categories are open: riders from any country can take part. The 2026 grid already features riders from the United States, Palestine, Puerto Rico and all of Latin America.",pt:"As categorias da FIM Latin America são abertas: pilotos de qualquer país podem participar. No grid de 2026 já correm pilotos dos Estados Unidos, Palestina, Porto Rico e de toda a América Latina."},
"El campeón":{en:"The champion",pt:"O campeão"},
"correrá con nuestro equipo en la":{en:"will race with our team in the",pt:"correrá com a nossa equipe na"},
"European Talent Cup (FIM JuniorGP)":{en:"European Talent Cup (FIM JuniorGP)",pt:"European Talent Cup (FIM JuniorGP)"},
"con el":{en:"with",pt:"com"},
"100% de los gastos del equipo cubiertos":{en:"100% of team costs covered",pt:"100% dos custos da equipe cobertos"},
"Los tres primeros":{en:"The top three",pt:"Os três primeiros"},
"acceden directo al":{en:"go straight to the",pt:"vão direto para o"},
"Selection Event de la Red Bull MotoGP Rookies Cup":{en:"Red Bull MotoGP Rookies Cup Selection Event",pt:"Selection Event da Red Bull MotoGP Rookies Cup"},
"Todos los seleccionados":{en:"All selected riders",pt:"Todos os selecionados"},
"entran a la":{en:"enter the",pt:"entram na"},
"Selectiva de noviembre 2026":{en:"November 2026 Selection",pt:"Seletiva de novembro de 2026"},
", que define la grilla 2027.":{en:", which defines the 2027 grid.",pt:", que define o grid de 2027."},
"Edad: 14 a 19 años. Una moto igual para todos. Un camino directo y oficial.":{en:"Age: 14 to 19. The same bike for everyone. A direct, official path.",pt:"Idade: 14 a 19 anos. Uma moto igual para todos. Um caminho direto e oficial."},
"El Mundial ahora mira hacia aquí.":{en:"The World Championship is now looking this way.",pt:"O Mundial agora olha para cá."},

/* ===== POSTULAR: GATE + FORM ===== */
"Las postulaciones abren pronto":{en:"Applications open soon",pt:"As inscrições abrem em breve"},
"La preinscripción al Selection Program 2027 abre el":{en:"Pre-registration for the Selection Program 2027 opens on",pt:"A pré-inscrição para o Selection Program 2027 abre em"},
"15 de agosto de 2026":{en:"August 15, 2026",pt:"15 de agosto de 2026"},
". Guarda este enlace y vuelve en esa fecha para postularte.":{en:". Save this link and come back on that date to apply.",pt:". Guarde este link e volte nessa data para se inscrever."},
"Días":{en:"Days",pt:"Dias"},
"Horas":{en:"Hours",pt:"Horas"},
"Min":{en:"Min",pt:"Min"},
"Seg":{en:"Sec",pt:"Seg"},
"Postula al sueño":{en:"Apply for the dream",pt:"Inscreva-se no sonho"},
"Completa tu postulación. Pilotos de 14 a 19 años de toda Latinoamérica. El camino latino al MotoGP empieza aquí.":{en:"Complete your application. Riders aged 14 to 19 from all over Latin America. The Latin road to MotoGP starts here.",pt:"Complete a sua inscrição. Pilotos de 14 a 19 anos de toda a América Latina. O caminho latino para o MotoGP começa aqui."},
"Conoce el programa completo →":{en:"Learn about the full program →",pt:"Conheça o programa completo →"},
"Paso 1":{en:"Step 1",pt:"Passo 1"},
"Paso 2":{en:"Step 2",pt:"Passo 2"},
"Paso 3":{en:"Step 3",pt:"Passo 3"},
"Paso 4":{en:"Step 4",pt:"Passo 4"},
"Paso 5":{en:"Step 5",pt:"Passo 5"},
"Datos del piloto":{en:"Rider details",pt:"Dados do piloto"},
"Nombre completo":{en:"Full name",pt:"Nome completo"},
"Fecha de nacimiento":{en:"Date of birth",pt:"Data de nascimento"},
"Nacionalidad":{en:"Nationality",pt:"Nacionalidade"},
"País de residencia":{en:"Country of residence",pt:"País de residência"},
"Ciudad":{en:"City",pt:"Cidade"},
"Altura (cm)":{en:"Height (cm)",pt:"Altura (cm)"},
"Peso (kg)":{en:"Weight (kg)",pt:"Peso (kg)"},
"Contacto":{en:"Contact",pt:"Contato"},
"Email":{en:"Email",pt:"E-mail"},
"WhatsApp":{en:"WhatsApp",pt:"WhatsApp"},
"Instagram del piloto":{en:"Rider's Instagram",pt:"Instagram do piloto"},
"Datos del tutor (si eres menor)":{en:"Guardian details (if you are a minor)",pt:"Dados do responsável (se for menor de idade)"},
"Nombre del padre/madre/tutor":{en:"Parent/guardian name",pt:"Nome do pai/mãe/responsável"},
"Contacto del tutor":{en:"Guardian contact",pt:"Contato do responsável"},
"Tu experiencia":{en:"Your experience",pt:"Sua experiência"},
"Experiencia en moto":{en:"Riding experience",pt:"Experiência com moto"},
"Disciplinas / categorías donde corriste":{en:"Disciplines / categories you have raced in",pt:"Disciplinas / categorias em que você correu"},
"Años de experiencia en moto":{en:"Years of riding experience",pt:"Anos de experiência com moto"},
"Principales resultados":{en:"Main results",pt:"Principais resultados"},
"Tu motivación":{en:"Your motivation",pt:"Sua motivação"},
"¿Por qué quieres ser parte del Moto4 Latin Cup?":{en:"Why do you want to be part of the Moto4 Latin Cup?",pt:"Por que você quer fazer parte da Moto4 Latin Cup?"},
"Confirmo que los datos son verdaderos y, si soy menor, cuento con la autorización de mi tutor.":{en:"I confirm that the information is true and, if I am a minor, I have my guardian's authorization.",pt:"Confirmo que os dados são verdadeiros e, se for menor de idade, tenho a autorização do meu responsável."},
"Enviar postulación":{en:"Submit application",pt:"Enviar inscrição"},
"La inscripción abre el 15 de agosto":{en:"Applications open August 15",pt:"As inscrições abrem em 15 de agosto"},
"¡Postulación enviada!":{en:"Application submitted!",pt:"Inscrição enviada!"},
"Estamos procesando tu información. Vamos a revisar tu postulación y te contactaremos por email para continuar con el proceso. ¡Mucha suerte!":{en:"We are processing your information. We will review your application and contact you by email to continue the process. Good luck!",pt:"Estamos processando suas informações. Vamos analisar sua inscrição e entraremos em contato por e-mail para continuar o processo. Boa sorte!"},
/* placeholders */
"Ej: 165":{en:"E.g.: 165",pt:"Ex.: 165"},
"Ej: 55":{en:"E.g.: 55",pt:"Ex.: 55"},
"Ej: MiniGP, motocross, velocidad, karting":{en:"E.g.: MiniGP, motocross, road racing, karting",pt:"Ex.: MiniGP, motocross, velocidade, kart"},
"Campeonato, categoría, posición, año, circuito...":{en:"Championship, category, position, year, circuit...",pt:"Campeonato, categoria, posição, ano, circuito..."},
"@usuario":{en:"@username",pt:"@usuario"},

/* ===== SELECTION 2027 (landing) ===== */
"Postulaciones abiertas · Temporada 2027":{en:"Applications open · 2027 Season",pt:"Inscrições abertas · Temporada 2027"},
"Moto4 Latin Cup abre el Selection Program 2027. Si sueñas con ser piloto profesional, esta es tu puerta de entrada.":{en:"The Moto4 Latin Cup opens the Selection Program 2027. If you dream of becoming a professional rider, this is your gateway.",pt:"A Moto4 Latin Cup abre o Selection Program 2027. Se você sonha em ser piloto profissional, esta é a sua porta de entrada."},
"Pilotos de 14 a 19 años · Toda Latinoamérica":{en:"Riders aged 14 to 19 · All of Latin America",pt:"Pilotos de 14 a 19 anos · Toda a América Latina"},
"14 a 19 años":{en:"14 to 19 years old",pt:"14 a 19 anos"},
"Abierto a pilotos dentro de ese rango de edad para la temporada 2027.":{en:"Open to riders within that age range for the 2027 season.",pt:"Aberto a pilotos dentro dessa faixa etária para a temporada 2027."},
"Toda Latinoamérica":{en:"All of Latin America",pt:"Toda a América Latina"},
"De cualquier país de la región. El camino latino empieza en casa.":{en:"From any country in the region. The Latin road starts at home.",pt:"De qualquer país da região. O caminho latino começa em casa."},
"Motos iguales, reglamento internacional, y una vidriera real ante el paddock del motociclismo.":{en:"Equal bikes, international regulations, and real visibility before the motorcycling paddock.",pt:"Motos iguais, regulamento internacional e uma vitrine real diante do paddock do motociclismo."},
"Un proceso de selección con estándar internacional, inspirado en la Red Bull MotoGP Rookies Cup y el Road to MotoGP.":{en:"A selection process with international standards, inspired by the Red Bull MotoGP Rookies Cup and the Road to MotoGP.",pt:"Um processo de seleção com padrão internacional, inspirado na Red Bull MotoGP Rookies Cup e no Road to MotoGP."},
"El proceso,":{en:"The process,",pt:"O processo,"},
"paso a paso":{en:"step by step",pt:"passo a passo"},
"Postulas online":{en:"You apply online",pt:"Você se inscreve online"},
"Completas el formulario y cargas tus documentos y videos.":{en:"You complete the form and upload your documents and videos.",pt:"Você preenche o formulário e envia seus documentos e vídeos."},
"Evaluación digital":{en:"Digital evaluation",pt:"Avaliação digital"},
"Tu perfil recibe un puntaje según edad, experiencia, resultados y nivel.":{en:"Your profile is scored based on age, experience, results and level.",pt:"Seu perfil recebe uma pontuação conforme idade, experiência, resultados e nível."},
"Revisión del panel":{en:"Panel review",pt:"Revisão do painel"},
"Un panel de expertos analiza a los mejores candidatos.":{en:"A panel of experts reviews the best candidates.",pt:"Um painel de especialistas analisa os melhores candidatos."},
"Entrevista":{en:"Interview",pt:"Entrevista"},
"Conversamos contigo para conocerte mejor.":{en:"We talk with you to get to know you better.",pt:"Conversamos com você para conhecê-lo melhor."},
"Evaluación presencial":{en:"In-person evaluation",pt:"Avaliação presencial"},
"Demuestras tu nivel dentro y fuera de la moto.":{en:"You show your level on and off the bike.",pt:"Você demonstra seu nível dentro e fora da moto."},
"Selección final 2027":{en:"Final selection 2027",pt:"Seleção final 2027"},
"Se define la grilla de pilotos de la temporada.":{en:"The season's rider grid is defined.",pt:"O grid de pilotos da temporada é definido."},
"Fechas importantes":{en:"Key dates",pt:"Datas importantes"},
"Agenda del programa. Confirma las fechas finales antes de difundir.":{en:"Program schedule. Confirm final dates before publishing.",pt:"Agenda do programa. Confirme as datas finais antes de divulgar."},
"Apertura de postulaciones":{en:"Applications open",pt:"Abertura das inscrições"},
"Cierre de postulaciones":{en:"Applications close",pt:"Encerramento das inscrições"},
"Anuncio de preseleccionados":{en:"Shortlist announcement",pt:"Anúncio dos pré-selecionados"},
"Invitación al Selection Event":{en:"Selection Event invitation",pt:"Convite para o Selection Event"},
"Anuncio de seleccionados 2027":{en:"2027 selected riders announcement",pt:"Anúncio dos selecionados 2027"},
"Los seleccionados son invitados al evento presencial.":{en:"Selected riders are invited to the in-person event.",pt:"Os selecionados são convidados para o evento presencial."},
"Requisitos":{en:"Requirements",pt:"Requisitos"},
"Preguntas frecuentes":{en:"Frequently asked questions",pt:"Perguntas frequentes"},
"¿Cuándo y dónde es el Selection Event?":{en:"When and where is the Selection Event?",pt:"Quando e onde é o Selection Event?"},
"La fecha y sede se comunican a los pilotos invitados por email. Sigue el proceso por ese medio.":{en:"The date and venue are communicated to invited riders by email. Follow the process through that channel.",pt:"A data e o local são comunicados aos pilotos convidados por e-mail. Acompanhe o processo por esse meio."},
"¿En qué idioma postulo?":{en:"In which language do I apply?",pt:"Em que idioma me inscrevo?"},
"Puedes postular en español; la página también está disponible en inglés y portugués.":{en:"You can apply in Spanish; the page is also available in English and Portuguese.",pt:"Você pode se inscrever em espanhol; a página também está disponível em inglês e português."},
"¿Puedo postular si nunca corrí en circuito?":{en:"Can I apply if I have never raced on a circuit?",pt:"Posso me inscrever se nunca corri em circuito?"},
"Sí. Valoramos la experiencia de alto rendimiento en moto en general: MiniGP, motocross, dirt track, karting o minimotos. No es obligatorio venir de road racing.":{en:"Yes. We value high-performance riding experience in general: MiniGP, motocross, dirt track, karting or minibikes. A road-racing background is not required.",pt:"Sim. Valorizamos a experiência de alto rendimento com moto em geral: MiniGP, motocross, dirt track, kart ou minimotos. Não é obrigatório vir do road racing."},
"¿Tiene costo postular?":{en:"Is there a cost to apply?",pt:"A inscrição tem custo?"},
"La postulación online al Selection Program no tiene costo. Los detalles de la temporada se informan a los seleccionados.":{en:"Applying online to the Selection Program is free of charge. Season details are shared with selected riders.",pt:"A inscrição online no Selection Program é gratuita. Os detalhes da temporada são informados aos selecionados."},
"Soy menor de edad, ¿qué necesito?":{en:"I am a minor — what do I need?",pt:"Sou menor de idade, o que preciso?"},
"Necesitas los datos y la autorización de tu padre, madre o tutor, además del documento correspondiente. Todo se carga en el formulario.":{en:"You need your parent's or guardian's details and authorization, plus the corresponding ID document. Everything is uploaded in the form.",pt:"Você precisa dos dados e da autorização do pai, mãe ou responsável, além do documento correspondente. Tudo é enviado no formulário."},
"Pilotos jóvenes de toda Latinoamérica. No es obligatorio venir de road racing: buscamos talento y mentalidad.":{en:"Young riders from all over Latin America. A road-racing background is not required: we look for talent and mindset.",pt:"Jovens pilotos de toda a América Latina. Não é obrigatório vir do road racing: buscamos talento e mentalidade."},
"Velocidad, MiniGP, motocross, dirt track, karting o minimotos.":{en:"Road racing, MiniGP, motocross, dirt track, karting or minibikes.",pt:"Velocidade, MiniGP, motocross, dirt track, kart ou minimotos."},
"¿Listo para":{en:"Ready to",pt:"Pronto para"},
"empezar?":{en:"start?",pt:"começar?"},
"¿Quién puede":{en:"Who can",pt:"Quem pode"},
"postular?":{en:"apply?",pt:"se inscrever?"},
"¿Qué es":{en:"What is",pt:"O que é"},
"Moto4 Latin Cup?":{en:"the Moto4 Latin Cup?",pt:"a Moto4 Latin Cup?"},
"Una postulación completa y bien presentada tiene muchas más chances. Prepara esto antes de empezar:":{en:"A complete, well-presented application has much better chances. Prepare this before you start:",pt:"Uma inscrição completa e bem apresentada tem muito mais chances. Prepare isto antes de começar:"}
};

/* ===== MOTOR ===== */
var LANGS=[["es","Español"],["en","English"],["pt","Português"]];
var cur = "es";
try{ cur = localStorage.getItem("m4lang") || "es"; }catch(e){}

function walk(root, fn){
  var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false), n;
  while((n = w.nextNode())){
    var p = n.parentNode && n.parentNode.nodeName;
    if(p==="SCRIPT"||p==="STYLE") continue;
    fn(n);
  }
}
function apply(root){
  root = root || document.body;
  walk(root, function(n){
    if(n.__es===undefined){ var t=n.nodeValue; if(t && t.trim().length>1) n.__es=t; else return; }
    var es = n.__es, key = es.trim();
    if(cur==="es"){ n.nodeValue = es; return; }
    var e = D[key];
    if(e && e[cur]){ n.nodeValue = es.replace(key, e[cur]); }
    else { n.nodeValue = es; }
  });
  var phs = root.querySelectorAll ? root.querySelectorAll("[placeholder]") : [];
  phs.forEach(function(el){
    if(el.__esph===undefined) el.__esph = el.getAttribute("placeholder");
    var e = D[el.__esph];
    el.setAttribute("placeholder", (cur!=="es" && e && e[cur]) ? e[cur] : el.__esph);
  });
}
window.m4Apply = apply;

/* ===== SELECTOR (botón flotante arriba a la derecha) ===== */
function ui(){
  var css = document.createElement("style");
  css.textContent = ".m4lang{position:fixed;top:88px;right:12px;z-index:300;font-family:inherit}"+
    ".m4lang button{background:rgba(10,4,16,.88);border:1px solid rgba(214,61,252,.5);color:#f2eaf7;border-radius:20px;padding:7px 14px;font-size:13px;cursor:pointer;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}"+
    ".m4lang .m4menu{display:none;position:absolute;right:0;top:40px;background:#160820;border:1px solid rgba(214,61,252,.5);border-radius:12px;overflow:hidden;min-width:130px;box-shadow:0 12px 32px rgba(0,0,0,.5)}"+
    ".m4lang.open .m4menu{display:block}"+
    ".m4lang .m4menu div{padding:10px 16px;font-size:14px;color:#e9d8ef;cursor:pointer}"+
    ".m4lang .m4menu div:hover{background:#2a0f38}"+
    ".m4lang .m4menu div.act{color:#E37BFD;font-weight:700}";
  document.head.appendChild(css);
  var box = document.createElement("div"); box.className="m4lang";
  var btn = document.createElement("button");
  var menu = document.createElement("div"); menu.className="m4menu";
  function label(){ var l=LANGS.filter(function(x){return x[0]===cur;})[0]; btn.textContent = "\uD83C\uDF10 " + (l?l[1]:"Español") + " \u25BE"; }
  LANGS.forEach(function(L){
    var it = document.createElement("div"); it.textContent = L[1];
    if(L[0]===cur) it.className="act";
    it.addEventListener("click", function(){
      cur = L[0];
      try{ localStorage.setItem("m4lang", cur); }catch(e){}
      menu.querySelectorAll("div").forEach(function(d){d.className="";});
      it.className="act"; label(); box.classList.remove("open");
      apply();
    });
    menu.appendChild(it);
  });
  btn.addEventListener("click", function(e){ e.stopPropagation(); box.classList.toggle("open"); });
  document.addEventListener("click", function(){ box.classList.remove("open"); });
  label();
  box.appendChild(btn); box.appendChild(menu);
  document.body.appendChild(box);
}
if(document.readyState==="loading"){ document.addEventListener("DOMContentLoaded", function(){ ui(); if(cur!=="es") apply(); }); }
else { ui(); if(cur!=="es") apply(); }
})();
