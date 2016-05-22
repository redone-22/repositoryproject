"use strict";
/*global $ */
var bomberlife = 3;

$(document).ready(function (e) {
    hearth();
});

function hearth() {

    var teller = $(".hartimg").length;

    for (i = 0; i < teller; i++) {
        $('#hart' + i).remove();
    }
    var i;
    for (i = 0; i < bomberlife; i = i + 1) {
        $('#harten').prepend("<img class='hartimg' id='hart" + i + "' src='img/hearth.png' />");
    }

}

function hearthCreate() {

    var teller = $(".hartimg").length;

    for (i = 0; i < teller; i++) {
        $('#hart' + i).remove()
    }
    var i;
    for (i = 0; i < bomberlife; i = i + 1) {
        $('#harten').prepend("<img class='hartimg' id='hart" + i + "' src='img/hearth.png' />");
    }

}

function GameOver() {
    stop_game();
    clearInterval(monsters);
    sad();

    setTimeout(function () { 
        window.open("game_over.html", "_self");
    }, 4000);


}