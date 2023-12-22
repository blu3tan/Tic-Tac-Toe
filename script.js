
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
// const provaButton = document.getElementById('prova');
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

// provaButton.addEventListener('click', () => {
//     gameScreen.classList.add('fade');
//     background.classList.add('win');
//     setTimeout(() => {
//         gameScreen.classList.remove('visible');
//     }, 300)
// });

restartButton.addEventListener('click', () => {
    cover.classList.add('visible');
    cover.classList.add('fade-in');
    setTimeout(() => {
        window.location = window.location;
    }, 350)
});

window.addEventListener('load', () => {
    cover.classList.add('fade');
    setTimeout(() => {
        cover.classList.remove('visible');
    }, 350)
});


//////////////////// Board module ////////////////////

const gameApp = {};

(function() {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // draw game board from the array //
    function drawBoard() {
    const playBoard = document.getElementById('play-board');
    board.flat().forEach((item) => {
            const square = document.createElement('div');
            square.textContent = item;
            playBoard.appendChild(square);
        })
    }

    function readBoard() {
        return board;
    }

    function writeBoard(array = 0, index = 0, symbol = '') {
        board[array][index] = symbol
    }

    // Methods exported and assigned to the global object
    gameApp.readBoard = readBoard
    gameApp.writeBoard = writeBoard
    gameApp.drawBoard = drawBoard
    
})()

gameApp.drawBoard();