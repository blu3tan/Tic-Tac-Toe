
////////////////////////////// Board module //////////////////////////////

(function() {

    const playBoard = document.getElementById('play-board');

    let board = ['', '', '', '', '', '', '', '', ''];

    // draw game board from the array //
    function drawBoard() {
    board.forEach((item, index) => {
            const cells = document.querySelectorAll('.cell-mark');
            cells[index].textContent = item;
            // square.setAttribute('index', index);
            // playBoard.appendChild(square);
            // square.addEventListener('click', ()  => {
            //     if (square.textContent === '') {
            //         square.textContent = 'X';
            //         writeBoard(index, 'X')
            //         gameApp.flow_checkWinner();
            //     }
            // })
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
        gameApp.board_drawBoard()
    }

    // Methods exported and assigned to the global object
    gameApp.board_readBoard = readBoard
    gameApp.board_writeBoard = writeBoard
    gameApp.board_drawBoard = drawBoard
    gameApp.board_clearBoard = clearBoard

    drawBoard();
   
    
})()
