
const titleScreen = document.querySelector('.title-screen');
const nameScreen = document.querySelector('.name-screen');
const boardScreen = document.querySelector('.board-screen');
const gameScreen = document.querySelector('.game-board');
const playerNames = document.querySelector('.names');
const nameInput = document.getElementById('name');
const nameForm = document.getElementById('name-form');
const playButton = document.getElementById('play');
const startButton = document.getElementById('start-game');

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


// function boardWrapper() {
//     const board = [
//         ['1', '2', '3'],
//         ['4', '5', '6'],
//         ['7', '8', '9']
//     ];
//         return {board};
// }
// const boardView = boardWrapper();