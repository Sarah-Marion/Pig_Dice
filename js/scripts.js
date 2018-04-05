// Business Logic

var player1= 0;
var player2= 0;
var player1= true;
var totalScore = 0;
var currentRoll;

var Dice = { 1, 2, 3, 4, 5, 6 };

// Functions
var getRandomInt = function (min, max){
    return Math.floor(Math.random() * (max-min))+ min;
};

var showDice = function(currentNumber) {
   $("roll-dice").empty();
   if (currentNumber ===1) {
       $(#roll-dice).append(Dice1 )
    } else if (currentNumber ===2) {
        $(#roll-dice).append(Dice2 )
     } else if (currentNumber ===3) {
        $(#roll-dice).append(Dice3 )
     } else if (currentNumber ===4) {
        $(#roll-dice).append(Dice4 )
     } else if (currentNumber ===5) {
        $(#roll-dice).append(Dice5 )
     } else if (currentNumber ===6) {
        $(#roll-dice).append(Dice6 )
     }
};

var checkIfOne = function (currentNumber){
    if (currentNumber ===1) {
        totalScore = 0;
        $("#total-score").text(totalScore);

        if (player1Turn){
            $("#player1-total").text(player1);
            $("#player2-score").addClass("highlight");
            $("#player1-score").removeClass("highlight");
            player1Turn = false;
        } else {
            $("player2-total").text(player2);
            $("player1-score").addClass ("highlight");
            $("player2-score").removeClass ("highlight");
            player1Turn = true ;
        }
    }else {
        totalScore += currentRoll;
    }
};
var endGame = function() {
    player1 = 0;
    player2= 0;
    totalScore= 0;
    $("#player1-total").text(player1);
    $("#player2-total").text(player2);
};

var declareChampion = function (player1Score, player2Score) {
    if (player1 >= 100) {
        alert("Champion PLAYER1");
        endGame();
    } else if (player2 >=100) {
        alert ("Champion PLAYER2");
        endGame();
    }
};
// User Interface Logic
$(document).ready(function(){
    // Function for Roll Button
    $("#roll-button").click(function(){
        currentRoll=getRandomInt(1,7);
        showDice(currentRoll);
        checkIfOne(currentRoll);
        $("#total-score").text(totalScore);
    });
    // Function for Hold Button
    $("#hold-button").click(function (){
        if (player1Turn){
            player1 += totalScore;
            $("#player1-total").text(player1);
            $("#player2-score").addClass("highlight");
            $("#player1-score").removeclass("highlight");
            player1Turn = false;
        }else {
            player2 += totalScore
            $("#player2-total").text(player2);
            $("#player1-score").addClass("highlight");
            $("#player2-score").removeclass("highlight");
            player1Turn = true;
        }
        totalScore = 0;
        $("#total-score").text(totalScore);
        declareChampion(player1, player2)
    });
});