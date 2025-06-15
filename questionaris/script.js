const questionsVeritatOFals = [
  {
    pregunta: "L'hidrogen és un metall alcalí.",
    respostaCorrecta: false,
    tipus: "Propietats",
  },
  {
    pregunta: "L'oxigen és l'element més abundant a l'escorça terrestre.",
    respostaCorrecta: true,
    tipus: "Abundància",
  },
  {
    pregunta: "La plata té el símbol químic 'Ag'.",
    respostaCorrecta: true,
    tipus: "Símbols",
  },
  {
    pregunta: "Tots els gasos nobles són radioactius.",
    respostaCorrecta: false,
    tipus: "Propietats",
  },
  {
    pregunta: "L'or és un excel·lent conductor de l'electricitat.",
    respostaCorrecta: true,
    tipus: "Propietats",
  },
  {
    pregunta: "El mercuri és l'únic metall líquid a temperatura ambient.",
    respostaCorrecta: true,
    tipus: "Propietats",
  },
  {
    pregunta: "El Carboni (C) és l'element base de la vida orgànica.",
    respostaCorrecta: true,
    tipus: "Composició",
  },
  {
    pregunta: "La taula periòdica actual ordena els elements per massa atòmica.",
    respostaCorrecta: false, // S'ordena per número atòmic
    tipus: "Història",
  },
  {
    pregunta: "El clor és un gas noble.",
    respostaCorrecta: false, // El clor és un halògen
    tipus: "Grups",
  },
  {
    pregunta: "El ferro és un element essencial per a l'hemoglobina en la sang.",
    respostaCorrecta: true,
    tipus: "Biologia",
  },
  {
    pregunta: "El diamant i el grafit estan fets del mateix element químic.",
    respostaCorrecta: true, // Tots dos són formes al·lotròpiques del carboni
    tipus: "Composició",
  },
  {
    pregunta: "L'heli és més pesat que l'aire.",
    respostaCorrecta: false,
    tipus: "Propietats",
  },
  {
    pregunta: "El sodi reacciona violentament amb l'aigua.",
    respostaCorrecta: true,
    tipus: "Reaccions",
  },
  {
    pregunta: "El neó s'utilitza habitualment en anuncis lluminosos.",
    respostaCorrecta: true,
    tipus: "Aplicacions",
  },
  {
    pregunta: "El plom té el símbol químic 'Pb'.",
    respostaCorrecta: true,
    tipus: "Símbols",
  },
  {
    pregunta: "L'ozó és una molècula de tres àtoms d'oxigen.",
    respostaCorrecta: true,
    tipus: "Composició",
  },
  {
    pregunta: "El calci és el metall més abundant a l'escorça terrestre.",
    respostaCorrecta: false, // És l'alumini
    tipus: "Abundància",
  },
  {
    pregunta: "Tots els metalls condueixen bé la calor i l'electricitat.",
    respostaCorrecta: true,
    tipus: "Propietats",
  },
  {
    pregunta: "Els elements del grup 18 es coneixen com a halògens.",
    respostaCorrecta: false, // Són els gasos nobles
    tipus: "Grups",
  },
  {
    pregunta: "El fluor és l'element més electronegatiu.",
    respostaCorrecta: true,
    tipus: "Propietats",
  },
];

let scoreVeritatOFals = 0;
let totalQuestionsVeritatOFals = 10;
let questionsAskedVeritatOFals = 0;
let timerIntervalVeritatOFals = null;
let questionsPoolVeritatOFals = [];

// Variables per a la comunicació amb el servidor (si es manté la funcionalitat)
let game_id_VeritatOFals = 0;
let seed_VeritatOFals = 0;
let intervalStatusVeritatOFals = null;

const formulariVeritatOFals = document.getElementById("formulari-VeritatOFals");
const jocVeritatOFals = document.getElementById("joc-VeritatOFals");
const resultatVeritatOFals = document.getElementById("resultat-VeritatOFals");
const cronoVeritatOFals = document.getElementById("crono-VeritatOFals");
const scoreDisplayVeritatOFals = document.getElementById("score-VeritatOFals");
const progressDisplayVeritatOFals = document.getElementById("progress-VeritatOFals");
const questionDisplayVeritatOFals = document.getElementById("question-VeritatOFals");
const optionsDivVeritatOFals = document.getElementById("options-VeritatOFals");
const feedbackVeritatOFals = document.getElementById("feedback-VeritatOFals");
const missatgeFinalVeritatOFals = document.getElementById("missatgeFinalVeritatOFals");

