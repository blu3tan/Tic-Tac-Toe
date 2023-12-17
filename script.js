
const titleScreen = document.querySelector('.title-screen');
const playButton = document.getElementById('play');
const startButton = document.getElementById('start-game');

playButton.addEventListener('click', () => {
    titleScreen.classList.add('fade');
    setTimeout(() => {
        titleScreen.classList.remove('visible');
    }, 250)
    
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