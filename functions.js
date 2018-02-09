$(document).ready(function() {
  var o = "o",
      x = "x",
      turns = 0,
      spot1 = $("#spot1"),
      spot2 = $("#spot2"),
      spot3 = $("#spot3"),
      spot4 = $("#spot4"),
      spot5 = $("#spot5"),
      spot6 = $("#spot6"),
      spot7 = $("#spot7"),
      spot8 = $("#spot8"),
      spot9 = $("#spot9");

  $("#board").on("click", function() {
    if (
         (
         spot1.hasClass("O") &&
         spot2.hasClass("O") &&
         spot3.hasClass("O")
         ) ||
         (
         spot4.hasClass("O") &&
         spot5.hasClass("O") &&
         spot6.hasClass("O")
         ) ||
         (
         spot7.hasClass("O") &&
         spot8.hasClass("O") &&
         spot9.hasClass("O")
         ) ||
         (
         spot1.hasClass("O") &&
         spot4.hasClass("O") &&
         spot7.hasClass("O")
         ) ||
         (
         spot2.hasClass("O") &&
         spot5.hasClass("O") &&
         spot8.hasClass("O")
         ) ||
         (
         spot3.hasClass("O") &&
         spot6.hasClass("O") &&
         spot9.hasClass("O")
         ) ||
         (
         spot1.hasClass("O") &&
         spot5.hasClass("O") &&
         spot9.hasClass("O")
         ) ||
         (
         spot3.hasClass("O") &&
         spot5.hasClass("O") &&
         spot7.hasClass("O")
         )
       ) {
         alert("Winner O!");
         $("#board li").text("+");
         $("#board li").removeClass("disable");
         $("#board li").removeClass("O");
         $("#board li").removeClass("X");

       } else if (
            (
            spot1.hasClass("X") &&
            spot2.hasClass("X") &&
            spot3.hasClass("X")
            ) ||
            (
            spot4.hasClass("X") &&
            spot5.hasClass("X") &&
            spot6.hasClass("X")
            ) ||
            (
            spot7.hasClass("X") &&
            spot8.hasClass("X") &&
            spot9.hasClass("X")
            ) ||
            (
            spot1.hasClass("X") &&
            spot4.hasClass("X") &&
            spot7.hasClass("X")
            ) ||
            (
            spot2.hasClass("X") &&
            spot5.hasClass("X") &&
            spot8.hasClass("X")
            ) ||
            (
            spot3.hasClass("X") &&
            spot6.hasClass("X") &&
            spot9.hasClass("X")
            ) ||
            (
            spot1.hasClass("O") &&
            spot5.hasClass("O") &&
            spot9.hasClass("O")
            ) ||
            (
            spot3.hasClass("O") &&
            spot5.hasClass("O") &&
            spot7.hasClass("O")
            )
          ) {
            alert("Winner x!");
            $("#board li").text("+");
            $("#board li").removeClass("disable");
            $("#board li").removeClass("O");
            $("#board li").removeClass("X");
          } else if ( turns === 9 ) {
            alert("It's a tie!");
            $("#board li").text("+");
            $("#board li").removeClass("disable");
            $("#board li").removeClass("O");
            $("#board li").removeClass("X");
            turns = 0;
          } else if ( $(this).hasClass("disable") ) {
            alert("this spot is already filled");
          } else if ( turns%2 === 0 ) {
            turns++;
            $(this).text(o);
            $(this).addClass("disable O");
            if (
                 (
                 spot1.hasClass("O") &&
                 spot2.hasClass("O") &&
                 spot3.hasClass("O")
                 ) ||
                 (
                 spot4.hasClass("O") &&
                 spot5.hasClass("O") &&
                 spot6.hasClass("O")
                 ) ||
                 (
                 spot7.hasClass("O") &&
                 spot8.hasClass("O") &&
                 spot9.hasClass("O")
                 ) ||
                 (
                 spot1.hasClass("O") &&
                 spot4.hasClass("O") &&
                 spot7.hasClass("O")
                 ) ||
                 (
                 spot2.hasClass("O") &&
                 spot5.hasClass("O") &&
                 spot8.hasClass("O")
                 ) ||
                 (
                 spot3.hasClass("O") &&
                 spot6.hasClass("O") &&
                 spot9.hasClass("O")
                 ) ||
                 (
                 spot1.hasClass("O") &&
                 spot5.hasClass("O") &&
                 spot9.hasClass("O")
                 ) ||
                 (
                 spot3.hasClass("O") &&
                 spot5.hasClass("O") &&
                 spot7.hasClass("O")
                 )
               ) {
                 alert("Winner O!");
                 turns = 0;
               } else {
                 turns++;
                 $(this).text(x);
                 $(this).addClass("disable X");
                 if (
                      (
                      spot1.hasClass("X") &&
                      spot2.hasClass("X") &&
                      spot3.hasClass("X")
                      ) ||
                      (
                      spot4.hasClass("X") &&
                      spot5.hasClass("X") &&
                      spot6.hasClass("X")
                      ) ||
                      (
                      spot7.hasClass("X") &&
                      spot8.hasClass("X") &&
                      spot9.hasClass("X")
                      ) ||
                      (
                      spot1.hasClass("X") &&
                      spot4.hasClass("X") &&
                      spot7.hasClass("X")
                      ) ||
                      (
                      spot2.hasClass("X") &&
                      spot5.hasClass("X") &&
                      spot8.hasClass("X")
                      ) ||
                      (
                      spot3.hasClass("X") &&
                      spot6.hasClass("X") &&
                      spot9.hasClass("X")
                      ) ||
                      (
                      spot1.hasClass("X") &&
                      spot5.hasClass("X") &&
                      spot9.hasClass("X")
                      ) ||
                      (
                      spot3.hasClass("X") &&
                      spot5.hasClass("X") &&
                      spot7.hasClass("X")
                      )
                    ) {
                      alert("Winner X!");
                      turns = 0;
                    }
               }
          }

  });
  $("#reset").on("click", function() {
    $("#board li").text("+");
    $("#board li").removeClass("disable");
    $("#board li").removeClass("O");
    $("#board li").removeClass("X");
    turns = 0;
  });
});
