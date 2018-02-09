$(document).ready(function() {


  //Display and position the start game window
  $("#game-enter").hide();
  $("#game-enter").css("top", String(window.innerHeight*0.37)+"px");
  $("#game-enter").css("left", String(window.innerWidth*0.3) +"px");
  $("#game-enter").fadeIn(2000).css("display", "flex");

  //Variables
  var p1 = "",
      p1Score = 0,
      p2 = "",
      p2Score = 0,
      turn = 1,
      turnsLeft = 0;


  //Get and set the player names, call startGame
  $("form").submit(function(e) {

    e.preventDefault(e);
    p1 = document.forms["names"]["player-name-one"].value;
    p2 = document.forms["names"]["player-name-two"].value;
    $("#game-enter").hide();
    $("#player-one-name").html(p1);
    $("#player-two-name").html(p2);
    startGame();

  });

  $("#reset").on("click", function() {
    resetGame();
  });

  function startGame() {
    //Toggle turn shown
    if ( turn === 1 ) {
      $("#score").html("<p>"+p1+" turn.</p>");
    } else {
      $("#score").html("<p>"+p2+" turn.</p>");
    }
    //Animate the score box movement
    $("#game").animate({marginTop: "3%"}, 1000);
    $("#score").slideDown(1000);
    $("#game").animate({marginTop: "6%"}, 1000);
    $("#score").slideUp(1000);

  };


  //Display value corresponding to player, toggle turns and
  //count turns left
  $(".spot").on("click", function() {
    //alert($(this)[0].id);

    var thisSpotId = "#"+$(this)[0].id,
        thisSpot = $(this)[0];

    if (turn === 1 && turnsLeft < 9 &&
        !($(thisSpot).hasClass("activeO") ||
        $(thisSpot).hasClass("activeX") )  ) {

      $(thisSpotId+ " > p.X").fadeIn(100);
      $(thisSpot).addClass("activeX");
      $(thisSpotId+ " > p.X").css("display", "block");
      turn = 2;
      turnsLeft++;
      checkForWinner();

    } else if ( turn === 2 && turnsLeft < 9 &&
                !($(thisSpotId).hasClass("activeX") ||
                $(thisSpotId).hasClass("activeO") ) ) {

      $(thisSpotId+ " > p.O").fadeIn(100);
      $(thisSpot).addClass("activeO");
      $(thisSpotId+ " > p.O").css("display", "block");
      turn = 1;
      turnsLeft++;

      checkForWinner();

    }

  });

  function checkForWinner() {
    var winnerX = [],
        winnerO = [],
        winner = 0;

    //Push 0 or 1 to array if has active class
    $("#ul li").each(function() {

      if ( $(this).hasClass("activeX") ) {
        winnerX.push(1);
      } else {
        winnerX.push(0);
      }

      if ( $(this).hasClass("activeO") ) {
        winnerO.push(1);
      } else {
        winnerO.push(0);
      }

    });

    //Check if X has right patterns
    for ( var i = 0; i < winnerX.length; i++ ) {

      if ( winnerX[0] === 1 && winnerX[1] === 1 && winnerX[2] === 1 ) {
        winner = 1;
      } else if ( winnerX[3] === 1 && winnerX[4] === 1 && winnerX[5] === 1 ) {
        winner = 1;
      } else if ( winnerX[6] === 1 && winnerX[7] === 1 && winnerX[8] === 1 ) {
        winner = 1;
      } else if ( winnerX[0] === 1 && winnerX[3] === 1 && winnerX[6] === 1 ) {
        winner = 1;
      } else if ( winnerX[1] === 1 && winnerX[4] === 1 && winnerX[7] === 1 ) {
        winner = 1;
      } else if ( winnerX[2] === 1 && winnerX[5] === 1 && winnerX[8] === 1 ) {
        winner = 1;
      } else if ( winnerX[0] === 1 && winnerX[4] === 1 && winnerX[8] === 1 ) {
        winner = 1;
      } else if ( winnerX[2] === 1 && winnerX[4] === 1 && winnerX[6] === 1 ) {
        winner = 1;
      }
      winnerX = [];
    }

    //Check if O has right patterns
    for ( var i = 0; i < winnerO.length; i++ ) {

      if ( winnerO[0] === 1 && winnerO[1] === 1 && winnerO[2] === 1 ) {
        winner = 2;
      } else if ( winnerO[3] === 1 && winnerO[4] === 1 && winnerO[5] === 1 ) {
        winner = 2;
      } else if ( winnerO[6] === 1 && winnerO[7] === 1 && winnerO[8] === 1 ) {
        winner = 2;
      } else if ( winnerO[0] === 1 && winnerO[3] === 1 && winnerO[6] === 1 ) {
        winner = 2;
      } else if ( winnerO[1] === 1 && winnerO[4] === 1 && winnerO[7] === 1 ) {
        winner = 2;
      } else if ( winnerO[2] === 1 && winnerO[5] === 1 && winnerO[8] === 1 ) {
        winner = 2;
      } else if ( winnerO[0] === 1 && winnerO[4] === 1 && winnerO[8] === 1 ) {
        winner = 2;
      } else if ( winnerO[2] === 1 && winnerO[4] === 1 && winnerO[6] === 1 ) {
        winner = 2;
      }
      winnerO = [];
    }
    //Check who won and handle
    if ( winner === 1) {
      handleWinner(1);
    } else if ( winner === 2) {
      handleWinner(2);
    }


  }

  function handleWinner(player) {

    if ( player === 1) {
      //Add to player 1 score and display
      p1Score++;
      $("#p1-score").html(p1Score);

      //Animate score window
      $("#game").animate({marginTop: "3%"}, 1000);
      $("#score").slideDown(1000);
      $("#score").html("<p>"+p1+" won</p>")
      $("#game").animate({marginTop: "6%"}, 1000);
      $("#score").slideUp(1000);


    } else {

      //Add to score and display
      p2Score++;
      $("#p2-score").html(p2Score);

      //Animate score window
      $("#game").animate({marginTop: "3%"}, 1000);
      $("#score").slideDown(1000);
      $("#score").html("<p>"+p2+" won</p>")
      $("#game").animate({marginTop: "6%"}, 1000);
      $("#score").slideUp(1000);

    }
    //resetGameAuto();
  }

  function resetGame() {

    //Remove active classes from all li elements
    $("#tictac ul li").each(function() {
      $(this).removeClass("activeX");
      $(this).removeClass("activeO");
      $("#tictac ul li p").each(function() {
        $("#tictac ul li p").css("display", "none");
      });
    });
    turnsLeft = 0;
    startGame();


  }

});
