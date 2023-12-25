
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

    let winner;
    let currentPlayer;
    let roundCount = 0;

    

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
                ++roundCount;
                checkWinner();
                currentPlayer = 'player';
                checkTurn();
            }
    })
    })

    playButton.addEventListener('click', () => {
        titleScreen.classList.add('fade');
        setTimeout(() => {
            titleScreen.classList.remove('visible');
        }, 200)
    });

    restartButton.addEventListener('click', () => {
        cover.classList.add('visible');
        cover.classList.add('fade-in');
        setTimeout(() => {
            window.location = window.location.origin;
        }, 250)
        
    });

    window.addEventListener('load', () => {
        cover.classList.add('fade');
        setTimeout(() => {
            cover.classList.remove('visible');
        }, 250)
    });

    nameForm.addEventListener('submit', () => {
        event.preventDefault();
        if (nameInput.value !== '') {
            nameScreen.classList.add('fade');
            playerName.textContent = nameInput.value;
            firstTurn();
            setTimeout(() => {
                nameScreen.classList.remove('visible');
                gameScreen.classList.add('visible');
                playerNames.classList.add('visible');
            }, 200)
        }
    });

////////////////////////////////////////////////////////////////////////////////

    function checkTurn() {
        currentPlayer == 'player' ?
        botTurn() :
        playerTurn();
    }

    function firstTurn() {
        let randomInitialPlayer = Math.floor(Math.random() * 2);
        randomInitialPlayer === 0 ? 
        playerTurn() :
        botTurn();
    }

    function playerTurn() {
        
    }

    function botTurn() {
       cover.classList.add('visible');
       let emptyCells = [];
       const boardCopy = gameApp.board_readBoard();
       boardCopy.forEach((item, index) => {
        if (item == '') {
            emptyCells.push(index);
        }
       })
       const randomNumber = Math.floor(Math.random() * emptyCells.length);
        setTimeout(() => {
            gameApp.board_writeBoard(emptyCells[randomNumber], 'O');
            gameApp.board_drawBoard();
            ++roundCount;
            checkWinner();
        }, 200)
       currentPlayer = 'bot';
       checkTurn();
       cover.classList.remove('visible');

    }

    function checkWinner() {
        console.log('check')
        const boardCopy = gameApp.board_readBoard();
        winCombo.forEach((combo) => {
            const [a, b, c] = combo;
            if (boardCopy[a] && boardCopy[a] == boardCopy[b] && boardCopy[a] == boardCopy[c]) {
                winner = boardCopy[a];
                displayWinner();
            }
        })

        if (roundCount == 9){
            winner = 'tie';
            displayWinner();
        }
    }

    function displayWinner() {
        if (winner == 'X') {
            gameScreen.classList.add('fade');
            background.classList.add('win');
            setTimeout(() => {
                gameScreen.classList.remove('visible');
            }, 200)
        }
        else if (winner == 'O') {
            gameScreen.classList.add('fade');
            background.classList.add('loose');
            setTimeout(() => {
                gameScreen.classList.remove('visible');
            }, 200)
        }
        else {
            gameScreen.classList.add('fade');
            setTimeout(() => {
                gameScreen.classList.remove('visible');
            }, 200)
        }
    }

    

    gameApp.flow_firstTurn = firstTurn
    gameApp.flow_playerTurn = playerTurn
    gameApp.flow_checkTurn = checkTurn
    gameApp.flow_checkWinner = checkWinner

})()