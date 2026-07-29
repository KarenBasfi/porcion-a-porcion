const GROUP_META = {
  Cereales: ["#F2A93B", "Cereales y derivados"],
  Verduras: ["#66A95B", "Verduras"],
  Frutas: ["#E97455", "Frutas"],
  Lácteos: ["#4C93A5", "Lácteos"],
  Proteínas: ["#9B6BAD", "Carnes, pescados y huevos"],
  Leguminosas: ["#B97543", "Leguminosas"],
  Grasas: ["#D39A32", "Aceites y grasas"],
};

const POOL = [
  ["Cereales","🍞","Pan corriente","¿Qué cantidad representa aproximadamente una porción de intercambio?",["½ unidad (50 g)","1 unidad (100 g)","2 unidades (200 g)"],0,"½ unidad de pan corriente equivale aproximadamente a 50 g."],
  ["Cereales","🍚","Arroz cocido","¿Qué medida casera corresponde a una porción?",["¼ taza","¾ taza","1½ tazas"],1,"Una porción corresponde a cerca de ¾ taza de arroz cocido (100 g)."],
  ["Cereales","🥣","Cereales y pastas","¿Cuál es el aporte de una porción de intercambio?",["140 kcal · 30 g HC · 3 g proteínas · 1 g lípidos","65 kcal · 15 g HC · 1 g proteínas · 0 g lípidos","170 kcal · 30 g HC · 11 g proteínas · 1 g lípidos"],0,"El intercambio de cereales aporta 140 kcal, 30 g de HC, 3 g de proteínas y 1 g de lípidos."],
  ["Verduras","🍅","Tomate","¿Qué medida casera se aproxima a una porción?",["1 unidad regular (120 g)","½ unidad chica (25 g)","2 unidades grandes (400 g)"],0,"Un tomate regular de unos 120 g representa una porción habitual."],
  ["Verduras","🥦","Verduras","¿Cuál es el aporte de una porción de intercambio?",["30 kcal · 5 g HC · 2 g proteínas · 0 g lípidos","140 kcal · 30 g HC · 3 g proteínas · 1 g lípidos","70 kcal · 10 g HC · 7 g proteínas · 0 g lípidos"],0,"El intercambio de verduras aporta 30 kcal, 5 g de HC y 2 g de proteínas, sin lípidos."],
  ["Frutas","🍌","Plátano","¿Qué cantidad representa una porción de intercambio?",["½ unidad regular (60 g)","1½ unidades (180 g)","¼ unidad (25 g)"],0,"Una porción corresponde aproximadamente a ½ plátano regular (60 g)."],
  ["Frutas","🍎","Frutas frescas","¿Cuál es el aporte de una porción de intercambio?",["65 kcal · 15 g HC · 1 g proteínas · 0 g lípidos","30 kcal · 5 g HC · 2 g proteínas · 0 g lípidos","175 kcal · 8 g HC · 5 g proteínas · 15 g lípidos"],0,"El intercambio de frutas aporta 65 kcal, 15 g de HC y 1 g de proteínas, sin lípidos."],
  ["Lácteos","🥛","Leche descremada","¿Qué medida casera corresponde a una porción?",["½ taza (100 ml)","1 taza (200 ml)","2 tazas (400 ml)"],1,"Una taza de 200 ml corresponde a una porción."],
  ["Lácteos","🥛","Lácteo bajo en grasa","¿Cuál es el aporte de una porción de intercambio?",["70 kcal · 10 g HC · 7 g proteínas · 0 g lípidos","110 kcal · 9 g HC · 5 g proteínas · 6 g lípidos","65 kcal · 1 g HC · 11 g proteínas · 2 g lípidos"],0,"El lácteo bajo en grasa aporta 70 kcal, 10 g de HC, 7 g de proteínas y 0 g de lípidos."],
  ["Lácteos","🧀","Lácteo alto en grasa","¿Cuál es el aporte de una porción de intercambio?",["85 kcal · 9 g HC · 5 g proteínas · 3 g lípidos","110 kcal · 9 g HC · 5 g proteínas · 6 g lípidos","180 kcal · 0 g HC · 0 g proteínas · 20 g lípidos"],1,"El lácteo alto en grasa aporta 110 kcal, 9 g de HC, 5 g de proteínas y 6 g de lípidos."],
  ["Proteínas","🐟","Pescado o carne baja en grasa","¿Cuál es el aporte de una porción de intercambio?",["65 kcal · 1 g HC · 11 g proteínas · 2 g lípidos","120 kcal · 1 g HC · 11 g proteínas · 8 g lípidos","170 kcal · 30 g HC · 11 g proteínas · 1 g lípidos"],0,"El grupo bajo en grasa aporta 65 kcal, 1 g de HC, 11 g de proteínas y 2 g de lípidos."],
  ["Proteínas","🥩","Carne alta en grasa","¿Cuál es el aporte de una porción de intercambio?",["65 kcal · 1 g HC · 11 g proteínas · 2 g lípidos","120 kcal · 1 g HC · 11 g proteínas · 8 g lípidos","175 kcal · 8 g HC · 5 g proteínas · 15 g lípidos"],1,"El grupo alto en grasa aporta 120 kcal, 1 g de HC, 11 g de proteínas y 8 g de lípidos."],
  ["Leguminosas","🫘","Lentejas cocidas","¿Qué medida casera representa una porción aproximada?",["½ taza","2 cucharaditas","2 tazas"],0,"Una porción se aproxima a ½ taza de lentejas cocidas."],
  ["Leguminosas","🫘","Leguminosas secas","¿Cuál es el aporte de una porción de intercambio?",["170 kcal · 30 g HC · 11 g proteínas · 1 g lípidos","140 kcal · 30 g HC · 3 g proteínas · 1 g lípidos","30 kcal · 5 g HC · 2 g proteínas · 0 g lípidos"],0,"El intercambio de leguminosas aporta 170 kcal, 30 g de HC, 11 g de proteínas y 1 g de lípidos."],
  ["Grasas","🫒","Aceite","¿Cuál es el aporte del intercambio indicado en la tabla de referencia?",["180 kcal · 20 g lípidos","65 kcal · 15 g HC","120 kcal · 11 g proteínas"],0,"El intercambio de aceites y grasas aporta 180 kcal y 20 g de lípidos."],
].map((q, id) => ({id, group:q[0], icon:q[1], food:q[2], prompt:q[3], options:q[4], answer:q[5], note:q[6]}));

