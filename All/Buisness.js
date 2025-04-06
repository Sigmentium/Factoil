let DB;
let Data;
const Buisnesses = indexedDB.open('Buisnesses', 1);
let NewBuisness;

Buisnesses.onupgradeneeded = function(event) {
    DB = event.target.result;

    const Store = DB.createObjectStore("Buisnesses", {
        keyPath: 'id',
        autoIncrement: true
    });

    Store.createIndex("Name", "Name", { unique: false });
    Store.createIndex("Type", "Type", { unique: false });
    Store.createIndex("Capital", "Capital", { unique: false });
};

Buisnesses.onsuccess = function(event) {
    DB = event.target.result;

    Get();
};

function Get() {
    if (!DB) {
        return;
    }

    const Store = DB.transaction(["Buisnesses"], "readonly").objectStore("Buisnesses");

    Data = Store.getAll();

    Data.onsuccess = () => {
        Data = Data.result;

        for (let A of Object.keys(Data)) {
            document.getElementById('Buisnesses').innerHTML += `<div id="Buisness"><H3>${Data[A].Name}</H3></div><br>`;
        }
    };
}

function Update(buisness) {
    if (!DB) {
        return;
    }

    const Store = DB.transaction(["Buisnesses"], "readwrite").objectStore("Buisnesses");

    Store.add(buisness);
}

function CreateBuisness() {
    const Name = document.getElementById('BuissName').value;
    const Type = document.getElementById('Type').value;
    const Capital = document.getElementById('Capital').value;

    if (Capital > Balance) {
        alert('Ошибка. Слишком большое стартовое вложение');
        return;
    }
    else {
        NewBuisness = {
            "Name": Name,
            "Type": Type,
            "Capital": Capital
        }

        Balance -= Capital;
        localStorage.setItem('Balance', Balance);

        Update(NewBuisness);

        alert('Успешное создание!');

        window.location.reload();
    }
}

function CloseBuisness() {}

function CloseWindow(element) {
    document.getElementById('Overlay').style.display = "none";
    document.getElementById(element).style.display = "none";
}

window.onload = function() {
    if (!localStorage.getItem('Balance')) {
        location.href = "index.html";
    }
    else {
        Balance = parseInt(localStorage.getItem('Balance')) || null;
    }
}

document.getElementById('Open').addEventListener('click', function() {
    document.getElementById('Overlay').style.display = "block";
    document.getElementById('CloseBuissWindow').style.display = "none";
    document.getElementById('OpenBuissWindow').style.display = "block";
});

document.getElementById('Close').addEventListener('click', function() {
    document.getElementById('Overlay').style.display = "block";
    document.getElementById('OpenBuissWindow').style.display = "none";
    document.getElementById('CloseBuissWindow').style.display = "block";
});

// indexedDB.deleteDatabase("Buisnesses");