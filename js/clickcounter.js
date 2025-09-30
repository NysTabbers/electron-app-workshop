let count = parseInt(localStorage.getItem("count")) || 0;
let goldAmmount = parseInt(localStorage.getItem("goldAmmount")) || 0;

const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const gold = document.getElementById("gold");

counter.textContent = count;
gold.textContent = goldAmmount;

clicker.addEventListener("click", () => {
    count++
    counter.textContent = count;

    if (count % 1 === 0) {
        goldAmmount++
        gold.textContent = goldAmmount;
    }

    localStorage.setItem("count", count);
    localStorage.setItem("goldAmmount", goldAmmount);
});

function resetGame() {
    count = 0;
    goldAmmount = 0;
    counter.textContent = count;
    gold.textContent = goldAmmount;
    localStorage.setItem("count", count);
    localStorage.setItem("goldAmmount", goldAmmount);
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);