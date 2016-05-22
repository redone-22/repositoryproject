"use strict";
/*global $ */
var monsters;

function drawStone() {
    var i, j, resultaat = "";

    for (i = 0; i <= 10; i = i + 1) {;
    }
    for (i = 0; i <= 6; i = i + 1) {
        for (j = 0; j <= 10; j = j + 1) {
            if (j % 2 === 1 && i % 2 === 0) {
                resultaat = resultaat + "<img src='img/tileStone.png' alt='tileStone' class='stone' style='position:absolute;left:" + j * $("#temp").width() + "px;top:" + (i + 1) * $("#temp").height() + "px'>";
            } else {;
            }
        }
    }
    for (i = 0; i <= 10; i = i + 1) {;
    }
    $("#bomber").css({
        "left": 4,
        "top": 4,
        "width": $("#temp").width() - 8,
        "height": $("#temp").height() - 8
    });
    speedh = $("#temp").height();
    speedw = $("#temp").width();
    $("#temp").remove();
    /*    resultaat = resultaat + "<img src='img/tileStone.png' alt='tileStone' class='stone'>";*/
    $("#gamePlatform").append(resultaat);

}



$(document).ready(function () {
    drawStone();

    $("#monster0").css({
        "left": $("#gamePlatform").width() - $("#bomber").width(),
        "top": 4,
        "width": $("#bomber").width(),
        "height": $("#bomber").height()
    });
    $("#monster1").css({
        "left": 4,
        "top": $("#gamePlatform").height() - $("#bomber").height(),
        "width": $("#bomber").width(),
        "height": $("#bomber").height()
    });
    $("#monster2").css({
        "left": $("#gamePlatform").width() - $("#bomber").width(),
        "top": $("#gamePlatform").height() - $("#bomber").height(),
        "width": $("#bomber").width(),
        "height": $("#bomber").height()
    });
    monsters = moveM();
});