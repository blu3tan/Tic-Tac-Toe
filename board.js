
////////////////////////////// Board module //////////////////////////////

(function() {

    const playBoard = document.getElementById('play-board');

    let board = ['', '', '', '', '', '', '', '', ''];

    // draw game board from the array //
    function drawBoard() {
    board.forEach((item, index) => {
            const square = document.createElement('div');
            square.textContent = item;
            square.setAttribute('index', index);
            playBoard.appendChild(square);
            square.addEventListener('click', (e) => {
                if (square.textContent === '') {
                    square.textContent = 'X';
                    writeBoard(index, 'X')
                    console.log(board);
                }
            })
        })
    }

    function readBoard() {
        return board;
    }

    function writeBoard(index, symbol) {
        board[index] = symbol
    }

    function clearBoard() {
        board = ['', '', '', '', '', '', '', '', ''];

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
