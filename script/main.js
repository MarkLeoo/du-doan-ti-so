const score1 = document.querySelector(".score-1");
const score2 = document.querySelector(".score-2");
const btnRandom = document.querySelector(".btn-random");

btnRandom.addEventListener("click", () => {
    playGame();
})

function playGame() {
    let n = 0;
    let randomScore = setInterval(() => {
        score1.innerHTML = Math.floor(Math.random() * 11);
        score2.innerHTML = Math.floor(Math.random() * 11);
        n++;
        if (n === 10) {
            clearInterval(randomScore);
        }
    }, 50);
}