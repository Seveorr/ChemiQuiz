const questions = [
  {
    pregunta: "Qui va ser el creador de la taula periòdica?",
    opcions: [
      "Dmitri Mendeléiev",
      "Marie Curie",
      "Isaac Newton",
      "Albert Einstein"
    ],
    respostaCorrecta: "Dmitri Mendeléiev",
    tipus: "creador"
  },
  {
    pregunta: "Quants elements té la taula periòdica actualment?",
    opcions: ["118", "120", "112", "102"],
    respostaCorrecta: "118",
    tipus: "totalElements"
  },
  {
    pregunta: "Quina propietat indica el nombre d'electrons en l'última capa?",
    opcions: [
      "Número atòmic",
      "Massa atòmica",
      "Electronegativitat",
      "Nombre d'oxidació"
    ],
    respostaCorrecta: "Número atòmic",
    tipus: "propietat"
  },
  {
    pregunta: "Quina és la unitat utilitzada per mesurar la massa atòmica?",
    opcions: ["Unitat de massa atòmica (u)", "Gram", "Mol", "Newton"],
    respostaCorrecta: "Unitat de massa atòmica (u)",
    tipus: "propietat"
  },
  {
    pregunta: "Quina família d'elements són coneguts com a gasos nobles?",
    opcions: ["He, Ne, Ar, Kr, Xe, Rn", "H, Li, Na, K", "O, S, Se, Te", "Fe, Co, Ni"],
    respostaCorrecta: "He, Ne, Ar, Kr, Xe, Rn",
    tipus: "familia"
  },
  {
    pregunta: "Quin element és un metall alcalí-terrós?",
    opcions: ["Calci", "Carboni", "Neó", "Clor"],
    respostaCorrecta: "Calci",
    tipus: "familia"
  },
  {
    pregunta: "Quina és la càrrega típica d'un ió de sodi (Na)?",
    opcions: ["+1", "-1", "+2", "0"],
    respostaCorrecta: "+1",
    tipus: "propietat"
  },
  {
    pregunta: "Quina és la característica principal dels elements de la família dels halògens?",
    opcions: [
      "Són molt reactius i tenen 7 electrons en la seva capa externa",
      "Són gasos nobles",
      "Són metalls alcalins",
      "Són metalls de transició"
    ],
    respostaCorrecta: "Són molt reactius i tenen 7 electrons en la seva capa externa",
    tipus: "familia"
  },
  {
    pregunta: "Quin element és un metall de transició?",
    opcions: ["Ferro", "Oxigen", "Neó", "Sodi"],
    respostaCorrecta: "Ferro",
    tipus: "familia"
  },
  {
    pregunta: "Quin any va publicar Dmitri Mendeléiev la seva taula periòdica?",
    opcions: ["1869", "1905", "1776", "1890"],
    respostaCorrecta: "1869",
    tipus: "historia"
  },
  {
    pregunta: "Quina propietat es representa per la capacitat d'un element d'atraure electrons?",
    opcions: ["Electronegativitat", "Número atòmic", "Massa atòmica", "Radio atòmic"],
    respostaCorrecta: "Electronegativitat",
    tipus: "propietat"
  },
  {
    pregunta: "Quina de les següents afirmacions és certa sobre els metalls?",
    opcions: [
      "Són bons conductors de calor i electricitat",
      "Són gasos inerts",
      "Tenen poca densitat",
      "No formen aliatges"
    ],
    respostaCorrecta: "Són bons conductors de calor i electricitat",
    tipus: "propietat"
  },
  {
    pregunta: "Quin és l’element més lleuger de la taula periòdica?",
    opcions: ["Hidrogen", "Hel·li", "Liti", "Carboni"],
    respostaCorrecta: "Hidrogen",
    tipus: "propietat"
  },
  {
    pregunta: "Quins elements són gasos nobles?",
    opcions: ["He, Ne, Ar, Kr, Xe, Rn", "H, Li, Na", "O, F, Cl", "Fe, Cu, Zn"],
    respostaCorrecta: "He, Ne, Ar, Kr, Xe, Rn",
    tipus: "familia"
  },
  {
    pregunta: "Què indica el nombre atòmic d'un element?",
    opcions: [
      "El nombre de protons del seu nucli",
      "La massa total de l’àtom",
      "El nombre d’electrons externs",
      "La càrrega de l’ió"
    ],
    respostaCorrecta: "El nombre de protons del seu nucli",
    tipus: "propietat"
  },
  {
    pregunta: "Quins elements formen la família dels alcalins?",
    opcions: ["H, Li, Na, K, Rb, Cs, Fr", "He, Ne, Ar", "Fe, Co, Ni", "O, S, Se"],
    respostaCorrecta: "H, Li, Na, K, Rb, Cs, Fr",
    tipus: "familia"
  }
];


