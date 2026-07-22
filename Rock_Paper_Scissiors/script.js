// ==========================
// Rock Paper Scissors
// ==========================

// Elements
const choices = document.querySelectorAll(".choice");

const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const roundEl = document.getElementById("round");
const resultText = document.getElementById("resultText");

const playerImage = document.getElementById("playerImage");
const computerImage = document.getElementById("computerImage");

const restartBtn = document.getElementById("restartBtn");
const historyBtn = document.getElementById("historyBtn"); // Added
const playAgain = document.getElementById("playAgain");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");

const bestScoreEl = document.getElementById("bestScore");

const soundBtn = document.getElementById("soundBtn");
const themeBtn = document.getElementById("themeBtn");

// Variables
let playerScore = 0;
let computerScore = 0;
let round = 1;
let gameOver = false;

let history = []; // Added

const options = ["rock", "paper", "scissors"];

// High Score
let bestScore = Number(localStorage.getItem("bestScore")) || 0;
bestScoreEl.textContent = bestScore;

// Loading Screen
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 1500);
};

// Click Events
choices.forEach(button => {
    button.addEventListener("click", () => {
        if (gameOver) return;
        play(button.dataset.choice);
    });
});

// Game Logic
function play(playerChoice) {

    const computerChoice =
        options[Math.floor(Math.random() * 3)];

    playerImage.src = `assets/images/${playerChoice}.png`;
    computerImage.src = `assets/images/${computerChoice}.png`;

    let result = "";

    if (playerChoice === computerChoice) {

        result = "Draw";
        resultText.innerHTML = "🤝 Draw";

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {

        playerScore++;
        result = "You Win";
        resultText.innerHTML = "🎉 You Win";

    } else {

        computerScore++;
        result = "Computer Wins";
        resultText.innerHTML = "💀 Computer Wins";

    }

    // Save History
    history.push(
        `Round ${round}: You = ${playerChoice}, Computer = ${computerChoice}, Result = ${result}`
    );

    playerScoreEl.innerHTML = playerScore;
    computerScoreEl.innerHTML = computerScore;

    round++;
    roundEl.innerHTML = Math.min(round, 5) + " / 5";

    winner();
}

// Winner
function winner() {

    if (playerScore === 3 || computerScore === 3 || round > 5) {

        gameOver = true;
        popup.style.display = "flex";

        if (playerScore > computerScore) {

            popupTitle.innerHTML = "🏆 YOU WON";

           if (playerScore > bestScore) {

    bestScore = playerScore;

    localStorage.setItem("bestScore", bestScore);

    bestScoreEl.textContent = bestScore;

}

        } else if (computerScore > playerScore) {

            popupTitle.innerHTML = "😥 COMPUTER WON";

        } else {

            popupTitle.innerHTML = "🤝 MATCH DRAW";

        }

    }

}

// Restart
function resetGame() {

    playerScore = 0;
    computerScore = 0;
    round = 1;
    gameOver = false;

    history = []; // Clear history

    playerScoreEl.innerHTML = 0;
    computerScoreEl.innerHTML = 0;
    roundEl.innerHTML = "1 / 5";

    resultText.innerHTML = "Choose Your Move";

    playerImage.src = "assets/images/question.png";
    computerImage.src = "assets/images/question.png";

    popup.style.display = "none";

}

restartBtn.onclick = resetGame;
playAgain.onclick = resetGame;

// History Button
historyBtn.onclick = () => {

    if (history.length === 0) {
        alert("No game history.");
    } else {
        alert(history.join("\n"));
    }

};

// Dark Mode
themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
};

// Sound Button
let sound = true;

soundBtn.onclick = () => {

    sound = !sound;

    soundBtn.innerHTML = sound
        ? "<i class='fa-solid fa-volume-high'></i>"
        : "<i class='fa-solid fa-volume-xmark'></i>";

};