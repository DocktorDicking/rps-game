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
var winner;

for (var i = 0; i < rounds; i++) {
    player1 = Math.floor(Math.random() * 3) + 1;
    player2 = Math.floor(Math.random() * 3) + 1;

    /**
     * Add logic to determine which value wins (1, 2, 3).
     *
     * Start with checking all the edge cases and think of something that will determine which
     * player wins the round. Also think about how we should register the wins. Making player an object with variables
     * wins and value (value beeing 1, 2 or 3). Check online how to make objects in JS.
     */
    if (player1 === player2) {
        //No winner, play round again.
    }

    //Document.write writes stuff to html. You can look at Document being the HTML document.
    document.write("Round " + i);
    document.write("<br/>Player1: " + player1 + "<br/> Player2: " + player2 + "<br/><br/>");
}