let score = 0;
let totalQuestions = 10;
let questionsAsked = 0;
let timerInterval = null;
let questionsPool = [];

const formulari = document.getElementById("formulari");
const joc = document.getElementById("joc");
const resultat = document.getElementById("resultat");
const crono = document.getElementById("crono");
const scoreDisplay = document.getElementById("score");
const progressDisplay = document.getElementById("progress");
const questionDisplay = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const feedback = document.getElementById("feedback");
const missatgeFinal = document.getElementById("missatgeFinal");

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function startTimer(duration) {
  clearInterval(timerInterval);
  let timeLeft = duration;
  crono.textContent = `Temps restant: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    crono.textContent = `Temps restant: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      feedback.textContent = "Temps esgotat!";
      feedback.style.color = "red";
      disableOptions();
      setTimeout(nextQuestionOrEnd, 1500);
    }
  }, 1000);
}

function disableOptions() {
  const buttons = optionsDiv.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

function enableOptions() {
  const buttons = optionsDiv.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
}

function getNewQuestion() {
  if (questionsAsked >= totalQuestions) {
    acabarJoc();
    return;
  }

  const current = questionsPool[questionsAsked];
  questionsAsked++;

  progressDisplay.textContent = `Pregunta ${questionsAsked} de ${totalQuestions}`;
  questionDisplay.textContent = current.pregunta;

  optionsDiv.innerHTML = "";
  feedback.textContent = "";

  current.opcions.forEach((opcio) => {
    const btn = document.createElement("button");
    btn.textContent = opcio;
    btn.className = "option";
    btn.disabled = false;
    btn.onclick = () => checkAnswer(opcio, current.respostaCorrecta);
    optionsDiv.appendChild(btn);
  });

  startTimer(15);
}

function checkAnswer(selected, correct) {
  clearInterval(timerInterval);
  disableOptions();

  if (selected === correct) {
    feedback.textContent = "Correcte! 🎉";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = `Incorrecte. La resposta correcta és ${correct}`;
    feedback.style.color = "red";
  }

  scoreDisplay.textContent = `Puntuació: ${score}`;

  setTimeout(() => {
    feedback.textContent = "";
    getNewQuestion();
  }, 1500);
}

function nextQuestionOrEnd() {
  if (questionsAsked < totalQuestions) {
    getNewQuestion();
  } else {
    acabarJoc();
  }
}

function acabarJoc() {
  clearInterval(timerInterval);
  joc.style.display = "none";
  resultat.style.display = "block";
  missatgeFinal.textContent = `Has aconseguit ${score} de ${totalQuestions} preguntes correctes.`;
}

function reiniciarJoc() {
  clearInterval(timerInterval);
  score = 0;
  questionsAsked = 0;
  scoreDisplay.textContent = `Puntuació: 0`;
  progressDisplay.textContent = `Pregunta 0 de 0`;
  resultat.style.display = "none";
  formulari.style.display = "block";
  feedback.textContent = "";
  crono.textContent = "";
}

document
  .getElementById("configuracioJoc")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    const dificultat = document.getElementById("dificultat").value;
    if (dificultat === "facil") totalQuestions = 10;
    else if (dificultat === "mitja") totalQuestions = 15;
    else if (dificultat === "dificil") totalQuestions = 20;

    // Si demanes més preguntes de les que tenim, ajustem
    if (totalQuestions > questions.length) {
      totalQuestions = questions.length;
      alert(`Només hi ha ${questions.length} preguntes disponibles. El joc es configurarà amb aquesta quantitat.`);
    }

    questionsPool = shuffleArray(questions).slice(0, totalQuestions);

    formulari.style.display = "none";
    resultat.style.display = "none";
    joc.style.display = "block";

    score = 0;
    questionsAsked = 0;
    scoreDisplay.textContent = `Puntuació: 0`;
    progressDisplay.textContent = `Pregunta 0 de 0`;
    feedback.textContent = "";
    getNewQuestion();
  });
