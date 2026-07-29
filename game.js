const GROUP_META = {
  Cereales: ["#F2A93B", "Cereales y derivados"],
  Verduras: ["#66A95B", "Verduras"],
  Frutas: ["#E97455", "Frutas"],
  Lácteos: ["#4C93A5", "Lácteos"],
  Proteínas: ["#9B6BAD", "Carnes, pescados y huevos"],
  Leguminosas: ["#B97543", "Leguminosas"],
  Grasas: ["#D39A32", "Aceites y grasas"],
};

const LEVEL_ONE = [
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

const MACROS = {
  cereal: { label: "cereal", energy: 140, carbs: 30, protein: 3, fat: 1 },
  vegetable: { label: "verdura", energy: 30, carbs: 5, protein: 2, fat: 0 },
  freeVegetable: { label: "verdura de libre consumo", energy: 10, carbs: 2.5, protein: 0, fat: 0 },
  fruit: { label: "fruta", energy: 65, carbs: 15, protein: 1, fat: 0 },
  dairyLow: { label: "lácteo bajo en grasa", energy: 70, carbs: 10, protein: 7, fat: 0 },
  dairyMedium: { label: "lácteo medio en grasa", energy: 85, carbs: 9, protein: 5, fat: 3 },
  dairyHigh: { label: "lácteo alto en grasa", energy: 110, carbs: 9, protein: 5, fat: 6 },
  proteinLow: { label: "carne baja en grasa", energy: 65, carbs: 1, protein: 11, fat: 2 },
  proteinHigh: { label: "carne alta en grasa", energy: 120, carbs: 1, protein: 11, fat: 8 },
  legume: { label: "leguminosa", energy: 170, carbs: 30, protein: 11, fat: 1 },
  fat: { label: "aceite o grasa", energy: 180, carbs: 0, protein: 0, fat: 20 },
  sugar: { label: "azúcar", energy: 20, carbs: 5, protein: 0, fat: 0 },
};

const REFERENCE_ORDER = [
  ["cereal", "Cereales, papas y leg. frescas"],
  ["vegetable", "Verduras en general"],
  ["freeVegetable", "Verduras de libre consumo"],
  ["fruit", "Frutas"],
  ["proteinHigh", "Carnes altas en grasa"],
  ["proteinLow", "Carnes bajas en grasa"],
  ["dairyHigh", "Lácteos altos en grasa"],
  ["dairyMedium", "Lácteos medios en grasa"],
  ["dairyLow", "Lácteos bajos en grasa"],
  ["legume", "Leguminosas secas"],
  ["fat", "Aceites y grasas"],
  ["sugar", "Azúcares"],
];

const MEAL_META = {
  Desayuno: ["#E68A45", "🌤️"],
  Colación: ["#C66A75", "🍎"],
  Almuerzo: ["#31856F", "☀️"],
  Once: ["#7A6AB0", "🫖"],
  Cena: ["#416C91", "🌙"],
};

const LEVEL_TWO = [
  {
    meal: "Desayuno", title: "Avena con leche y frutillas",
    description: "½ taza de avena (40 g o 6 cucharadas), 1 taza de leche descremada y ½ taza de frutillas.",
    exchanges: [["cereal",1],["dairyLow",1],["fruit",.5]],
    correct: "1 cereal + 1 lácteo bajo en grasa + ½ fruta",
    distractors: ["1 cereal + ½ lácteo + 1 fruta","2 cereales + 1 lácteo + ½ fruta"],
    teaching: "La tabla considera 40 g, 6 cucharadas o ½ taza de avena como un intercambio de cereal.",
  },
  {
    meal: "Desayuno", title: "Pan, leche y plátano",
    description: "½ pan corriente, 1 taza de leche descremada y ½ plátano regular.",
    exchanges: [["cereal",1],["dairyLow",1],["fruit",1]],
    correct: "1 cereal + 1 lácteo bajo en grasa + 1 fruta",
    distractors: ["½ cereal + 1 lácteo + ½ fruta","1 cereal + 2 lácteos + 1 fruta"],
    teaching: "Cada medida indicada corresponde a un intercambio completo de su grupo.",
  },
  {
    meal: "Desayuno", title: "Pan con pavo y manzana",
    description: "¾ pan corriente (75 g), 75 g de pechuga de pavo y 1 manzana chica.",
    exchanges: [["cereal",1.5],["proteinLow",1.5],["fruit",1]],
    correct: "1½ cereales + 1½ carnes bajas en grasa + 1 fruta",
    distractors: ["1 cereal + 1 carne + ½ fruta","1½ cereales + 1 carne + 2 frutas"],
    teaching: "Si 50 g equivalen a una porción, 75 g corresponden a 1½ porciones tanto para el pan como para el pavo.",
  },
  {
    meal: "Colación", title: "Yogurt con manzana",
    description: "1 yogurt diet y 1 manzana chica.",
    exchanges: [["dairyLow",1],["fruit",1]],
    correct: "1 lácteo bajo en grasa + 1 fruta",
    distractors: ["1 lácteo medio en grasa + ½ fruta","2 lácteos bajos en grasa + 1 fruta"],
    teaching: "El yogurt diet se clasifica como lácteo bajo en grasa.",
  },
  {
    meal: "Colación", title: "Leche endulzada con naranja",
    description: "1 taza de leche descremada, 1 cucharadita de azúcar y 1 naranja regular.",
    exchanges: [["dairyLow",1],["sugar",1],["fruit",1]],
    correct: "1 lácteo bajo en grasa + 1 azúcar + 1 fruta",
    distractors: ["1 lácteo alto en grasa + 1 fruta","½ lácteo + 2 frutas + 1 azúcar"],
    teaching: "La leche y la naranja representan un intercambio cada una; la cucharadita se contabiliza como un azúcar.",
  },
  {
    meal: "Colación", title: "Frutillas, yogurt y pan",
    description: "1 taza de frutillas, 1 yogurt diet y ½ pan corriente.",
    exchanges: [["fruit",1],["dairyLow",1],["cereal",1]],
    correct: "1 fruta + 1 lácteo bajo en grasa + 1 cereal",
    distractors: ["2 frutas + 1 lácteo + ½ cereal","1 fruta + 1 lácteo alto en grasa"],
    teaching: "Las tres medidas corresponden a un intercambio completo de su respectivo grupo.",
  },
  {
    meal: "Almuerzo", title: "Arroz con pollo y tomate",
    description: "¾ taza de arroz cocido, 50 g de pollo sin piel, 1 tomate regular y 2 cucharaditas de aceite.",
    exchanges: [["cereal",1],["proteinLow",1],["vegetable",1],["fat",.5]],
    correct: "1 cereal + 1 carne baja en grasa + 1 verdura + ½ grasa",
    distractors: ["1 cereal + 2 carnes + 1 verdura + 1 grasa","½ cereal + 1 carne + 2 verduras"],
    teaching: "Cuatro cucharaditas de aceite forman un intercambio; dos cucharaditas corresponden a ½ porción.",
  },
  {
    meal: "Almuerzo", title: "Carne con papa y zanahoria",
    description: "1 papa cocida regular, 50 g de carne molida alta en grasa y ½ taza de zanahoria.",
    exchanges: [["cereal",1],["proteinHigh",1],["vegetable",1]],
    correct: "1 cereal + 1 carne alta en grasa + 1 verdura",
    distractors: ["2 cereales + 1 carne baja en grasa + ½ verdura","1 cereal + 1 carne baja en grasa + 1 grasa"],
    teaching: "La papa se contabiliza con cereales y la carne molida indicada como carne alta en grasa.",
  },
  {
    meal: "Almuerzo", title: "Lentejas con arroz y tomate",
    description: "½ taza de lentejas cocidas, ¾ taza de arroz cocido y 1 tomate regular.",
    exchanges: [["legume",1],["cereal",1],["vegetable",1]],
    correct: "1 leguminosa + 1 cereal + 1 verdura",
    distractors: ["2 leguminosas + 1 verdura","1 leguminosa + 2 cereales"],
    teaching: "Lentejas y arroz pertenecen a grupos distintos y sus aportes se suman.",
  },
  {
    meal: "Once", title: "Pan, leche semidescremada y naranja",
    description: "½ pan corriente, 1 taza de leche semidescremada y 1 naranja regular.",
    exchanges: [["cereal",1],["dairyMedium",1],["fruit",1]],
    correct: "1 cereal + 1 lácteo medio en grasa + 1 fruta",
    distractors: ["1 cereal + 1 lácteo bajo en grasa + ½ fruta","2 cereales + 1 lácteo alto en grasa"],
    teaching: "La leche semidescremada utiliza el aporte del lácteo medio en grasa.",
  },
  {
    meal: "Once", title: "Pan, leche entera y pera",
    description: "½ pan corriente, 1 taza de leche entera y 1 pera chica.",
    exchanges: [["cereal",1],["dairyHigh",1],["fruit",1]],
    correct: "1 cereal + 1 lácteo alto en grasa + 1 fruta",
    distractors: ["1 cereal + 1 lácteo bajo en grasa + 1 fruta","½ cereal + 2 lácteos + 1 fruta"],
    teaching: "La leche entera se contabiliza como lácteo alto en grasa.",
  },
  {
    meal: "Once", title: "Yogurt, plátano y pan",
    description: "1 yogurt diet, ½ plátano regular y ½ pan corriente.",
    exchanges: [["dairyLow",1],["fruit",1],["cereal",1]],
    correct: "1 lácteo bajo en grasa + 1 fruta + 1 cereal",
    distractors: ["1 lácteo + 2 frutas","1 lácteo alto en grasa + ½ fruta + ½ cereal"],
    teaching: "El yogurt, el plátano y el pan representan un intercambio de cada grupo.",
  },
  {
    meal: "Cena", title: "Fideos con carne y ensalada",
    description: "¾ taza de fideos cocidos, 50 g de carne magra, 1 tomate regular y 2 cucharaditas de aceite.",
    exchanges: [["cereal",1],["proteinLow",1],["vegetable",1],["fat",.5]],
    correct: "1 cereal + 1 carne baja en grasa + 1 verdura + ½ grasa",
    distractors: ["1 cereal + 1 carne + 2 verduras + 1 grasa","2 cereales + 1 carne + ½ grasa"],
    teaching: "Dos cucharaditas de aceite equivalen a medio intercambio de grasa.",
  },
  {
    meal: "Cena", title: "Garbanzos con tomate",
    description: "½ taza de garbanzos cocidos, 1 tomate regular y 2 cucharaditas de aceite.",
    exchanges: [["legume",1],["vegetable",1],["fat",.5]],
    correct: "1 leguminosa + 1 verdura + ½ grasa",
    distractors: ["1 cereal + 1 verdura + 1 grasa","2 leguminosas + ½ verdura"],
    teaching: "Los garbanzos aportan como leguminosa y dos cucharaditas de aceite equivalen a ½ porción de grasa.",
  },
  {
    meal: "Cena", title: "Arroz con atún y lechuga",
    description: "¾ taza de arroz cocido, 60 g de atún al agua y 1 taza de lechuga.",
    exchanges: [["cereal",1],["proteinLow",1],["freeVegetable",1]],
    correct: "1 cereal + 1 carne baja en grasa + 1 verdura de libre consumo",
    distractors: ["1 cereal + 2 carnes + ½ verdura","2 cereales + 1 carne + 1 verdura"],
    teaching: "El atún al agua se contabiliza como carne baja en grasa y la lechuga como verdura de libre consumo.",
  },
].map((item, id) => ({...item, id}));

const app = document.querySelector("#app");
let mode = "home";
let questions = [];
let index = 0;
let selected = null;
let answers = {};
let stage = "exchanges";
let optionOrder = [];
let levelTwoResults = {};
let caseAttempts = { exchanges: 0, nutrients: 0 };

const brand = `<button class="brand small brand-button" data-action="home" aria-label="Volver al inicio"><span class="brand-mark">P</span> Porción a porción</button>`;
const shuffle = items => [...items].sort(() => Math.random() - .5);
const tidy = value => Math.round((value + Number.EPSILON) * 10) / 10;

function totalsFor(item) {
  return item.exchanges.reduce((sum, [key, amount]) => {
    const values = MACROS[key];
    sum.energy += values.energy * amount;
    sum.carbs += values.carbs * amount;
    sum.protein += values.protein * amount;
    sum.fat += values.fat * amount;
    return sum;
  }, { energy: 0, carbs: 0, protein: 0, fat: 0 });
}

function formulaFor(item) {
  return item.exchanges.map(([key, amount]) => `${amount === 1 ? "" : `${tidy(amount)} × `}${MACROS[key].label}`).join(" + ");
}

function referenceTable() {
  return `<details class="reference-table">
    <summary>Consultar tabla de aporte por porción</summary>
    <div class="table-scroll">
      <table>
        <thead><tr><th>Grupo</th><th>kcal</th><th>HC</th><th>Líp.</th><th>Prot.</th></tr></thead>
        <tbody>${REFERENCE_ORDER.map(([key, label]) => {
          const value = MACROS[key];
          return `<tr><td>${label}</td><td>${value.energy}</td><td>${value.carbs}</td><td>${value.fat}</td><td>${value.protein}</td></tr>`;
        }).join("")}</tbody>
      </table>
    </div>
  </details>`;
}

function home() {
  mode = "home";
  const previous = Number(localStorage.getItem("porcionNivel1") || 0);
  app.className = "welcome-shell";
  app.innerHTML = `<section class="welcome level-home">
    <div class="brand"><span class="brand-mark">P</span> Porción a porción</div>
    <div class="hero-art" aria-hidden="true"><span>🍞</span><span>🍅</span><span>🥛</span><span>🍎</span><span>🐟</span></div>
    <p class="eyebrow">ENTRENAMIENTO EN DOS NIVELES</p>
    <h1>Domina las porciones.<br><em>Luego aplícalas.</em></h1>
    <p class="intro">Avanza desde alimentos aislados hasta comidas completas y calcula su aporte nutricional.</p>
    <div class="level-grid">
      <article class="level-card">
        <span class="level-number">01</span><span class="level-tag">Entrenamiento</span>
        <h2>Porciones y aportes</h2>
        <p>Relaciona alimentos, medidas caseras y nutrientes por intercambio.</p>
        ${previous ? `<small>Último resultado: ${previous}%</small>` : `<small>Recomendado para comenzar</small>`}
        <button class="secondary" data-action="start-one">Jugar Nivel 1 <span>→</span></button>
      </article>
      <article class="level-card advanced">
        <span class="level-number">02</span><span class="level-tag">Aplicación</span>
        <h2>Comidas completas</h2>
        <p>Identifica varios intercambios y calcula energía y macronutrientes.</p>
        <small>15 casos · selección + cálculo</small>
        <button class="primary" data-action="start-two">Jugar Nivel 2 <span>→</span></button>
      </article>
    </div>
    <p class="microcopy">Segundo año · Nutrición y Dietética</p>
  </section>`;
}

function startOne() {
  mode = "level-one";
  questions = shuffle(LEVEL_ONE);
  index = 0;
  selected = null;
  answers = {};
  showLevelOneQuestion();
}

function showLevelOneQuestion() {
  const q = questions[index];
  const meta = GROUP_META[q.group];
  app.className = "quiz-shell";
  app.innerHTML = `<section class="quiz">
    <header>${brand}<span class="counter">Nivel 1 · ${index + 1} / ${questions.length}</span></header>
    <div class="progress-track"><span style="width:${((index + 1) / questions.length) * 100}%"></span></div>
    <div class="group-label" style="color:${meta[0]}"><i style="background:${meta[0]}"></i>${meta[1]}</div>
    <div class="food-icon" aria-hidden="true">${q.icon}</div>
    <p class="food-name">${q.food}</p><h1>${q.prompt}</h1>
    <div class="options">${q.options.map((option,i)=>`<button data-option="${i}" aria-pressed="false"><span>${String.fromCharCode(65+i)}</span>${option}<i></i></button>`).join("")}</div>
    <button class="primary next" data-action="next-one" disabled>${index === questions.length-1 ? "Ver mi resumen" : "Siguiente"} <span>→</span></button>
    <p class="quiet">La retroalimentación aparecerá al finalizar.</p>
  </section>`;
}

function chooseLevelOne(i) {
  selected = i;
  document.querySelectorAll("[data-option]").forEach(button => {
    const active = Number(button.dataset.option) === i;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", String(active));
    button.querySelector("i").textContent = active ? "✓" : "";
  });
  document.querySelector("[data-action=next-one]").disabled = false;
}

function nextLevelOne() {
  answers[questions[index].id] = selected;
  selected = null;
  index += 1;
  if (index < questions.length) showLevelOneQuestion(); else summaryOne();
}

function summaryOne() {
  const score = questions.filter(q => answers[q.id] === q.answer).length;
  const pct = Math.round(score / questions.length * 100);
  const wrong = questions.filter(q => answers[q.id] !== q.answer);
  localStorage.setItem("porcionNivel1", String(pct));
  app.innerHTML = `<section class="summary">${brand}
    <p class="eyebrow">RESUMEN · NIVEL 1</p>
    <div class="score-ring" style="--score:${pct * 3.6}deg"><div><strong>${score}</strong><span>de 15</span></div></div>
    <h1>${pct >= 80 ? "¡Muy buen ojo clínico!" : pct >= 60 ? "Vas por buen camino" : "Cada intento suma"}</h1>
    <p class="summary-lead">Lograste un ${pct}% de respuestas correctas.</p>
    <div class="group-results">${Object.keys(GROUP_META).map(group => {
      const qs = questions.filter(q => q.group === group);
      const ok = qs.filter(q => answers[q.id] === q.answer).length;
      return `<div><span style="background:${GROUP_META[group][0]}"></span>${group}<strong>${ok}/${qs.length}</strong></div>`;
    }).join("")}</div>
    ${wrong.length ? `<div class="review"><h2>Para revisar</h2>${wrong.map(q=>`<article><span class="review-icon">${q.icon}</span><div><strong>${q.food}</strong><p>${q.note}</p></div></article>`).join("")}</div>` : ""}
    <div class="button-stack">
      <button class="primary" data-action="start-two">Continuar al Nivel 2 <span>→</span></button>
      <button class="text-button" data-action="start-one">Repetir Nivel 1</button>
    </div>
    <p class="source-note">Valores basados en las tablas docentes de porciones de intercambio y medidas caseras de la Universidad de Chile.</p>
  </section>`;
}

function startTwo() {
  mode = "level-two";
  questions = shuffle(LEVEL_TWO);
  index = 0;
  stage = "exchanges";
  selected = null;
  levelTwoResults = {};
  caseAttempts = { exchanges: 0, nutrients: 0 };
  showLevelTwoCase();
}

function progressByMeal() {
  const completed = questions.slice(0, index);
  return Object.keys(MEAL_META).map(meal => {
    const total = questions.filter(q => q.meal === meal).length;
    const done = completed.filter(q => q.meal === meal).length;
    return `<span class="${done === total ? "done" : ""}" title="${meal}: ${done}/${total}"><i style="background:${MEAL_META[meal][0]}"></i>${MEAL_META[meal][1]}</span>`;
  }).join("");
}

function showLevelTwoCase(message = "") {
  const item = questions[index];
  const meta = MEAL_META[item.meal];
  optionOrder = shuffle([0,1,2]);
  selected = null;
  stage = "exchanges";
  app.className = "quiz-shell";
  app.innerHTML = `<section class="quiz applied">
    <header>${brand}<span class="counter">Nivel 2 · ${index + 1} / ${questions.length}</span></header>
    <div class="progress-track"><span style="width:${(index / questions.length) * 100}%"></span></div>
    <div class="meal-progress" aria-label="Progreso por tiempos de comida">${progressByMeal()}</div>
    <div class="group-label" style="color:${meta[0]}"><i style="background:${meta[0]}"></i>${meta[1]} ${item.meal}</div>
    <div class="case-card"><span class="case-icon">${meta[1]}</span><div><p class="food-name">${item.title}</p><p>${item.description}</p></div></div>
    <p class="step-label">PASO 1 DE 2 · IDENTIFICA</p>
    <h1>¿Qué intercambios contiene esta comida?</h1>
    <div class="options compact">${optionOrder.map((original,i)=>{
      const text = original === 0 ? item.correct : item.distractors[original-1];
      return `<button data-exchange-option="${original}" aria-pressed="false"><span>${String.fromCharCode(65+i)}</span>${text}<i></i></button>`;
    }).join("")}</div>
    <div class="feedback-slot">${message}</div>
    <button class="primary next" data-action="check-exchanges" disabled>Comprobar intercambios <span>→</span></button>
  </section>`;
}

function chooseExchange(original) {
  selected = original;
  document.querySelectorAll("[data-exchange-option]").forEach(button => {
    const active = Number(button.dataset.exchangeOption) === original;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", String(active));
    button.querySelector("i").textContent = active ? "✓" : "";
  });
  document.querySelector("[data-action=check-exchanges]").disabled = false;
}

function checkExchanges() {
  const item = questions[index];
  caseAttempts.exchanges += 1;
  if (selected !== 0) {
    showLevelTwoCase(`<div class="feedback error"><strong>Aún no.</strong> ${item.teaching}<br><b>La combinación correcta es:</b> ${item.correct}</div>`);
    return;
  }
  showNutrientStep(`<div class="feedback success"><strong>¡Intercambios correctos!</strong> Ahora suma el aporte de cada grupo.</div>`);
}

function showNutrientStep(message = "") {
  const item = questions[index];
  const meta = MEAL_META[item.meal];
  stage = "nutrients";
  app.innerHTML = `<section class="quiz applied">
    <header>${brand}<span class="counter">Nivel 2 · ${index + 1} / ${questions.length}</span></header>
    <div class="progress-track"><span style="width:${((index + .5) / questions.length) * 100}%"></span></div>
    <div class="meal-progress" aria-label="Progreso por tiempos de comida">${progressByMeal()}</div>
    <div class="group-label" style="color:${meta[0]}"><i style="background:${meta[0]}"></i>${meta[1]} ${item.meal}</div>
    <div class="case-card mini"><span class="case-icon">${meta[1]}</span><div><p class="food-name">${item.title}</p><p>${item.correct}</p></div></div>
    <p class="step-label">PASO 2 DE 2 · CALCULA</p>
    <h1>¿Cuál es el aporte nutricional total?</h1>
    ${referenceTable()}
    <form class="nutrient-form" data-form="nutrients">
      <label><span>Energía</span><div><input inputmode="decimal" name="energy" aria-label="Energía en kilocalorías" required><b>kcal</b></div></label>
      <label><span>Hidratos de carbono</span><div><input inputmode="decimal" name="carbs" aria-label="Hidratos de carbono en gramos" required><b>g</b></div></label>
      <label><span>Proteínas</span><div><input inputmode="decimal" name="protein" aria-label="Proteínas en gramos" required><b>g</b></div></label>
      <label><span>Lípidos</span><div><input inputmode="decimal" name="fat" aria-label="Lípidos en gramos" required><b>g</b></div></label>
    </form>
    <p class="decimal-note">Puedes usar coma o punto para los decimales.</p>
    <div class="feedback-slot">${message}</div>
    <button class="primary next" data-action="check-nutrients">Comprobar cálculo <span>→</span></button>
  </section>`;
}

function readNumber(name) {
  const value = document.querySelector(`[name="${name}"]`).value.trim().replace(",", ".");
  return value === "" ? NaN : Number(value);
}

function checkNutrients() {
  const item = questions[index];
  const expected = totalsFor(item);
  const entered = {
    energy: readNumber("energy"),
    carbs: readNumber("carbs"),
    protein: readNumber("protein"),
    fat: readNumber("fat"),
  };
  caseAttempts.nutrients += 1;
  const labels = { energy: "energía", carbs: "hidratos de carbono", protein: "proteínas", fat: "lípidos" };
  const wrong = Object.keys(expected).filter(key => !Number.isFinite(entered[key]) || Math.abs(entered[key] - tidy(expected[key])) > .11);

  if (wrong.length) {
    const values = Object.keys(expected).map(key => `<span><b>${labels[key]}:</b> ${tidy(expected[key])}${key === "energy" ? " kcal" : " g"}</span>`).join("");
    showNutrientStep(`<div class="feedback error"><strong>Revisa ${wrong.map(key => labels[key]).join(", ")}.</strong><br>La suma es ${formulaFor(item)}.<div class="answer-grid">${values}</div></div>`);
    return;
  }

  levelTwoResults[item.id] = {
    firstTry: caseAttempts.exchanges === 1 && caseAttempts.nutrients === 1,
    exchangeAttempts: caseAttempts.exchanges,
    nutrientAttempts: caseAttempts.nutrients,
  };
  showCaseSuccess(expected);
}

function showCaseSuccess(expected) {
  const item = questions[index];
  const meta = MEAL_META[item.meal];
  stage = "success";
  app.innerHTML = `<section class="quiz applied success-screen">
    <header>${brand}<span class="counter">Nivel 2 · ${index + 1} / ${questions.length}</span></header>
    <div class="progress-track"><span style="width:${((index + 1) / questions.length) * 100}%"></span></div>
    <div class="success-mark">✓</div>
    <p class="eyebrow">${meta[1]} ${item.meal.toUpperCase()} RESUELTO</p>
    <h1>Integraste porciones y nutrientes</h1>
    <p class="summary-lead">${item.title}</p>
    <div class="result-macros">
      <div><strong>${tidy(expected.energy)}</strong><span>kcal</span></div>
      <div><strong>${tidy(expected.carbs)}</strong><span>g HC</span></div>
      <div><strong>${tidy(expected.protein)}</strong><span>g proteínas</span></div>
      <div><strong>${tidy(expected.fat)}</strong><span>g lípidos</span></div>
    </div>
    <p class="calculation-note"><strong>${item.correct}</strong><br>${item.teaching}</p>
    <button class="primary" data-action="next-case">${index === questions.length - 1 ? "Ver resumen del Nivel 2" : "Siguiente comida"} <span>→</span></button>
  </section>`;
}

function nextCase() {
  index += 1;
  caseAttempts = { exchanges: 0, nutrients: 0 };
  if (index < questions.length) showLevelTwoCase(); else summaryTwo();
}

function summaryTwo() {
  const firstTry = Object.values(levelTwoResults).filter(result => result.firstTry).length;
  const pct = Math.round(firstTry / questions.length * 100);
  const totalAttempts = Object.values(levelTwoResults).reduce((sum, result) => sum + result.exchangeAttempts + result.nutrientAttempts, 0);
  app.innerHTML = `<section class="summary">${brand}
    <p class="eyebrow">RESUMEN · NIVEL 2</p>
    <div class="score-ring advanced-ring" style="--score:${pct * 3.6}deg"><div><strong>${firstTry}</strong><span>sin ayudas</span></div></div>
    <h1>${firstTry >= 12 ? "¡Excelente integración!" : firstTry >= 8 ? "Buen razonamiento aplicado" : "La práctica está funcionando"}</h1>
    <p class="summary-lead">Completaste las 15 comidas. Resolviste ${firstTry} al primer intento y realizaste ${totalAttempts} comprobaciones.</p>
    <div class="group-results">${Object.keys(MEAL_META).map(meal => {
      const qs = questions.filter(q => q.meal === meal);
      const ok = qs.filter(q => levelTwoResults[q.id]?.firstTry).length;
      return `<div><span style="background:${MEAL_META[meal][0]}"></span>${MEAL_META[meal][1]} ${meal}<strong>${ok}/${qs.length} sin ayudas</strong></div>`;
    }).join("")}</div>
    <div class="review takeaway"><h2>Idea clave</h2><p>Primero transforma cada medida casera en intercambios. Después multiplica el número de intercambios por el aporte del grupo y suma todos los alimentos.</p></div>
    <div class="button-stack">
      <button class="primary" data-action="start-two">Repetir Nivel 2 <span>↻</span></button>
      <button class="text-button" data-action="home">Volver a los niveles</button>
    </div>
    <p class="source-note">Valores y medidas basados exclusivamente en las tablas docentes de porciones de intercambio compartidas para esta actividad.</p>
  </section>`;
}

app.addEventListener("click", event => {
  const optionOne = event.target.closest("[data-option]");
  const exchangeOption = event.target.closest("[data-exchange-option]");
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (optionOne) chooseLevelOne(Number(optionOne.dataset.option));
  if (exchangeOption) chooseExchange(Number(exchangeOption.dataset.exchangeOption));
  if (action === "home") home();
  if (action === "start-one") startOne();
  if (action === "next-one") nextLevelOne();
  if (action === "start-two") startTwo();
  if (action === "check-exchanges") checkExchanges();
  if (action === "check-nutrients") checkNutrients();
  if (action === "next-case") nextCase();
});

app.addEventListener("submit", event => {
  if (event.target.matches("[data-form=nutrients]")) {
    event.preventDefault();
    checkNutrients();
  }
});

home();
