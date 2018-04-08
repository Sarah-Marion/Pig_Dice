// Business Logic
function Player(playerName, turnScore, totalScore) {
  this.playerName = playerName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function () {
  var diceValues = [1, 2, 3, 4, 5, 6];
  var rollValue = diceValues[Math.floor(Math.random() * diceValues.length)];
  if (rollValue === 1) {
      this.turnScore = 0;
  } else {
      this.turnScore = this.turnScore + rollValue;
  };
  return rollValue;
}

Player.prototype.score = function () {
  this.totalScore = this.turnScore + this.totalScore;
  this.turnScore = 0;
}

var Dice = {
  one: "images/dice1.png",
  two: "images/dice2.png",
  three: "images/dice3.png",
  four: "images/dice4.png",
  five: "images/dice5.png",
  six: "images/dice6.png"
}

$(document).ready(function () {
  var allPlayers = [];
  document.getElementById("big-menu").style.width = "100%";

  $(".closebtn").click(function () {
      document.getElementById("big-menu").style.width = "0%";
      $("#navigation").show();
  });

  $("form#create-player").submit(function (event) {
      event.preventDefault();
      $(".game").show();
      $(".form-hidden").hide();
      document.getElementById("big-menu").style.width = "0%";

      var player1Name = $("input#player1-name").val();
      var player2Name = $("input#player2-name").val();

      var player1 = new Player(player1Name, 0, 0)
      var player2 = new Player(player2Name, 0, 0)
      allPlayers.push(player1);
      allPlayers.push(player2);
      var numberDice = parseInt($('input#dice_number').val());
      var allRolls = [];
      var playTo = parseInt($('input#play_to').val());

      $(".playTo").text(playTo);
      $(".player1").show();

      $(".player1-name").text(player1.playerName);
      $(".player1-total-score").html("<span class='player1-total-score'>" + player1.totalScore + "</span>");
      
// User Interface Logic
      $("button#player1-roll").click(function (event) {
          event.preventDefault();
          allRolls = [];
          for (var rolls = 1; rolls <= numberDice; rolls += 1) {
              var roll = player1.roll();
              allRolls.push(roll);
          }
          if (allRolls.indexOf(1) === -1) {
              allRolls.forEach(function (diceRoll) {
                  $(".player1-rolled-number").text(allRolls);
                  $(".player1-turn-score").text(player1.turnScore);
                  $(".player2-scored1").hide();
                  $(".player1-scored1").hide();
                  $(".col1").addClass("red");
                  $(".col2").removeClass("green");
              });
          } else {
              player1.turnScore = 0;
              $(".player1").hide();
              $(".player2").show();
              $(".player1-scored1").show();
              $(".player2-scored1").hide();
              $(".player1-rolled-number").text("");
              $(".player1-turn-score").text("");
          }
          if (roll === 1) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.one + ">")
          } else if (roll === 2) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.two + ">")
          } else if (roll === 3) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.three + ">")
          } else if (roll === 4) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.four + ">")
          } else if (roll === 5) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.five + ">")
          } else if (roll === 6) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.six + ">")
          }
          console.log(roll);
      });

      $("button#player1-hold").click(function (event) {
          event.preventDefault();
          player1.score();
          $(".player1-total-score").text(player1.totalScore);
          $(".player1-rolled-number").text("");
          $(".player1-turn-score").text("");
          //changed 100 to play to
          if (player1.totalScore >= playTo) {
              $(".game").hide();
              $(".player1-winner").show();
          } else {
              $(".player1").hide();
              $(".player2").show();
              $(".player2-scored1").hide();
          }
      });

      $(".player2-name").text(player2.playerName);
      $(".player2-total-score").html("<span class='player2-total-score'>" + player2.totalScore + "</span>");

      $("button#player2-roll").click(function (event) {
          event.preventDefault();
          allRolls = [];
          for (var rolls = 1; rolls <= numberDice; rolls += 1) {
              var roll = player2.roll();
              allRolls.push(roll);
          }
          if (allRolls.indexOf(1) === -1) {
              allRolls.forEach(function (diceRoll) {
                  $(".player2-rolled-number").text(allRolls);
                  $(".player2-turn-score").text(player2.turnScore);
                  $(".player1-scored1").hide();
                  $(".player2-scored1").hide();
                  $(".col1").removeClass("red");
                  $(".col2").addClass("green")
              });
          } else {
              player2.turnScore = 0;
              $(".player2").hide();
              $(".player1").show();
              $(".player2-scored1").show();
              $(".player1-scored1").hide();
              $(".player2-rolled-number").text("");
              $(".player2-turn-score").text("");
          }
          if (roll === 1) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.one + ">")
          } else if (roll === 2) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.two + ">")
          } else if (roll === 3) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.three + ">")
          } else if (roll === 4) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.four + ">")
          } else if (roll === 5) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.five + ">")
          } else if (roll === 6) {
              $("#roll").html("<img class='images' height='100' width='100' src=" + Dice.six + ">")
          }
          console.log(roll);
      });

      $("button#player2-hold").click(function (event) {
          event.preventDefault();
          player2.score();
          $(".player2-total-score").text(player2.totalScore);
          $(".player2-rolled-number").text("");
          $(".player2-turn-score").text("");
          if (player2.totalScore >= playTo) {
              $(".game").hide();
              $(".player2-winner").show();
          } else {
              $(".player1").show();
              $(".player2").hide();
              $(".player1-scored1").hide();
          }
      });

      $("button#reset").click(function (event) {
          event.preventDefault();
          document.getElementById("big-menu").style.width = "100%";
          $(".form-hidden").show();
          $(".player1-winner").hide();
          $(".player2-winner").hide();
          player1.totalScore = 0;
          player2.totalScore = 0;
          $(".player1-rolled-number").text("");
          $(".player1-turn-score").text("");
          $(".player1-total-score").text("");
          $(".player2-rolled-number").text("");
          $(".player2-turn-score").text("");
          $(".player2-total-score").text("");
          $(".player1").hide();
          $(".player2").hide();

      });


  });
});