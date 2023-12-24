
////////////////////////////// Game flow module //////////////////////////////

(function() {

    const cover = document.getElementById('cover-screen');
    const nameForm = document.getElementById('name-form');
    const nameInput = document.getElementById('name');
    const nameScreen = document.querySelector('.name-screen');
    const playerName = document.getElementById('player');
    const playerNames = document.querySelector('.names');
    const gameScreen = document.querySelector('.game-board');
    const titleScreen = document.querySelector('.title-screen');
    const cells = document.querySelectorAll('.cell-mark');
    const playButton = document.getElementById('play');
    const restartButton = document.getElementById('restart-button');

    let currentTurn;
    let randomInitialPlayer = Math.floor(Math.random() * 2);
    

    const winCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

//////////////////// Bind listeners to interface buttons ////////////////////

    cells.forEach((cell) => {
        cell.addEventListener('click', (e)  => {
            if (cell.textContent === '') {
                cell.textContent = 'X';
                gameApp.board_writeBoard(e.target.getAttribute('index'), 'X')
                gameApp.flow_checkWinner();
            }
    })
    })

    playButton.addEventListener('click', () => {
        titleScreen.classList.add('fade');
        setTimeout(() => {
            titleScreen.classList.remove('visible');
        }, 300)
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

    nameForm.addEventListener('submit', () => {
        if (nameInput.value !== '') {
            nameScreen.classList.add('fade');
            playerName.textContent = nameInput.value;
            firstTurn();
            // listenForClick();
            setTimeout(() => {
                nameScreen.classList.remove('visible');
                gameScreen.classList.add('visible');
                playerNames.classList.add('visible');
            }, 300)
        }
        event.preventDefault();
    });

////////////////////////////////////////////////////////////////////////////////

    function checkTurn() {
        currentTurn == 'player' ?
        playerTurn() :
        botTurn();
    }

    function firstTurn() {
        randomInitialPlayer === 0 ? 
        playerTurn() :
        botTurn();
    }

    function playerTurn() {
        console.log('Player moves first');
    }

    function botTurn() {
       // cover.classList.add('visible');
       let emptyCells = [];
       const boardCopy = gameApp.board_readBoard();
       boardCopy.forEach((item, index) => {
        if (item == '') {
            emptyCells.push(index);
        }
       })
       const randomNumber = Math.floor(Math.random() * emptyCells.length);
       gameApp.board_writeBoard(emptyCells[randomNumber], 'O');
       gameApp.board_drawBoard();

    }

    function checkWinner() {
        const boardCopy = gameApp.board_readBoard();
        winCombo.forEach((combo) => {
            const [a, b, c] = combo;
            if (boardCopy[a] && boardCopy[a] == boardCopy[b] && boardCopy[a] == boardCopy[c]) {
                    console.log('win');
            }

        })
    }

    

    gameApp.flow_firstTurn = firstTurn
    gameApp.flow_playerTurn = playerTurn
    gameApp.flow_checkTurn = checkTurn
    gameApp.flow_checkWinner = checkWinner

})()