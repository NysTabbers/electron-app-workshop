const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

document.getElementById("continue").addEventListener("click", () =>{
    window.location.href = "index.html";
})

let goldAmount = parseInt(localStorage.getItem("goldAmmount")) || 0;

const goldDisplay = document.getElementById("gold");
goldDisplay.textContent = goldAmount;