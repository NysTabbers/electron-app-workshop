const upgradeButtonIds = ['double-click', 'autoclick', 'triple-click'];

function spendGold(amount) {
  let currentGold = parseInt(localStorage.getItem("goldAmmount")) || 0;
  if (currentGold < amount) return false;
  currentGold -= amount;
  localStorage.setItem("goldAmmount", currentGold);

  const goldDisplay = document.getElementById("gold");
  if (goldDisplay) goldDisplay.textContent = currentGold;
  return true;
}

function upgradeDoubleClick() {
  if (!spendGold(50)) {
    alert("Not enough gold for Double Click!");
    return;
  }

  let clickValue = parseInt(localStorage.getItem("clickValue")) || 1;

  if (clickValue < 2) {
    clickValue = 2;
    localStorage.setItem("clickValue", clickValue);
    alert("Double Click upgrade applied!");
  } else {
    alert("You already have equal or better click upgrade.");
  }
}

window.autoClickInterval = window.autoClickInterval || null;

// function upgradeAutoClick() {
//   if (!spendGold(150)) {
//     alert("Not enough gold for Auto Click!");
//     return;
//   }

//   if (window.autoClickInterval) {
//     alert("Auto Click already active!");
//     return;
//   }

//   alert("Auto Click upgrade applied!");

//   // Store autoclick state in localStorage
//   localStorage.setItem("autoClickActive", "true");

//   // Use window.autoClickInterval
//   window.autoClickInterval = setInterval(() => {
//     const clicker = document.getElementById("clicker");
//     if (clicker) clicker.click();
//   }, 3000);
// }

function upgradeTripleClick() {
  if (!spendGold(200)) {
    alert("Not enough gold for Triple Click!");
    return;
  }

  let clickValue = parseInt(localStorage.getItem("clickValue")) || 1;

  // Triple click means clickValue = 3, always highest upgrade
  if (clickValue < 3) {
    clickValue = 3;
    localStorage.setItem("clickValue", clickValue);
    alert("Triple Click upgrade applied!");
  } else {
    alert("You already have Triple Click or better.");
  }
}

const upgradeFunctions = {
  'double-click': upgradeDoubleClick,
  'autoclick': upgradeAutoClick,
  'triple-click': upgradeTripleClick
};

upgradeButtonIds.forEach(id => {
  const button = document.getElementById(id);
  if (button) {
    button.addEventListener('click', () => {
      upgradeFunctions[id]();
    });
  }
});

