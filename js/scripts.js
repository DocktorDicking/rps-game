/**
 * First version or our rps game.
 *
 * 1: Rock
 * 2: Paper
 * 3: Scissor
 */

var player1;
var player2;
var rounds = 3;
var currentRound = 0;
var result = '';
var names =  ['rock','paper','scissor'];
var winnerWinnerChickenDinner = {'draw': 0,'player1': 0,'player2': 0};
var battleButton = document.getElementById("battle");
var restartButton = document.getElementById("restart");

restartButton.hidden = true;

function play() {
    player1 = Math.floor(Math.random() * 3);
    player2 = Math.floor(Math.random() * 3);

    /**
     * Add logic to determine which value wins (1, 2, 3).
     *
     * Start with checking all the edge cases and think of something that will determine which
     * player wins the round. Also think about how we should register the wins. Making player an object with variables
     * wins and value (value beeing 1, 2 or 3). Check online how to make objects in JS.
     */
    if (player1 === player2) {
        winnerWinnerChickenDinner['draw']++;
        result = 'Draw';
    }
    if (names[player1] === 'rock') {
        if (names[player2] === 'scissor'){
            winnerWinnerChickenDinner['player1']++;
            result = 'player 1 wins';
        }
        if (names[player2] === 'paper') {
            winnerWinnerChickenDinner['player2']++;
            result = 'player 2 wins';
        }
    }
    if (names[player1] === 'paper') {
        if (names[player2] === 'scissor'){
            winnerWinnerChickenDinner['player2']++;
            result = 'player 2 wins';
        }
        if (names[player2] === 'rock') {
            winnerWinnerChickenDinner['player1']++;
            result = 'player 1 wins';
        }
    }
    if (names[player1] === 'scissor') {
        if (names[player2] === 'rock'){
            winnerWinnerChickenDinner['player2']++;
            result = 'player 2 wins';
        }
        if (names[player2] === 'paper') {
            winnerWinnerChickenDinner['player1']++;
            result = 'player 1 wins';
        }
    }

    var playerOutput = "Round " + (currentRound + 1) + "/" + rounds + "<br/>Player1: " + names[player1] + "<br/> Player2: " + names[player2] +
        "<br/>Result: " + result + "<br/><br/>";
    var roundResults =
        "Results: <br/>" +
        "draw: " +  winnerWinnerChickenDinner.draw + "<br/>" +
        "player1: " +  winnerWinnerChickenDinner.player1 + "<br/>" +
        "player2: " +  winnerWinnerChickenDinner.player2 + "<br/>";
    var output = playerOutput + roundResults;

    //Document.write writes stuff to html. You can look at Document being the HTML document.
    document.getElementById('results').innerHTML = output;
    currentRound++;

    if (currentRound === rounds) {
        battleButton.hidden = true;
        restartButton.hidden = false;
        matchResults();
    }
}

function matchResults() {
    var matchResult;
    if  (winnerWinnerChickenDinner['player1'] > winnerWinnerChickenDinner['player2']){
        matchResult = "PLAYER 1 IS VICTORIOUS!!";
    }
    if  (winnerWinnerChickenDinner['player1'] < winnerWinnerChickenDinner['player2']){
        matchResult = "PLAYER 2 IS VICTORIOUS!!";
    }
    if  (winnerWinnerChickenDinner['player1'] === winnerWinnerChickenDinner['player2']){
        matchResult = "IT'S A DRAAAAWWWWW!!";
    }
    if  (winnerWinnerChickenDinner['player1'] + winnerWinnerChickenDinner['player2'] === 0){
        matchResult = "IT'S A DRAAAAWWWWW!!";
    }

    document.getElementById('matchResult').innerHTML = matchResult;
}

function restart() { location.reload();

}





