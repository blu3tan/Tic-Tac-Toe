
////////////////////////////// Board module //////////////////////////////

(function() {

    const playBoard = document.getElementById('play-board');
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // draw game board from the array //
    function drawBoard() {
    board.flat().forEach((item) => {
            const square = document.createElement('div');
            square.textContent = item;
            playBoard.appendChild(square);
            square.addEventListener('click', () => {
                if (square.textContent === '') {
                square.textContent = 'X';
                }
            })
        })
    }

    function readBoard() {
        return board;
    }

    function writeBoard(array = 0, index = 0, symbol = '') {
        board[array][index] = symbol
    }

    function clearBoard() {
        board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        while (playBoard.firstChild) {
            playBoard.removeChild(playBoard.firstChild);
        }
        gameApp.drawBoard()
    }

    // Methods exported and assigned to the global object
    gameApp.readBoard = readBoard
    gameApp.writeBoard = writeBoard
    gameApp.drawBoard = drawBoard
    gameApp.clearBoard = clearBoard

    gameApp.drawBoard();
    
})()
