// const Main = document.getElementById('Main');

// let DataMain;

// document.getElementById('Click').addEventListener('click', function() {
//     Main.innerHTML++;

//     DataMain = localStorage.setItem('Main', Main);
// });

// window.onload = function() {
//     localStorage.getItem('Main');
// }

const Main = document.getElementById('Main');

let SaveData;

window.onload = function() {
    SaveData = localStorage.getItem('Main');
    if (SaveData !== null) {
        Main.innerHTML = SaveData;
    }
};

document.getElementById('Click').addEventListener('click', function() {
    Main.innerHTML++;
    localStorage.setItem('Main', Main.innerHTML);
});

localStorage.clear();