const upgradeButtonIds = ['double-click', 'autoclick', 'triple-click'];

function upgradeDoubleClick() {
    if(localStorage.getItem("goldAmmount") >= 25) {
  console.log('Double Click Upgrade applied!');
  // Your upgrade logic here
  localStorage.setItem("clicker", parseInt(localStorage.getItem("clicker") + 2));
}
}

function upgradeAutoClick() {
    if(localStorage.getItem("goldAmmount") >= 100) {
  console.log('Auto Click Upgrade applied!');
  // Your upgrade logic here
    setInterval(() => {
        count += 1;
    }, 3);
}
}

function upgradeTripleClick() {
  if(localStorage.getItem("goldAmmount") >= 200) {
  console.log('Triple Click Upgrade applied!');
  // Your upgrade logic here
  clicker.addEventListener("click", () => {
      count += 3;
  });
}
}

const upgradeFunctions = {
  'double-click': upgradeDoubleClick,
  'autoclick': upgradeAutoClick,
  'triple-click': upgradeTripleClick
};

// Add event listeners to each button

upgradeButtonIds.forEach(id => {
  const button = document.getElementById(id);
  if (button) {
    button.addEventListener('click', () => {
      upgradeFunctions[id]();
    });
  }
});
