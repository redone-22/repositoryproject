"use strict";
/*global $ */
$(document).ready(function () {
    $("body").fadeIn(3000);
    $("img").click(function () {
        $("img").fadeOut(3000);
    });
    intro();
});

$(document).keydown(function (e) {
    stop_Intro();
    press_Start();
    $("html").fadeOut(2000);
    setTimeout(function () {
        window.open("menu.html", "_self");
    }, 3000);
});
$(document).click(function (e) {
    stop_Intro();
    press_Start();
    $("html").fadeOut(2000);
    setTimeout(function () {
        window.open("menu.html", "_self");
    }, 3000);
});
$(document).on("tap", function () {
    stop_Intro();
    press_Start();
    $("html").fadeOut(2000);
    setTimeout(function () {
        window.open("menu.html", "_self");
    }, 3000);
});