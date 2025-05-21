let res;
let Balance;

const Height = window.innerHeight;
const ClickHeight = document.getElementById('Click').offsetHeight;
const MenuHeight = document.getElementById('Menu').offsetHeight;

const BalancePath = document.getElementById('Balance');
const ClickPath = document.getElementById('Click');

function Save() {
    localStorage.setItem('Balance', Balance);
}

function Update() {
    BalancePath.innerHTML = `${Balance}`;
}

window.onload = function() {
    if (!localStorage.getItem('Balance')) {
        Balance = 1000;
    }
    else {
        Balance = parseInt(localStorage.getItem('Balance')) || 1000;
    }
    
    res = Height - 150 - ClickHeight - MenuHeight;
    ClickPath.innerHTML += `<div style="height:${res}px;"></div>`;

    Update();
}

ClickPath.addEventListener('click', function() {
    Balance++;
    Save();
    Update();
});