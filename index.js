let Balance;
let res;

const Height = window.innerHeight;
const ClickHeight = document.getElementById('Click').offsetHeight;
const MenuHeight = document.getElementById('Menu').offsetHeight;
const BalancePath = document.getElementById('Balance');
const ClickPath = document.getElementById('Click');

if (localStorage.getItem('Balance') === null) {
    Balance = 1000;
}
else {
    Balance = parseInt(localStorage.getItem('Balance')) || 1000;
}

function Save() {
    localStorage.setItem('Balance', Balance);
}

function Update() {
    BalancePath.innerHTML = `${Balance}`;
}

window.onload = function() {
    res = Height - 150 - ClickHeight - MenuHeight;
    ClickPath.innerHTML += `<div style="height:${res}px;"></div>`;
    res = null;

    Update();
}

ClickPath.addEventListener('click', function() {
    Balance++;
    Save();
    Update();
});