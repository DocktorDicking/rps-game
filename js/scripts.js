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
var resultParagraph = document.getElementById("results");
var rock1Button = document.getElementById("rock1");
var paper1Button = document.getElementById("paper1");
var scissor1Button = document.getElementById("scissor1");

battleButton.hidden = true;
resultParagraph.hidden = true;

restartButton.hidden = true;
function setValue(player1Choice){
    player1 = player1Choice;
    battleButton.hidden = false;
    resultParagraph.hidden = false;
    if (player1Choice == 0){
        rock1Button.style.background = "Red";
    }
    else {
        rock1Button.style.background = '#EFEFEF';
    }
    if (player1Choice == 1){
        paper1Button.style.background = "Red";
    }
    else {
        paper1Button.style.background = '#EFEFEF';
    }
    if (player1Choice == 2){
        scissor1Button.style.background = "Red";
    }
    else {
        scissor1Button.style.background = '#EFEFEF';
    }
}

function play() {
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
            result = 'player 1 wins the round';
        }
        if (names[player2] === 'paper') {
            winnerWinnerChickenDinner['player2']++;
            result = 'player 2 wins the round';
        }
    }
    if (names[player1] === 'paper') {
        if (names[player2] === 'scissor'){
            winnerWinnerChickenDinner['player2']++;
            result = 'player 2 wins the round';
        }
        if (names[player2] === 'rock') {
            winnerWinnerChickenDinner['player1']++;
            result = 'player 1 wins the round';
        }
    }
    if (names[player1] === 'scissor') {
        if (names[player2] === 'rock'){
            winnerWinnerChickenDinner['player2']++;
            result = 'player 2 wins the round';
        }
        if (names[player2] === 'paper') {
            winnerWinnerChickenDinner['player1']++;
            result = 'player 1 wins the round';
        }
    }

    var playerOutput = "Round " + (currentRound + 1) + "/" + rounds + "<br/>Player1: " + names[player1] + "<br/> George: " + names[player2] +
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
    
    battleButton.hidden = true;
    
    if (currentRound === rounds) {
        if  (winnerWinnerChickenDinner['player1'] === winnerWinnerChickenDinner['player2']){
            rounds = rounds + 1;
        } else {
            battleButton.hidden = true;
            restartButton.hidden = false;
            matchResults();
        }
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


    document.getElementById('matchResult').innerHTML = matchResult;
}

function restart() { location.reload();

}





