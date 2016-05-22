"use strict";
/*global $ */
$(document).ready(function () {
    $("#submit").on('click', function () {
        chosen2();
        $("html").fadeOut(4000);
        setTimeout(function () {
            window.open("../menu.html", "_self");
        }, 5000);
    });
});