const app = document.querySelector("#app");
let questions = [];
let index = 0;
let selected = null;
let answers = {};

const brand = `<div class="brand small"><span class="brand-mark">P</span> Porción a porción</div>`;
const shuffle = items => [...items].sort(() => Math.random() - .5);

function welcome() {
  app.className = "welcome-shell";
  app.innerHTML = `<section class="welcome">
    <div class="brand"><span class="brand-mark">P</span> Porción a porción</div>
    <div class="hero-art" aria-hidden="true"><span>🍞</span><span>🍅</span><span>🥛</span><span>🍎</span><span>🐟</span></div>
    <p class="eyebrow">DESAFÍO DE INTERCAMBIOS</p>
    <h1>¿Cuánto sabes de<br><em>porciones?</em></h1>
    <p class="intro">Entrena tu ojo clínico: relaciona alimentos, medidas caseras y su aporte nutricional.</p>
    <div class="start-stats"><span><strong>15</strong> preguntas</span><span><strong>7</strong> grupos</span><span><strong>∞</strong> intentos</span></div>
    <button class="primary" data-action="start">Comenzar desafío <span>→</span></button>
    <p class="microcopy">Segundo año · Nutrición y Dietética</p>
  </section>`;
}

function start() {
  questions = shuffle(POOL);
  index = 0;
  selected = null;
  answers = {};
  showQuestion();
}

function showQuestion() {
  const q = questions[index];
  const meta = GROUP_META[q.group];
  app.className = "quiz-shell";
  app.innerHTML = `<section class="quiz">
    <header>${brand}<span class="counter">${index + 1} / ${questions.length}</span></header>
    <div class="progress-track"><span style="width:${((index + 1) / questions.length) * 100}%"></span></div>
    <div class="group-label" style="color:${meta[0]}"><i style="background:${meta[0]}"></i>${meta[1]}</div>
    <div class="food-icon" aria-hidden="true">${q.icon}</div>
    <p class="food-name">${q.food}</p><h1>${q.prompt}</h1>
    <div class="options">${q.options.map((o,i)=>`<button data-option="${i}" aria-pressed="false"><span>${String.fromCharCode(65+i)}</span>${o}<i></i></button>`).join("")}</div>
    <button class="primary next" data-action="next" disabled>${index === questions.length-1 ? "Ver mi resumen" : "Siguiente"} <span>→</span></button>
    <p class="quiet">La retroalimentación aparecerá al finalizar.</p>
  </section>`;
}

function choose(i) {
  selected = i;
  document.querySelectorAll("[data-option]").forEach(button => {
    const active = Number(button.dataset.option) === i;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", String(active));
    button.querySelector("i").textContent = active ? "✓" : "";
  });
  document.querySelector("[data-action=next]").disabled = false;
}

function next() {
  answers[questions[index].id] = selected;
  selected = null;
  index += 1;
  if (index < questions.length) showQuestion(); else summary();
}

function summary() {
  const score = questions.filter(q => answers[q.id] === q.answer).length;
  const pct = Math.round(score / questions.length * 100);
  const wrong = questions.filter(q => answers[q.id] !== q.answer);
  app.innerHTML = `<section class="summary">${brand}
    <p class="eyebrow">RESUMEN DEL INTENTO</p>
    <div class="score-ring" style="--score:${pct * 3.6}deg"><div><strong>${score}</strong><span>de 15</span></div></div>
    <h1>${pct >= 80 ? "¡Muy buen ojo clínico!" : pct >= 60 ? "Vas por buen camino" : "Cada intento suma"}</h1>
    <p class="summary-lead">Lograste un ${pct}% de respuestas correctas.</p>
    <div class="group-results">${Object.keys(GROUP_META).map(group => {
      const qs = questions.filter(q => q.group === group);
      const ok = qs.filter(q => answers[q.id] === q.answer).length;
      return `<div><span style="background:${GROUP_META[group][0]}"></span>${group}<strong>${ok}/${qs.length}</strong></div>`;
    }).join("")}</div>
    ${wrong.length ? `<div class="review"><h2>Para revisar</h2>${wrong.map(q=>`<article><span class="review-icon">${q.icon}</span><div><strong>${q.food}</strong><p>${q.note}</p></div></article>`).join("")}</div>` : ""}
    <button class="primary" data-action="start">Intentar de nuevo <span>↻</span></button>
    <p class="source-note">Valores basados en las tablas docentes de porciones de intercambio y medidas caseras de la Universidad de Chile.</p>
  </section>`;
}

app.addEventListener("click", event => {
  const option = event.target.closest("[data-option]");
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (option) choose(Number(option.dataset.option));
  if (action === "start") start();
  if (action === "next") next();
});

welcome();
