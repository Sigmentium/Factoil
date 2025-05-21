let Balance = parseInt(localStorage.getItem('Balance')) || 1000;
let Buisnesses = localStorage.getItem('Buisnesses') || {};

function CreateBuisness() {
    const Name = document.getElementById('BuissName').value;
    const Type = document.getElementById('Type').value;
    const Capital = document.getElementById('Capital').value;

    if (Name == null) alert('Необходимо указать название бизнеса');
    else if (Type == "Выберите тип бизнеса") alert('Необходимо указать тип бизнеса');
    else if (Capital > Balance) alert('Стартовое вложение не может быть больше баланса');
    else {
        Buisnesses = {
            Name: Name,
            Type: Type,
            Capital: Capital
        }
        localStorage.setItem('Buisnesses', JSON.stringify(Buisnesses));

        Balance -= Capital;
        localStorage.setItem('Balance', Balance);

        alert('Бизнес успешно создан!');
    }

    CloseWindow('OpenBuissWindow');
}

function CloseBuisness() {}

function CloseWindow(element) {
    document.getElementById('Overlay').style.display = "none";
    document.getElementById(element).style.display = "none";
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