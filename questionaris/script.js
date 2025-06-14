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
    tipus: "història",
  },
  {
    pregunta: "Quin any va publicar Dmitri Mendeléiev la seva taula periòdica?",
    opcions: ["1869", "1905", "1776", "1890"],
    respostaCorrecta: "1869",
    tipus: "història",
  },
  {
    pregunta: "Quants elements té la taula periòdica actualment?",
    opcions: ["118", "120", "112", "102"],
    respostaCorrecta: "118",
    tipus: "elements",
  },
  {
    pregunta: "Quin és l’element més lleuger de la taula periòdica?",
    opcions: ["Hidrogen", "Hel·li", "Liti", "Carboni"],
    respostaCorrecta: "Hidrogen",
    tipus: "elements",
  },
  {
    pregunta: "Quin és l'element químic més abundant a l'univers?",
    opcions: ["Hidrogen", "Oxigen", "Carboni", "Hel·li"],
    respostaCorrecta: "Hidrogen",
    tipus: "elements",
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
    pregunta: "Quin element químic és essencial en la formació dels ossos?",
    opcions: ["Calci", "Fòsfor", "Magnesi", "Potassi"],
    respostaCorrecta: "Calci",
    tipus: "bioquímica",
  },
  {
    pregunta: "Quin element és imprescindible en la formació d’hemoglobina?",
    opcions: ["Ferro", "Sodi", "Calci", "Potassi"],
    respostaCorrecta: "Ferro",
    tipus: "bioquímica",
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
    pregunta: "Quina és la fórmula química de l’aigua?",
    opcions: ["H₂O", "CO₂", "O₂", "NaCl"],
    respostaCorrecta: "H₂O",
    tipus: "química",
  },
  {
    pregunta: "Quin element s’utilitza com a combustible en centrals nuclears?",
    opcions: ["Urani", "Plutoni", "Tori", "Neptuni"],
    respostaCorrecta: "Urani",
    tipus: "ús",
  },
  {
    pregunta: "Quin element químic es troba a la sal de taula?",
    opcions: ["Sodi", "Potassi", "Magnesi", "Calci"],
    respostaCorrecta: "Sodi",
    tipus: "composició",
  },
  {
    pregunta: "Quin metall s’utilitza sovint en circuits electrònics?",
    opcions: ["Coure", "Plata", "Ferro", "Níquel"],
    respostaCorrecta: "Coure",
    tipus: "ús",
  },
  {
    pregunta: "Quin metall s’utilitza habitualment en la fabricació de joies?",
    opcions: ["Or", "Alumini", "Ferro", "Níquel"],
    respostaCorrecta: "Or",
    tipus: "ús",
  },
  {
    pregunta: "Quin és el metall més resistent a la corrosió?",
    opcions: ["Tità", "Plata", "Ferro", "Níquel"],
    respostaCorrecta: "Tità",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element és gasós a temperatura ambient?",
    opcions: ["Oxigen", "Ferro", "Silici", "Coure"],
    respostaCorrecta: "Oxigen",
    tipus: "propietat",
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
    pregunta:
      "Quin element químic s’utilitza en la fabricació de microprocessadors?",
    opcions: ["Silici", "Ferro", "Coure", "Alumini"],
    respostaCorrecta: "Silici",
    tipus: "ús",
  },
  {
    pregunta:
      "Quin element és fonamental per a la vida i es troba en totes les biomolècules?",
    opcions: ["Carboni", "Oxigen", "Nitrogen", "Calci"],
    respostaCorrecta: "Carboni",
    tipus: "bioquímica",
  },
  {
    pregunta:
      "Quina és la propietat que determina el volum d’un element químic?",
    opcions: [
      "Densitat",
      "Massa atòmica",
      "Electronegativitat",
      "Número atòmic",
    ],
    respostaCorrecta: "Densitat",
    tipus: "propietat",
  },
  {
    pregunta: "Quin metall té el major punt de fusió?",
    opcions: ["Tungstè", "Osmí", "Ferro", "Platina"],
    respostaCorrecta: "Tungstè",
    tipus: "propietat",
  },
  {
    pregunta: "Quina és la principal aplicació del neó?",
    opcions: [
      "Llum en rètols publicitaris",
      "Fabricació de bateries",
      "Producció d'acer",
      "Catalitzador químic",
    ],
    respostaCorrecta: "Llum en rètols publicitaris",
    tipus: "ús",
  },
  {
    pregunta: "Quin element químic s’utilitza en la fabricació de paper?",
    opcions: ["Clor", "Carboni", "Sulfur", "Calci"],
    respostaCorrecta: "Clor",
    tipus: "ús",
  },
  {
    pregunta:
      "Quin element és essencial en la transmissió de senyals nerviosos?",
    opcions: ["Sodi", "Calci", "Magnesi", "Potassi"],
    respostaCorrecta: "Sodi",
    tipus: "bioquímica",
  },
  {
    pregunta:
      "Quina és la propietat que permet als metalls ser estirats en fils?",
    opcions: [
      "Ductilitat",
      "Densitat",
      "Maleabilitat",
      "Resistència elèctrica",
    ],
    respostaCorrecta: "Ductilitat",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element s’utilitza per esterilitzar l’aigua?",
    opcions: ["Clor", "Fluor", "Oxigen", "Nitrogen"],
    respostaCorrecta: "Clor",
    tipus: "ús",
  },
  {
    pregunta: "Quin gas és conegut com a ‘gas hilarant’?",
    opcions: ["Òxid de nitrogen", "Neó", "Xenó", "Argó"],
    respostaCorrecta: "Òxid de nitrogen",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element químic es troba en la majoria de fertilitzants?",
    opcions: ["Nitrogen", "Fòsfor", "Potassi", "Calci"],
    respostaCorrecta: "Nitrogen",
    tipus: "ús",
  },
  {
    pregunta:
      "Quina és la propietat que fa que un element sigui resistent a la fractura?",
    opcions: ["Duresa", "Densitat", "Conductivitat", "Maleabilitat"],
    respostaCorrecta: "Duresa",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element químic és fonamental per a la producció de vidre?",
    opcions: ["Silici", "Sodi", "Coure", "Plata"],
    respostaCorrecta: "Silici",
    tipus: "ús",
  },
  {
    pregunta: "Quin metall s’utilitza principalment en la fabricació d’avions?",
    opcions: ["Alumini", "Ferro", "Níquel", "Coure"],
    respostaCorrecta: "Alumini",
    tipus: "ús",
  },
  {
    pregunta: "Quin element es coneix com a ‘metall líquid’?",
    opcions: ["Mercuri", "Plom", "Sodi", "Bismut"],
    respostaCorrecta: "Mercuri",
    tipus: "propietat",
  },
  {
    pregunta:
      "Quina és la propietat que fa que un element sigui un bon aïllant tèrmic?",
    opcions: [
      "Baixa conductivitat tèrmica",
      "Alta densitat",
      "Alta massa atòmica",
      "Gran resistència elèctrica",
    ],
    respostaCorrecta: "Baixa conductivitat tèrmica",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element químic es fa servir en les bateries recarregables?",
    opcions: ["Liti", "Plom", "Cadmi", "Níquel"],
    respostaCorrecta: "Liti",
    tipus: "ús",
  },
  {
    pregunta:
      "Quina és la propietat que determina la facilitat amb què un metall es pot tallar?",
    opcions: ["Duresa", "Ductilitat", "Resistència mecànica", "Elasticitat"],
    respostaCorrecta: "Duresa",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element s’utilitza com a gas protector en la soldadura?",
    opcions: ["Argó", "Neó", "Xenó", "Radó"],
    respostaCorrecta: "Argó",
    tipus: "ús",
  },
  {
    pregunta: "Quin element és fonamental en la fabricació de semiconductors?",
    opcions: ["Silici", "Carboni", "Coure", "Plata"],
    respostaCorrecta: "Silici",
    tipus: "ús",
  },
  {
    pregunta: "Quin metall s'utilitza en la fabricació de monedes?",
    opcions: ["Níquel", "Ferro", "Alumini", "Or"],
    respostaCorrecta: "Níquel",
    tipus: "ús",
  },
  {
    pregunta: "Quin element és essencial en la síntesi de proteïnes?",
    opcions: ["Nitrogen", "Oxigen", "Sofre", "Fòsfor"],
    respostaCorrecta: "Nitrogen",
    tipus: "bioquímica",
  },
  {
    pregunta: "Quin element es troba en la sang i transporta oxigen?",
    opcions: ["Ferro", "Calci", "Sodi", "Potassi"],
    respostaCorrecta: "Ferro",
    tipus: "bioquímica",
  },
  {
    pregunta: "Quina propietat química fa que un metall sigui maleable?",
    opcions: ["Maleabilitat", "Duresa", "Electronegativitat", "Densitat"],
    respostaCorrecta: "Maleabilitat",
    tipus: "propietat",
  },
  {
    pregunta: "Quin és l'únic metall que és líquid a temperatura ambient?",
    opcions: ["Mercuri", "Plom", "Alumini", "Zinc"],
    respostaCorrecta: "Mercuri",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element és fonamental per a la vida marina?",
    opcions: ["Oxigen", "Carboni", "Sofre", "Calci"],
    respostaCorrecta: "Oxigen",
    tipus: "bioquímica",
  },
  {
    pregunta:
      "Quina és la propietat que indica la facilitat amb què un element guanya electrons?",
    opcions: ["Electronegativitat", "Número atòmic", "Duresa", "Massa atòmica"],
    respostaCorrecta: "Electronegativitat",
    tipus: "propietat",
  },
  {
    pregunta: "Quin gas és el més abundant a l’atmosfera terrestre?",
    opcions: ["Nitrogen", "Oxigen", "Argó", "Diòxid de carboni"],
    respostaCorrecta: "Nitrogen",
    tipus: "elements",
  },
  {
    pregunta: "Quin metall s’utilitza per fabricar cables elèctrics?",
    opcions: ["Coure", "Ferro", "Alumini", "Níquel"],
    respostaCorrecta: "Coure",
    tipus: "ús",
  },
  {
    pregunta:
      "Quina propietat defineix la temperatura en què un element passa de sòlid a líquid?",
    opcions: ["Punt de fusió", "Densitat", "Duresa", "Número atòmic"],
    respostaCorrecta: "Punt de fusió",
    tipus: "propietat",
  },
  {
    pregunta: "Quin element és fonamental en la fotosíntesi?",
    opcions: ["Magnesi", "Oxigen", "Fòsfor", "Carboni"],
    respostaCorrecta: "Magnesi",
    tipus: "bioquímica",
  },
  {
    pregunta: "Quin element químic s’utilitza en la fabricació de miralls?",
    opcions: ["Plata", "Alumini", "Níquel", "Ferro"],
    respostaCorrecta: "Plata",
    tipus: "ús",
  },
  {
    pregunta: "Quin metall es troba en els cables de fibra òptica?",
    opcions: ["Germani", "Coure", "Silici", "Or"],
    respostaCorrecta: "Germani",
    tipus: "ús",
  },
  {
    pregunta: "Quin element es troba en les piles alcalines?",
    opcions: ["Zinc", "Liti", "Níquel", "Plom"],
    respostaCorrecta: "Zinc",
    tipus: "ús",
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
