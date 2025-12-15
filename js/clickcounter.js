let count = parseInt(localStorage.getItem("count")) || 0;
let goldAmmount = parseInt(localStorage.getItem("goldAmmount")) || 0;
let clickValue = parseInt(localStorage.getItem("clickValue")) || 1;

const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const gold = document.getElementById("gold");

counter.textContent = count;
gold.textContent = goldAmmount;

clicker.addEventListener("click", () => {
    count += clickValue;
    counter.textContent = count;

    goldAmmount += clickValue;
    gold.textContent = goldAmmount;

    localStorage.setItem("count", count);
    localStorage.setItem("goldAmmount", goldAmmount);
});

function resetGame() {
    count = 0;
    goldAmmount = 0;
    clickValue = 1;
    counter.textContent = count;
    gold.textContent = goldAmmount;
    localStorage.setItem("count", count);
    localStorage.setItem("goldAmmount", goldAmmount);
    localStorage.setItem("clickValue", clickValue);

    if (window.autoClickInterval) {
        clearInterval(window.autoClickInterval);
        window.autoClickInterval = null;
    }
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);