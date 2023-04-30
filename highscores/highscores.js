const highscoresList = document.querySelector("#highScoresList");
const highscores = JSON.parse(localStorage.getItem("highScores")) || [];


const result = highscores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
    .join("");

highscoresList.innerHTML = result;

//  = highscores;

