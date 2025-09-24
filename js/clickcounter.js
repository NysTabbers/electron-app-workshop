let count = 0;

const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");

clicker.addEventListener("click", () => {
    count++
    counter.textContent = count;
});