////////////////////////////// Events binding module //////////////////////////////

// Selects all the interface elements (except for the board cells)
// and binds the event listeners to them
// The name form button act as the actual game initializer

(function() {

    const titleScreen = document.querySelector('.title-screen');
    const nameScreen = document.querySelector('.name-screen');
    const gameScreen = document.querySelector('.game-board');
    const playerNames = document.querySelector('.names');
    const nameInput = document.getElementById('name');
    const nameForm = document.getElementById('name-form');
    const cover = document.getElementById('cover-screen');
    const playButton = document.getElementById('play');
    const playerName = document.getElementById('player');
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
            playerName.textContent = nameInput.value;
            gameApp.beginGame();
            setTimeout(() => {
                nameScreen.classList.remove('visible');
                gameScreen.classList.add('visible');
                playerNames.classList.add('visible');
            }, 300)
        }
        event.preventDefault();
    });

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

})()


// provaButton.addEventListener('click', () => {
//     gameScreen.classList.add('fade');
//     background.classList.add('win');
//     setTimeout(() => {
//         gameScreen.classList.remove('visible');
//     }, 300)
// });