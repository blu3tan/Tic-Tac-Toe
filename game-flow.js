
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
                playerNames.classList.add('drop');
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
        }, 300)
       currentPlayer = 'bot';
       checkTurn();
       cover.classList.remove('visible');

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

        if (roundCount == 9){
            winner = 'tie';
            displayWinner();
        }
    }

    function displayWinner() {
        playerNames.classList.remove('drop');
        if (winner == 'X') {
            setTimeout(() => {
                cover.style.backgroundColor = '#d03f35';
                gameScreen.classList.add('fade');
                background.classList.add('win');
            }, 550)

            setTimeout(() => {
                gameScreen.classList.remove('visible');
            }, 600)
        }
        else if (winner == 'O') {
            playerNames.classList.remove('drop');
            cover.classList.add('visible');
            setTimeout(() => {
                cover.style.backgroundColor ='#2784be'
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
            playerNames.classList.remove('drop');
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

    function gameOver() {
        if (winner) {
            return
        }
        else {
            currentPlayer = 'player';
            checkTurn();
        }
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
        const letter4 = document.getElementById('end-4').textContent = '';
        const letter5 = document.getElementById('end-5').textContent = '';
        const letter6 = document.getElementById('end-6').textContent = '';
    }

    

    gameApp.flow_firstTurn = firstTurn
    gameApp.flow_playerTurn = playerTurn
    gameApp.flow_checkTurn = checkTurn
    gameApp.flow_checkWinner = checkWinner

})()