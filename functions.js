

$(document).ready(function() {

  var spot1 = $("#spot1"),
      spot2 = $("#spot2"),
      spot3 = $("#spot3"),
      spot4 = $("#spot4"),
      spot5 = $("#spot5"),
      spot6 = $("#spot6"),
      spot7 = $("#spot7"),
      spot8 = $("#spot8"),
      spot9 = $("#spot9"),
      playerTurn = 1,
      oneScore = 0,
      twoScore = 0,
      userInput = false,
      playerOne = "",
      playerTwo = "",
      turnsTaken = 0;

  $("#game-enter").css("visibility", "visible").hide().fadeIn(2000);

  $("#getnames").submit(function(e) {
    e.preventDefault(e);
    startGame();
  });

  //When clicking any squares on the board
  $(".container").on("click", function() {


    var p = $("#notifications").has(".noti");

    if ( p.length > 0 ) {
      $(".noti").fadeOut(1000);
      var notiDelete = undefined;
      notiDelete = setTimeout(function() {
        $("#notifications").html("");
        clearTimeout(notiDelete);
      }, 1001);
    }




    //Check who's turn and insert either element
    if ( playerTurn === 1 && turnsTaken < 9) {

      if ( !( $(this).children("p").hasClass("X") ||
              $(this).children("p").hasClass("O") ) &&
              userInput ) {

        $(this).html("<p class='X'>X</p>");

        turnsTaken++;
        checkTurns();
        console.log(turnsTaken);
        playerTurn = 2;



          //Check if player 1 has won
          if (  hasThreeInRow("X") ||
                hasThreeInCol("X") ||
                hasThreeInDiag("X") ) {

                 addScore(1);
                 displayWinner(1);
               }




      }

    } else if ( playerTurn === 2   && turnsTaken < 9) {

      if ( !( $(this).children("p").hasClass("X") ||
              $(this).children("p").hasClass("O") ) &&
              userInput ) {


        $(this).html("<p class='O'>O</p>");

        turnsTaken++;
        checkTurns();
        console.log(turnsTaken);
        playerTurn = 1;



          //Check if player 2 has won
          if (  hasThreeInRow("O") ||
                hasThreeInCol("O") ||
                hasThreeInDiag("O") ) {

                 addScore(2);
                 displayWinner(2);

               }



      }

    }

  });











  //Helper functions

  //Checks if given class is 3x in row
  function hasThreeInRow(cls) {
    console.log("3 row");
    if ( spot1.children("p").hasClass(cls) &&
         spot2.children("p").hasClass(cls) &&
         spot3.children("p").hasClass(cls) ) {

           return true;
         } else if ( spot4.children("p").hasClass(cls) &&
                     spot5.children("p").hasClass(cls) &&
                     spot6.children("p").hasClass(cls) ) {

          return true;
        } else if ( spot7.children("p").hasClass(cls) &&
                    spot8.children("p").hasClass(cls) &&
                    spot9.children("p").hasClass(cls) ) {

          return true;
        } else {

        return false;
      }

  }


  //Check if class is 3x in column
  function hasThreeInCol(cls) {
    console.log("3 col");
    if ( spot1.children("p").hasClass(cls) &&
         spot4.children("p").hasClass(cls) &&
         spot7.children("p").hasClass(cls) ) {

           return true;
         } else if ( spot2.children("p").hasClass(cls) &&
                     spot5.children("p").hasClass(cls) &&
                     spot8.children("p").hasClass(cls) ) {

          return true;
        } else if ( spot3.children("p").hasClass(cls) &&
                    spot6.children("p").hasClass(cls) &&
                    spot9.children("p").hasClass(cls) ) {

          return true;
        } else {

        return false;
      }

  }


  //Check if class is 3x diagonally
  function hasThreeInDiag(cls) {
    console.log("3 diag");
    if ( spot1.children("p").hasClass(cls) &&
         spot5.children("p").hasClass(cls) &&
         spot9.children("p").hasClass(cls) ) {

           return true;
         }  else if ( spot3.children("p").hasClass(cls) &&
                      spot5.children("p").hasClass(cls) &&
                      spot7.children("p").hasClass(cls) ) {

          return true;
        } else {

        return false;
      }

  }

  ///WORKS!!!!!!!!!!!!!!!!!
  //Adds to player score and clears the board
  var disableBoard = undefined;

  function addScore(player) {
    console.log("we have a winner called");
    userInput = false;
    turnsTaken = 0;
    if ( player === 1 ) {

      oneScore++;
      $("#player-one-score").html(oneScore);

    } else if ( player === 2 ) {

      twoScore++;
      $("#player-two-score").html(twoScore);
    }

    disableBoard = setTimeout(clearBoard, 2000);
  }


  ///WORKS!!!!!!!!!!!!!!!!!
  //Clears the board from elements
  function clearBoard() {
    console.log("clearboard called");

    $(".container").each(function() {
      if ( $(this).children("p") ) {
        $(this).html("");
      } else if ( $(this).children("p") ) {
        $(this).html("");
      }

    });

    clearTimeout(disableBoard);
    userInput = true;

  }


  //Displays p in notifications div with winners name
  function displayWinner(player) {
    console.log("display winner called");



    if ( player === 1 ) {

      $("#notifications")
        .html("<p class='noti'>"+playerOne.toUpperCase()+" WON</p>");
      $(".noti").css("visibility", "visible").hide().fadeIn(1000);





    } else if ( player === 2 ) {

      $("#notifications")
        .html("<p class='noti'>"+playerTwo.toUpperCase()+" WON</p>");

      $(".noti").css("visibility", "visible").hide().fadeIn(1000);



    }
  }


  function checkTurns() {
    if ( turnsTaken === 9 ) {
      console.log(turnsTaken, "inside check turns");
      var tieTimer = undefined;
      turnsTaken = 0;

      $("#notifications")
        .html("<p class='noti'>IT'S A TIE</p>");

      $(".noti").css("visibility", "visible").hide().fadeIn(1000);

      tieTimer = setTimeout(function() {

        clearBoard();
        clearTimeout(tieTimer);
      }, 1000);
    }
  }

  $("#reset").on("click", function() {
    oneScore = 0;
    twoScore = 0;

    $("#player-one-score").html(oneScore);
    $("#player-two-score").html(twoScore);

    $("#notifications")
      .html("<p class='noti'>NEW GAME</p>");

    $(".noti").css("visibility", "visible").hide().fadeIn(1000);
    clearBoard();
  });



  function startGame() {

    playerOne = document.forms["names"]["player-one"].value;
    playerTwo = document.forms["names"]["player-two"].value;

    $("#player-one-name").html(playerOne.toUpperCase());
    $("#player-two-name").html(playerTwo.toUpperCase());
    $("#player-one-score").html(oneScore);
    $("#player-two-score").html(twoScore);

    var userInputToTrue = setTimeout(function() {
      userInput = true;
      clearTimeout(userInputToTrue);
    }, 1000);

    var speed = 2000;


    $("header").css("visibility", "visible").hide().fadeIn(speed);
    $("#notifications").css("visibility", "visible").hide().fadeIn(speed);
    $("#board").css("visibility", "visible").hide().fadeIn(speed);
    $("footer").css("visibility", "visible").hide().fadeIn(speed);
    $("header > div > p").css("visibility", "visible").hide().fadeIn(speed);
    $("#game-enter").fadeOut(speed/4);
    $("#notifications")
      .html("<p class='noti'>"+playerOne.toUpperCase()+" TURN</p>");
    $(".noti").css("visibility", "visible").hide().fadeIn(speed/2);




  }

});
