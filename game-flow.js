
////////////////////////////// Game flow module //////////////////////////////

(function() {

    let randomInitialPlayer = Math.floor(Math.random() * 2);
    
    function beginGame() {
        randomInitialPlayer === 0 ? 
        playerTurn() :
        botTurn();
    }

    function playerTurn() {
        console.log('Player moves first');
    }

    function botTurn() {
        console.log('Bot moves first');
    }

    gameApp.beginGame = beginGame

})()