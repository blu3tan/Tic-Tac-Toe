
const titleScreen = document.querySelector('.title-screen');
const nameScreen = document.querySelector('.name-screen');
const boardScreen = document.querySelector('.board-screen');
const gameScreen = document.querySelector('.game-board');
const playerNames = document.querySelector('.names');
const background = document.getElementById('background');
const nameInput = document.getElementById('name');
const nameForm = document.getElementById('name-form');
const cover = document.getElementById('cover-screen');
const playButton = document.getElementById('play');
const startButton = document.getElementById('start-game');
const provaButton = document.getElementById('prova');
const restartButton = document.getElementById('restart-button');

playButton.addEventListener('click', () => {
    titleScreen.classList.add('fade');
    setTimeout(() => {
        titleScreen.classList.remove('visible');
    }, 300)
});

nameForm.addEventListener('submit', () => {
    if (nameInput.value !== '') {
        nameScreen.classList.add('fade');
        setTimeout(() => {
            nameScreen.classList.remove('visible');
            gameScreen.classList.add('visible');
            playerNames.classList.add('visible');
        }, 300)
    }
    event.preventDefault();
});

provaButton.addEventListener('click', () => {
    gameScreen.classList.add('fade');
    background.classList.add('win');
    setTimeout(() => {
        gameScreen.classList.remove('visible');
    }, 300)
});

restartButton.addEventListener('click', () => {
    cover.classList.add('visible');
    cover.classList.add('fade-in');
    setTimeout(() => {
        window.location = window.location;
    }, 350)
});


// function boardWrapper() {
//     const board = [
//         ['1', '2', '3'],
//         ['4', '5', '6'],
//         ['7', '8', '9']
//     ];
//         return {board};
// }
// const boardView = boardWrapper();