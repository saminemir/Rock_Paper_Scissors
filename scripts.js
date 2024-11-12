const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const Choices = ["Rock ✊", "Paper ✋", "Scissors ✌️"];
const resultText = document.querySelector(".resultText");
const playerSelect = document.querySelector(".playerSelect");
const computerSelect = document.querySelector(".computerSelect");
const Reset = document.querySelector(".resetButton");

let player = 0;
let computer = 0;

Rock.addEventListener("click", () => {
  playGame("Rock ✊");
});
Paper.addEventListener("click", () => {
  playGame("Paper ✋");
});
Scissors.addEventListener("click", () => {
  playGame("Scissors ✌️");
});

Reset.addEventListener("click", () => {
  player = 0;
  computer = 0;
  playerScore.textContent = player;
  computerScore.textContent = computer;
  resultText.classList.remove("greenText", "redText", "brownText");
  resultText.textContent = "NEW Game!";
});

function playGame(playerSelection) {
  const computerSelection = Choices[Math.floor(Math.random() * Choices.length)];

  computerSelect.innerText = `Computer: ${computerSelection}`;
  playerSelect.innerText = `Player: ${playerSelection} `;

  resultText.classList.remove("greenText", "redText", "brownText");

  if (playerSelection === computerSelection) {
    resultText.innerText = "IT'S A TIE!";
    resultText.classList.add("brownText");
  } else {
    switch (playerSelection) {
      case "Rock ✊":
        resultText.innerText =
          computerSelection === "Scissors ✌️" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "Paper ✋":
        resultText.innerText =
          computerSelection === "Rock ✊" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "Scissors ✌️":
        resultText.innerText =
          computerSelection === "Paper ✋" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  switch (resultText.innerText) {
    case "YOU WIN!":
      resultText.classList.add("greenText");
      player++;
      playerScore.textContent = player;
      break;
    case "YOU LOSE!":
      resultText.classList.add("redText");
      computer++;
      computerScore.textContent = computer;
      break;
    case "IT'S A TIE!":
      resultText.classList.add("ylwText");
      break;
  }
}

//button toggle

let lightMode = localStorage.getItem("lightMode");
const toggle = document.querySelector(".toggle");

function enableLightMode() {
  document.body.classList.add("light-mode");
  localStorage.setItem("lightMode", "active");
}

function disableLightMode() {
  document.body.classList.remove("light-mode");
  localStorage.setItem("lightMode", null);
}

if (lightMode === "active") {
  enableLightMode();
}
toggle.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  lightMode !== "active" ? enableLightMode() : disableLightMode();
});
