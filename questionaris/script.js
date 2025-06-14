const questions = [
  {
    pregunta: "Qui va ser el creador de la taula periòdica?",
    opcions: [
      "Dmitri Mendeléiev",
      "Marie Curie",
      "Isaac Newton",
      "Albert Einstein",
    ],
    respostaCorrecta: "Dmitri Mendeléiev",
    tipus: "historia",
  },
  {
    pregunta: "Quants elements té la taula periòdica actualment?",
    opcions: ["118", "120", "112", "102"],
    respostaCorrecta: "118",
    tipus: "elements",
  },
  {
    pregunta: "Quina propietat indica el nombre d'electrons en l'última capa?",
    opcions: [
      "Número atòmic",
      "Massa atòmica",
      "Electronegativitat",
      "Nombre d'oxidació",
    ],
    respostaCorrecta: "Número atòmic",
    tipus: "propietat",
  },
  {
    pregunta: "Quina és la unitat utilitzada per mesurar la massa atòmica?",
    opcions: ["Unitat de massa atòmica (u)", "Gram", "Mol", "Newton"],
    respostaCorrecta: "Unitat de massa atòmica (u)",
    tipus: "propietat",
  },
  {
    pregunta: "Quina família d'elements són coneguts com a gasos nobles?",
    opcions: [
      "He, Ne, Ar, Kr, Xe, Rn",
      "H, Li, Na, K",
      "O, S, Se, Te",
      "Fe, Co, Ni",
    ],
    respostaCorrecta: "He, Ne, Ar, Kr, Xe, Rn",
    tipus: "familia",
  },
  {
    pregunta: "Quin element és un metall alcalí-terrós?",
    opcions: ["Calci", "Carboni", "Neó", "Clor"],
    respostaCorrecta: "Calci",
    tipus: "familia",
  },
  {
    pregunta: "Quina és la càrrega típica d'un ió de sodi (Na)?",
    opcions: ["+1", "-1", "+2", "0"],
    respostaCorrecta: "+1",
    tipus: "propietat",
  },
  {
    pregunta:
      "Quina és la característica principal dels elements de la família dels halògens?",
    opcions: [
      "Són molt reactius i tenen 7 electrons en la seva capa externa",
      "Són gasos nobles",
      "Són metalls alcalins",
      "Són metalls de transició",
    ],
    respostaCorrecta:
      "Són molt reactius i tenen 7 electrons en la seva capa externa",
    tipus: "familia",
  },
  {
    pregunta: "Quin element és un metall de transició?",
    opcions: ["Ferro", "Oxigen", "Neó", "Sodi"],
    respostaCorrecta: "Ferro",
    tipus: "familia",
  },
  {
    pregunta: "Quin any va publicar Dmitri Mendeléiev la seva taula periòdica?",
    opcions: ["1869", "1905", "1776", "1890"],
    respostaCorrecta: "1869",
    tipus: "historia",
  },
  {
    pregunta:
      "Quina propietat es representa per la capacitat d'un element d'atraure electrons?",
    opcions: [
      "Electronegativitat",
      "Número atòmic",
      "Massa atòmica",
      "Radio atòmic",
    ],
    respostaCorrecta: "Electronegativitat",
    tipus: "propietat",
  },
  {
    pregunta: "Quina de les següents afirmacions és certa sobre els metalls?",
    opcions: [
      "Són bons conductors de calor i electricitat",
      "Són gasos inerts",
      "Tenen poca densitat",
      "No formen aliatges",
    ],
    respostaCorrecta: "Són bons conductors de calor i electricitat",
    tipus: "propietat",
  },
  {
    pregunta: "Quin és l’element més lleuger de la taula periòdica?",
    opcions: ["Hidrogen", "Hel·li", "Liti", "Carboni"],
    respostaCorrecta: "Hidrogen",
    tipus: "propietat",
  },
  {
    pregunta: "Quins elements són gasos nobles?",
    opcions: ["He, Ne, Ar, Kr, Xe, Rn", "H, Li, Na", "O, F, Cl", "Fe, Cu, Zn"],
    respostaCorrecta: "He, Ne, Ar, Kr, Xe, Rn",
    tipus: "familia",
  },
  {
    pregunta: "Què indica el nombre atòmic d'un element?",
    opcions: [
      "El nombre de protons del seu nucli",
      "La massa total de l’àtom",
      "El nombre d’electrons externs",
      "La càrrega de l’ió",
    ],
    respostaCorrecta: "El nombre de protons del seu nucli",
    tipus: "propietat",
  },
  {
    pregunta: "Quins elements formen la família dels alcalins?",
    opcions: [
      "H, Li, Na, K, Rb, Cs, Fr",
      "He, Ne, Ar",
      "Fe, Co, Ni",
      "O, S, Se",
    ],
    respostaCorrecta: "H, Li, Na, K, Rb, Cs, Fr",
    tipus: "familia",
  },
  {
    pregunta: "Quin és l'element químic més abundant a l'univers?",
    opcions: ["Hidrogen", "Oxigen", "Carboni", "Hel·li"],
    respostaCorrecta: "Hidrogen",
    tipus: "composició",
  },
  {
    pregunta:
      "Quin metall s'utilitza principalment en la fabricació de bateries de ions de liti?",
    opcions: ["Liti", "Plom", "Níquel", "Coure"],
    respostaCorrecta: "Liti",
    tipus: "ús",
  },
  {
    pregunta: "Quin element és imprescindible en la formació d’hemoglobina?",
    opcions: ["Ferro", "Sodi", "Calci", "Potassi"],
    respostaCorrecta: "Ferro",
    tipus: "bioquímica",
  },
  {
    pregunta:
      "Quin element és conegut per la seva gran resistència a la corrosió?",
    opcions: ["Or", "Tità", "Ferro", "Plata"],
    respostaCorrecta: "Tità",
    tipus: "propietat",
  },
  {
    pregunta: "Quina és la fórmula química de l’aigua?",
    opcions: ["H₂O", "CO₂", "O₂", "NaCl"],
    respostaCorrecta: "H₂O",
    tipus: "química",
  },
  {
    pregunta:
      "Quin grup d’elements es troba a la columna 1 de la taula periòdica?",
    opcions: [
      "Metalls alcalins",
      "Halògens",
      "Gasos nobles",
      "Metalls de transició",
    ],
    respostaCorrecta: "Metalls alcalins",
    tipus: "familia",
  },
  {
    pregunta: "Quin és l’element químic que es troba en els diamants?",
    opcions: ["Carboni", "Silici", "Oxigen", "Ferro"],
    respostaCorrecta: "Carboni",
    tipus: "composició",
  },
  {
    pregunta: "Quin metall s’utilitza sovint en circuits electrònics?",
    opcions: ["Coure", "Plata", "Ferro", "Níquel"],
    respostaCorrecta: "Coure",
    tipus: "ús",
  },
  {
    pregunta: "Quin element químic és essencial en la formació dels ossos?",
    opcions: ["Calci", "Fòsfor", "Magnesi", "Potassi"],
    respostaCorrecta: "Calci",
    tipus: "bioquímica",
  },
  {
    pregunta: "Quin element és gasós a temperatura ambient?",
    opcions: ["Oxigen", "Ferro", "Silici", "Coure"],
    respostaCorrecta: "Oxigen",
    tipus: "propietat",
  },
  {
    pregunta: "Quin és l'element químic més dens?",
    opcions: ["Osmí", "Platina", "Plom", "Urani"],
    respostaCorrecta: "Osmí",
    tipus: "propietat",
  },
  {
    pregunta: "Quin metall s’utilitza habitualment en la fabricació de joies?",
    opcions: ["Or", "Alumini", "Ferro", "Níquel"],
    respostaCorrecta: "Or",
    tipus: "ús",
  },
  {
    pregunta:
      "Quina propietat química fa que un element sigui un bon conductor elèctric?",
    opcions: [
      "Baixa resistència",
      "Alta densitat",
      "Gran duresa",
      "Gran massa atòmica",
    ],
    respostaCorrecta: "Baixa resistència",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element s'utilitza com a combustible en centrals nuclears?",
    opcions: ["Urani", "Plutoni", "Tori", "Neptuni"],
    respostaCorrecta: "Urani",
    tipus: "ús",
  },
  {
    pregunta: "Quin grup d’elements té una valència de -1?",
    opcions: ["Halògens", "Metalls alcalins", "Gasos nobles", "Lantanidis"],
    respostaCorrecta: "Halògens",
    tipus: "familia",
  },
  {
    pregunta: "Quin és el metall més lleuger?",
    opcions: ["Liti", "Sodi", "Alumini", "Magnesi"],
    respostaCorrecta: "Liti",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element químic es troba en el clor de les piscines?",
    opcions: ["Clor", "Fluor", "Sodi", "Calci"],
    respostaCorrecta: "Clor",
    tipus: "ús",
  },
  {
    pregunta: "Quin element s'utilitza en la fabricació de vidres resistents?",
    opcions: ["Silici", "Carboni", "Ferro", "Alumini"],
    respostaCorrecta: "Silici",
    tipus: "ús",
  },
  {
    pregunta: "Quin element químic és fonamental en la fotosíntesi?",
    opcions: ["Magnesi", "Oxigen", "Carboni", "Fòsfor"],
    respostaCorrecta: "Magnesi",
    tipus: "bioquímica",
  },
  {
    pregunta: "Quin element té el punt de fusió més baix?",
    opcions: ["Hidrogen", "Hel·li", "Neó", "Fluor"],
    respostaCorrecta: "Hel·li",
    tipus: "propietat",
  },
  {
    pregunta:
      "Quin element s'utilitza en la fabricació de làmpades fluorescents?",
    opcions: ["Mercuri", "Neó", "Xenó", "Radó"],
    respostaCorrecta: "Mercuri",
    tipus: "ús",
  },
  {
    pregunta: "Quin element químic és essencial en les dents?",
    opcions: ["Fluor", "Calci", "Magnesi", "Fòsfor"],
    respostaCorrecta: "Fluor",
    tipus: "bioquímica",
  },
  {
    pregunta: "Quina és la massa atòmica aproximada del carboni?",
    opcions: ["12 u", "14 u", "16 u", "10 u"],
    respostaCorrecta: "12 u",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element químic es troba a la sal de taula?",
    opcions: ["Sodi", "Potassi", "Magnesi", "Calci"],
    respostaCorrecta: "Sodi",
    tipus: "composició",
  },
  {
    pregunta: "Quin és el metall més resistent a l'oxidació?",
    opcions: ["Tità", "Plata", "Ferro", "Níquel"],
    respostaCorrecta: "Tità",
    tipus: "propietat",
  },
  {
    pregunta:
      "Quin element es troba en la major part de les bateries recarregables?",
    opcions: ["Liti", "Plom", "Cadmi", "Níquel"],
    respostaCorrecta: "Liti",
    tipus: "ús",
  },
  {
    pregunta:
      "Quina propietat determina la capacitat d’un element per formar enllaços químics?",
    opcions: [
      "Electronegativitat",
      "Número atòmic",
      "Densitat",
      "Massa atòmica",
    ],
    respostaCorrecta: "Electronegativitat",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element és radioactiu de manera natural?",
    opcions: ["Urani", "Tori", "Plutoni", "Radó"],
    respostaCorrecta: "Urani",
    tipus: "propietat",
  },
];

