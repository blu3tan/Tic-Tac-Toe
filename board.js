
////////////////////////////// Board module //////////////////////////////

(function() {

    let board = ['', '', '', '', '', '', '', '', ''];

    function drawBoard() {
    board.forEach((item, index) => {
            const cells = document.querySelectorAll('.cell-mark');
            cells[index].textContent = item;
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
        drawBoard()
    }

    // Methods exported and assigned to the global object
    gameApp.board_readBoard = readBoard
    gameApp.board_writeBoard = writeBoard
    gameApp.board_drawBoard = drawBoard
    gameApp.board_clearBoard = clearBoard

    drawBoard();
})()
