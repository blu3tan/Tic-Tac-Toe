
////////////////////////////// Game flow module //////////////////////////////

(function() {

    const background = document.getElementById('background');
    const cover = document.getElementById('cover-screen');
    const curtain = document.getElementById('end-curtain');
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
    let roundCount = 0; // to declare tie after the board if full

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

    // The game is always played by a user vs a bot
    // The player has 'X' and the bot always 'O'
    // So in the event listener for the cells there is only the player logic

    cells.forEach((cell) => {
        cell.addEventListener('click', (e)  => {
            if (cell.textContent === '') {
                cell.classList.add('red')
                cell.textContent = 'X';
                gameApp.board_writeBoard(e.target.getAttribute('index'), 'X')
                ++roundCount;
                checkWinner();
                gameOver();
            }
    })
    })

    playButton.addEventListener('click', () => {
        titleScreen.classList.add('fade');
        setTimeout(() => {
            titleScreen.classList.remove('visible');
            nameInput.focus();
        }, 200)
    });

    restartButton.addEventListener('click', () => {
        curtain.classList.add('drop');
        setTimeout(() => {
            resetGameState();
        }, 300)
        setTimeout(() => {
            curtain.classList.remove('drop');
        }, 1000)
        
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            curtain.classList.add('up');
        }, 300)
    });

    // This submit the player name and also starts the game
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
                playerNames.classList.add('drop');
            }, 200)
        }
    });

///////////////////////////////// Logic for the game flow //////////////////////////////////////

    function checkTurn() {
        currentPlayer == 'player' ?
        botTurn() :
        playerTurn();
    }

    // A random player moves first
    function firstTurn() {
        let randomInitialPlayer = Math.floor(Math.random() * 2);
        randomInitialPlayer === 0 ? 
        playerTurn() :
        botTurn();
    }

    function playerTurn() {
        return
    }

    function botTurn() {
        cover.classList.add('visible');
        randomMark();
        currentPlayer = 'bot';
        checkTurn();
        cover.classList.remove('visible');

    }

//////////////////////////////////// Bot AI //////////////////////////////////

    // The bot picks a random empty spot on the board
    function randomMark() {
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
        }, 400)
    }

    function checkWinner() {
        const boardCopy = gameApp.board_readBoard();
        winCombo.forEach((combo) => {
            const [a, b, c] = combo;
            if (boardCopy[a] && boardCopy[a] == boardCopy[b] && boardCopy[a] == boardCopy[c]) {
                winner = boardCopy[a];
                displayWinner();
            }
        })
            if (roundCount == 9 && !winner){
                winner = 'tie';
                displayWinner();
            }
    }

    function displayWinner() {
        playerNames.classList.remove('drop');
        if (winner == 'X') {
            setTimeout(() => {
                gameScreen.classList.add('fade');
                background.classList.add('win');
            }, 550)

            setTimeout(() => {
                gameScreen.classList.remove('visible');
            }, 600)
        }
        else if (winner == 'O') {
            cover.classList.add('visible');
            setTimeout(() => {
                gameScreen.classList.add('fade');
                background.classList.add('loose');
            }, 550)
            setTimeout(() => {
                botWinText();
                gameScreen.classList.remove('visible');
                cover.classList.remove('visible');
            }, 600)
        }
        else {
            cover.classList.add('visible');
            setTimeout(() => {
                gameScreen.classList.add('fade');
            }, 550)
            setTimeout(() => {
                tieText();
                gameScreen.classList.remove('visible');
                cover.classList.remove('visible');
            }, 600)
        }
    }

    // Waits for the board to be full to call a tie
    function gameOver() {
        if (winner) {
            return
        }
        else {
            currentPlayer = 'player';
            checkTurn();
        }
    }

    function resetGameState() {
        gameApp.board_clearBoard()
        titleScreen.classList.remove('fade');
        nameScreen.classList.remove('fade');
        gameScreen.classList.remove('fade');
        titleScreen.classList.add('visible');
        nameScreen.classList.add('visible');
        gameScreen.classList.add('visible');
        background.classList.remove('win');
        background.classList.remove('loose');
        cells.forEach((cell) => {
            cell.classList.remove('red');
        })
        nameInput.value = '';
        winner = '';
        currentPlayer = '';
        roundCount = 0;
        winnerColor = '';
        originalText();
    }

    function botWinText() {
        const letter1 = document.getElementById('end-1').textContent = 'B';
        const letter2 = document.getElementById('end-2').textContent = 'O';
        const letter3 = document.getElementById('end-3').textContent = 'T';
    }

    function tieText() {
        const letter1 = document.getElementById('end-1').textContent = 'T';
        const letter2 = document.getElementById('end-2').textContent = 'I';
        const letter3 = document.getElementById('end-3').textContent = 'E';
        const letter4 = document.getElementById('end-4').textContent = 'L';
        const letter5 = document.getElementById('end-5').textContent = 'O';
        const letter6 = document.getElementById('end-6').textContent = 'L';
    }

    function originalText() {
        const letter1 = document.getElementById('end-1').textContent = 'Y';
        const letter2 = document.getElementById('end-2').textContent = 'O';
        const letter3 = document.getElementById('end-3').textContent = 'U';
        const letter4 = document.getElementById('end-4').textContent = 'W';
        const letter5 = document.getElementById('end-5').textContent = 'I';
        const letter6 = document.getElementById('end-6').textContent = 'N';
    }

})()