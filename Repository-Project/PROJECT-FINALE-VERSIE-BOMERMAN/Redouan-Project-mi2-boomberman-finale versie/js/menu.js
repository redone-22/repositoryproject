"use strict";
/*global $ */
$(document).ready(function () {
    
    setTimeout(function () {
        $(".selection").fadeIn(1e3);
    }, 1e3);
    $("#tuto").click(function () {
        $("#container").fadeOut(1e3);
        setTimeout(function () {
            $("#tcontainer").fadeIn(2e3);
            $("#back").fadeIn(2e3);
            $("#logo").animate({"left": "-=6%"}, 2e3);
        }, 1e3);
    });
    $("#back").click(function () {
        chosen();
        $("#tcontainer").fadeOut(1e3);
        setTimeout(function () {
            $("#container").fadeIn(2e3);
            $("#back").fadeOut(2e3);
            $("#logo").animate({"left": "+=6%"}, 2e3);
        }, 1e3);
    });
    
    $("#start").click(function () {
        press_Start();
        setTimeout(function () {
            window.open("game-page/game.html", "_self");
        }, 2.9e3);
    });
    
    $(".selection").hover(function () {
        hs();
    });
    $(".selection").click(function () {
        chosen();
    });
    $("#quit").click(function () {
        setTimeout(function () {
            window.close();
        }, 1e3);
    });

});
