const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

document.getElementById("upgrade-page").addEventListener("click", () => {
    window.location.href = "upgrade.html";
})

document.getElementById("continue").addEventListener("click", () =>{
    window.location.href = "index.html";
})