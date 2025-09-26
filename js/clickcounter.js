let count = 0;
let goldAmmount = 0;

const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const gold = document.getElementById("gold");

counter.textContent = count;
gold.textContent = goldAmmount;

clicker.addEventListener("click", () => {
    count++
    counter.textContent = count;

    if (count % 10 === 0) {
        goldAmmount++
        gold.textContent = goldAmmount;
    }

    localStorage.setItem("count", count);
    localStorage.setItem("goldAmmount", goldAmmount);
});