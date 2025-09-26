let count = 0;
let goldAmmount = 0;

const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const gold = document.getElementById("gold");

clicker.addEventListener("click", () => {
    count++
    counter.textContent = count;

    if(count % 10 === 0){
    goldAmmount++
    gold.textContent = goldAmmount;
    
}
});