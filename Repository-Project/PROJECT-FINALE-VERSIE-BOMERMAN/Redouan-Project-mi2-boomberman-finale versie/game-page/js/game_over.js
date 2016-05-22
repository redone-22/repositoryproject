"use strict";
/*global $ */
$(document).ready(function () {
    over();
    setTimeout(function () {
        $("#gameover").fadeIn(3e3);
        $("#try_again").fadeIn(3e3);
        $("#terug").fadeIn(3e3);
        $("#animatie").fadeIn(3e3);
    }, 2e3);

    $("#try_again").on('click', function () {
        stop_over();
        tryAgain();
        $("html").fadeOut(4000);
        setTimeout(function () {
            window.open("game.html", "_self");
        }, 5000);
    });
    $("#terug").on('click', function () {
        stop_over();
        chosen2();
        $("html").fadeOut(4000);
        setTimeout(function () {
            window.open("../menu.html", "_self");
        }, 5000);
    });

});