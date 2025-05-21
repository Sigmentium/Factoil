let row;
let Income = parseInt(localStorage.getItem('Income')) || 0;
let Balance = parseInt(localStorage.getItem('Balance')) || 1000;
let Buisnesses = JSON.parse(localStorage.getItem('Buisnesses')) || {};

function CreateBuisness() {
    const Name = document.getElementById('BuissName').value;
    const Type = document.getElementById('Type').value;
    const Capital = document.getElementById('Capital').value;

    if (Name == null) alert('Необходимо указать название бизнеса');
    else if (Type === "Выберите тип бизнеса") alert('Необходимо указать тип бизнеса');
    else if (Capital > Balance) alert('Стартовое вложение не может быть больше баланса');
    else {
        Buisnesses[Name] = {
            Name: Name,
            Type: Type,
            Capital: Capital
        }
        localStorage.setItem('Buisnesses', JSON.stringify(Buisnesses));

        Balance -= Capital;
        localStorage.setItem('Balance', Balance);

        switch (Type) {
            case 'ShopPord':
                row = Capital / 2;
                row += 50;

                Income += row;
                break;
            case 'ShopCloth':
                row = Capital / 2;
                row += 100;

                Income += row;
                break;
            case 'ShopFlow':
                row = Capital / 2;
                row += 100;

                Income += row;
                break;
            case 'Make':
                row = Capital / 2;
                row += 250;

                Income += row;
                break;
            case 'Taxi':
                row = Capital / 2;
                row += 150;

                Income += row;
                break;
            case 'Trans':
                row = Capital / 2;
                row += 200;

                Income += row;
                break;
        }
        localStorage.setItem('Income', Income);

        alert('Бизнес успешно создан!');

        window.location.reload();
    }

    CloseWindow('OpenBuissWindow');
}

function CloseBuisness() {}

function CloseWindow(element) {
    document.getElementById('Overlay').style.display = "none";
    document.getElementById(element).style.display = "none";
}

document.getElementById('Income').innerHTML = Income;

for (let A in Buisnesses) {
    document.getElementById('Buisnesses').innerHTML += `<div class="Buisness"><H2>${A}</H1></div>`;
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