let score = 0;
let totalQuestions = 10;
let questionsAsked = 0;
let timerInterval = null;
let questionsPool = [];

let game_id = 0;
let seed = 0;
let intervalStatus = null;

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
    .map((value) => ({ value, sort: Math.random(seed) }))
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

  shuffleArray(current.opcions).forEach((opcio) => {
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
  stopSaveStatus();
  joc.style.display = "none";
  resultat.style.display = "block";
  missatgeFinal.textContent = `Has aconseguit ${score} de ${totalQuestions} preguntes correctes.`;

  $.ajax({
    url: "https://fun.codelearn.cat/hackathon/game/finalize",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      game_id: game_id,
      data: {},
      score: score,
    }),
    success: function (data, textStatus, jqXHR) {
      alert("Informació guardada correctament");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error en finalitzar de la partida: " + textStatus);
    },
  });
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

document.getElementById("configuracioJoc").addEventListener("submit", (e) => {
  e.preventDefault();
  newGameRequest();
  startSaveStatus();

  const dificultat = document.getElementById("dificultat").value;
  if (dificultat === "facil") totalQuestions = 10;
  else if (dificultat === "mitja") totalQuestions = 15;
  else if (dificultat === "dificil") totalQuestions = 20;

  // Si demanes més preguntes de les que tenim, ajustem
  if (totalQuestions > questions.length) {
    totalQuestions = questions.length;
    alert(
      `Només hi ha ${questions.length} preguntes disponibles. El joc es configurarà amb aquesta quantitat.`
    );
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

//requests to the server
function newGameRequest() {
  $.ajax({
    url: "https://fun.codelearn.cat/hackathon/game/new",
    method: "GET",
    success: function (data, textStatus, jqXHR) {
      if (jqXHR.status === 200) {
        game_id = data["game_id"];
        seed = data["seed"];
      } else {
        alert("Error en la creació de la partida: status " + jqXHR.status);
        reiniciarJoc();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error en la creació de la partida: " + textStatus);
      reiniciarJoc();
    },
  });
}
function startSaveStatus() {
  if (intervalStatus) return; // si ja està corrent no fem res
  intervalStatus = setInterval(() => {
    $.ajax({
      url: "https://fun.codelearn.cat/hackathon/game/store_progress",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        game_id: game_id,
        data: { preguntesRespongudes: questionsAsked },
      }),
      success: function (data, textStatus, jqXHR) {
        console.log("Informació guardada correctament");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error en finalitzar de la partida: " + textStatus);
      },
    });
  }, 15000);
}
function stopSaveStatus() {
  clearInterval(intervalStatus);
  intervalStatus = null;
}