const tornarMenuJocVeritatOFalsBtn = document.getElementById("tornarMenuJocVeritatOFals");
const tornarMenuResultatVeritatOFalsBtn = document.getElementById("tornarMenuResultatVeritatOFals");

function shuffleArray(array) {
  // Use a simple random shuffle if seed is not critical for local game
  return array
    .map((value) => ({ value, sort: Math.random() })) // Changed from seed to Math.random() for local shuffle
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function startTimerVeritatOFals(duration) {
  clearInterval(timerIntervalVeritatOFals);
  let timeLeft = duration;
  cronoVeritatOFals.textContent = `Temps restant: ${timeLeft}s`;

  timerIntervalVeritatOFals = setInterval(() => {
    timeLeft--;
    cronoVeritatOFals.textContent = `Temps restant: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerIntervalVeritatOFals);
      feedbackVeritatOFals.textContent = "Temps esgotat!";
      feedbackVeritatOFals.style.color = "red";
      disableOptionsVeritatOFals();
      setTimeout(nextQuestionOrEndVeritatOFals, 1500);
    }
  }, 1000);
}

function disableOptionsVeritatOFals() {
  const buttons = optionsDivVeritatOFals.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

function enableOptionsVeritatOFals() {
  const buttons = optionsDivVeritatOFals.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
}

function getNewQuestionVeritatOFals() {
  if (questionsAskedVeritatOFals >= totalQuestionsVeritatOFals) {
    acabarJocVeritatOFals();
    return;
  }

  const current = questionsPoolVeritatOFals[questionsAskedVeritatOFals];

  questionsAskedVeritatOFals++;

  progressDisplayVeritatOFals.textContent = `Pregunta ${questionsAskedVeritatOFals} de ${totalQuestionsVeritatOFals}`;
  questionDisplayVeritatOFals.textContent = current.pregunta;

  // Assegura't que els botons True/False estiguin sempre presents i actius
  optionsDivVeritatOFals.innerHTML = `
        <button class="option-VeritatOFals true-button">VERITAT</button>
        <button class="option-VeritatOFals false-button">FALS</button>
    `;
  feedbackVeritatOFals.textContent = "";
  enableOptionsVeritatOFals(); // Reactiva els botons per a la nova pregunta

  const trueBtn = optionsDivVeritatOFals.querySelector(".true-button");
  const falseBtn = optionsDivVeritatOFals.querySelector(".false-button");

  trueBtn.onclick = () => checkAnswerVeritatOFals(true, current.respostaCorrecta);
  falseBtn.onclick = () => checkAnswerVeritatOFals(false, current.respostaCorrecta);

  startTimerVeritatOFals(15);
}

function checkAnswerVeritatOFals(selected, correct) {
  clearInterval(timerIntervalVeritatOFals);
  disableOptionsVeritatOFals();

  if (selected === correct) {
    feedbackVeritatOFals.textContent = "Correcte! 🎉";
    feedbackVeritatOFals.style.color = "green";
    scoreVeritatOFals++;
  } else {
    feedbackVeritatOFals.textContent = `Incorrecte. La resposta correcta és ${correct ? "VERITAT" : "FALS"}`;
    feedbackVeritatOFals.style.color = "red";
  }

  scoreDisplayVeritatOFals.textContent = `Puntuació: ${scoreVeritatOFals}`;

  setTimeout(() => {
    feedbackVeritatOFals.textContent = "";
    getNewQuestionVeritatOFals();
  }, 1500);
}

function nextQuestionOrEndVeritatOFals() {
  if (questionsAskedVeritatOFals < totalQuestionsVeritatOFals) {
    getNewQuestionVeritatOFals();
  } else {
    acabarJocVeritatOFals();
  }
}

function acabarJocVeritatOFals() {
  clearInterval(timerIntervalVeritatOFals);
  stopSaveStatusVeritatOFals();
  jocVeritatOFals.style.display = "none";
  resultatVeritatOFals.style.display = "block";
  missatgeFinalVeritatOFals.textContent = `Has aconseguit ${scoreVeritatOFals} de ${totalQuestionsVeritatOFals} preguntes correctes.`;

  // Aquí pots afegir la lògica per enviar la puntuació al servidor si la vols mantenir
  $.ajax({
    url: "https://fun.codelearn.cat/hackathon/game/finalize",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      game_id: game_id_VeritatOFals,
      data: {},
      score: scoreVeritatOFals,
    }),
    success: function (data, textStatus, jqXHR) {
      console.log("Informació de Veritat o Fals guardada correctament");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error en finalitzar de la partida de Veritat o Fals: " + textStatus);
    },
  });
}

function reiniciarJocVeritatOFals() {
  clearInterval(timerIntervalVeritatOFals);
  scoreVeritatOFals = 0;
  questionsAskedVeritatOFals = 0;
  scoreDisplayVeritatOFals.textContent = `Puntuació: 0`;
  progressDisplayVeritatOFals.textContent = `Pregunta 0 de 0`;
  resultatVeritatOFals.style.display = "none";
  formulariVeritatOFals.style.display = "block";
  feedbackVeritatOFals.textContent = "";
  cronoVeritatOFals.textContent = "";
  stopSaveStatusVeritatOFals(); // Assegura't de parar el guardat d'estat
}

function tornarAlMenuVeritatOFals() {
  clearInterval(timerIntervalVeritatOFals);
  stopSaveStatusVeritatOFals();
  scoreVeritatOFals = 0;
  questionsAskedVeritatOFals = 0;
  scoreDisplayVeritatOFals.textContent = `Puntuació: 0`;
  progressDisplayVeritatOFals.textContent = `Pregunta 0 de 0`;
  feedbackVeritatOFals.textContent = "";
  cronoVeritatOFals.textContent = "";

  jocVeritatOFals.style.display = "none";
  resultatVeritatOFals.style.display = "none";
  formulariVeritatOFals.style.display = "block"; // Tornem al formulari d'inici del joc V/F
}

// Listener per al formulari de configuració del joc
document.getElementById("configuracioJocVeritatOFals").addEventListener("submit", (e) => {
  e.preventDefault();
  // newGameRequestVeritatOFals(); // Activar si necessites la petició al servidor al començar
  startSaveStatusVeritatOFals(); // Activar si vols guardar el progrés

  const dificultat = document.getElementById("dificultatVeritatOFals").value;
  if (dificultat === "facil") totalQuestionsVeritatOFals = 10;
  else if (dificultat === "mitja") totalQuestionsVeritatOFals = 15;
  else if (dificultat === "dificil") totalQuestionsVeritatOFals = 20;

  if (totalQuestionsVeritatOFals > questionsVeritatOFals.length) {
    totalQuestionsVeritatOFals = questionsVeritatOFals.length;
    alert(
      `Només hi ha ${questionsVeritatOFals.length} preguntes de Veritat o Fals disponibles. El joc es configurarà amb aquesta quantitat.`
    );
  }

  questionsPoolVeritatOFals = shuffleArray(questionsVeritatOFals).slice(0, totalQuestionsVeritatOFals);

  formulariVeritatOFals.style.display = "none";
  resultatVeritatOFals.style.display = "none";
  jocVeritatOFals.style.display = "block";

  scoreVeritatOFals = 0;
  questionsAskedVeritatOFals = 0;
  scoreDisplayVeritatOFals.textContent = `Puntuació: 0`;
  progressDisplayVeritatOFals.textContent = `Pregunta 0 de 0`;
  feedbackVeritatOFals.textContent = "";
  getNewQuestionVeritatOFals();
});

// Listeners per als botons de tornar al menú
tornarMenuJocVeritatOFalsBtn.addEventListener("click", tornarAlMenuVeritatOFals);
tornarMenuResultatVeritatOFalsBtn.addEventListener("click", tornarAlMenuVeritatOFals);

// Funcions per a la comunicació amb el servidor (adapta-les si cal)
function newGameRequestVeritatOFals() {
  $.ajax({
    url: "https://fun.codelearn.cat/hackathon/game/new",
    method: "GET",
    success: function (data, textStatus, jqXHR) {
      if (jqXHR.status === 200) {
        game_id_VeritatOFals = data["game_id"];
        seed_VeritatOFals = data["seed"];
      } else {
        console.error("Error en la creació de la partida de Veritat o Fals: status " + jqXHR.status);
        reiniciarJocVeritatOFals();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error en la creació de la partida de Veritat o Fals: " + textStatus);
      reiniciarJocVeritatOFals();
    },
  });
}

function startSaveStatusVeritatOFals() {
  if (intervalStatusVeritatOFals) return;
  intervalStatusVeritatOFals = setInterval(() => {
    $.ajax({
      url: "https://fun.codelearn.cat/hackathon/game/store_progress",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        game_id: game_id_VeritatOFals,
        data: { preguntesRespongudes: questionsAskedVeritatOFals },
      }),
      success: function (data, textStatus, jqXHR) {
        console.log("Informació de Veritat o Fals guardada correctament");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error en guardar progrés de la partida de Veritat o Fals: " + textStatus);
      },
    });
  }, 15000);
}

function stopSaveStatusVeritatOFals() {
  clearInterval(intervalStatusVeritatOFals);
  intervalStatusVeritatOFals = null;
}