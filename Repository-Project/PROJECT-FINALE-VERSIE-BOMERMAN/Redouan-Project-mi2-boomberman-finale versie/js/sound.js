"use strict";
/*global $ */
var Audio;
var introSound = new Audio("sounds/sound-intro.wav");
var levelSound = new Audio("../sounds/level-sound.mp3");
var timeUp = new Audio("../sounds/bomber-time-up.mp3");
var sadSound = new Audio("../sounds/sad_sound.mp3");
var gameOver = new Audio("../sounds/game_over.mp3");
var try_again = new Audio("../sounds/try_again.mp3");
var explosion = new Audio("../sounds/explosion.wav");
var pain = new Audio("../sounds/bomber_pain.mp3");
var kil = new Audio("../sounds/coin.wav");
var hoverS = new Audio("sounds/hovers.mp3");
var chose = new Audio("sounds/chose.wav");
var chose2 = new Audio("../sounds/chose.wav");
var pressStart = new Audio('sounds/13-level-clear.mp3');

function chosen2() {
    chose2.play();
    chose2.volume = 1;
}

function chosen() {
    chose.play();
    chose.volume = 1;
}

function sad() {
    sadSound.play();
    sadSound.volume = 1;
}

function hs() {
    hoverS.play();
    hoverS.volume = 1;
}

function kilMonster() {
    kil.play();
    kil.volume = 1;
}

function bomberpain() {
    pain.play();
    pain.volume = 1;
}

function explos() {
    explosion.play();
    explosion.volume = 1;
}

function tryAgain() {
    try_again.play();
    try_again.volume = 1;
}

function over() {
    gameOver.play();
    gameOver.volume = 1;
    gameOver.loop = true;
}

function stop_over() {
    gameOver.pause();
}

function intro() {
    introSound.play();
    introSound.volume = 1;
    introSound.loop = true;
}

function timerUp() {
    timeUp.play();
    timeUp.volume = 1;
}

function stop_game() {
    levelSound.pause();
}

function stop_timer() {
    timeUp.pause();
}

function level() {
    levelSound.play();
    levelSound.volume = 1;
    levelSound.loop = true;
}

function stop_Intro() {
    introSound.pause();
}

function stop_time() {
    timerUp.pause();
}

function press_Start() {
    pressStart.volume = 1;
    pressStart.play();
}
$(document).ready(function () {
    $("#sound").click(function () {
        var image = document.getElementById("sound");
        if (image.src.match("sound")) {
            image.src = "img/mute.png";
            levelSound.pause();
        } else if (image.src.match("mute")) {
            image.src = "img/sound.png";
            levelSound.play();
        }
    });
});