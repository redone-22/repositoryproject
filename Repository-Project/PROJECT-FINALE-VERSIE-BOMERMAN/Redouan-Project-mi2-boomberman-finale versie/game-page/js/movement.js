"use strict";
/*global $ */
//Movement animation
var moveUp = true;
var moveLeft = true;
var moveRight = true;
var moveDown = true;

var speedw, speedh;

var left = 37,
    up = 38,
    right = 39,
    down = 40;
var bewegingLinks = 0,
    bewegingOmhoog = 0,
    bewegingRechts = 0;

$(document).keydown(function (e) {

    switch (e.which) {
    case left:
        if (!collision($("#bomber"), 0, -1 * speedw)) {
            $("#bomber").attr('src', 'img/left.png');
            if (bewegingLinks === 0) {
                $("#bomber").attr('src', 'img/left-move2.png');
                bewegingLinks = 1;
            } else if (bewegingLinks === 1) {
                $("#bomber").attr('src', 'img/left-move1.png');
                bewegingLinks = 0;
            }
            $("#bomber").animate({
                "left": "-=" + speedw + "px"
            }, 0);
        }

        $("#bomber").attr('src', 'img/left.png');
        break;

    case up: //Omhoog
        if (!collision($("#bomber"), -1 * speedh, 0)) {
            $("#bomber").attr('src', 'img/top.png');

            if (bewegingOmhoog === 0) {
                $("#bomber").attr('src', 'img/top-move1.png');
                bewegingOmhoog = 1;
            } else if (bewegingOmhoog === 1) {
                $("#bomber").attr('src', 'img/top-move2.png');
                bewegingOmhoog = 0;
            }
            $("#bomber").animate({
                "top": "-=" + speedh + "px"
            }, 0);
        }
        $("#bomber").attr('src', 'img/top.png');

        break;

    case right: //Rechts
        if (!collision($("#bomber"), 0, speedw)) {
            $("#bomber").attr('src', 'img/right.png');

            if (bewegingRechts === 0) {
                $("#bomber").attr('src', 'img/right-move2.png');
                bewegingRechts = 1;
            } else if (bewegingRechts === 1) {
                $("#bomber").attr('src', 'img/right-move1.png');
                bewegingRechts = 0;
            }
            $("#bomber").animate({
                "left": "+=" + speedw + "px"
            }, 0);
        }
        $("#bomber").attr('src', 'img/right.png');
        break;

    case down: //Beneden
        if (!collision($("#bomber"), speedh, 0)) {
            $("#bomber").attr('src', 'img/normal_bomber.png');

            if (bewegingOmhoog === 0) {
                $("#bomber").attr('src', 'img/normal-move1.png');
                bewegingOmhoog = 1;
            } else if (bewegingOmhoog === 1) {
                $("#bomber").attr('src', 'img/normal-move2.png');
                bewegingOmhoog = 0;
            }
            $("#bomber").animate({
                "top": "+=" + speedh + "px"
            }, 0);
        }
        $("#bomber").attr('src', 'img/normal_bomber.png');
        break;
    }
    collision_monster($("#bomber"));
});

$(document).ready(function () {
    $("#beneden").bind('touchstart', function () {
        if (!collision($("#bomber"), speedh, 0)) {
            $("#bomber").attr('src', 'img/normal_bomber.png');

            if (bewegingOmhoog === 0) {
                $("#bomber").attr('src', 'img/normal-move1.png');
                bewegingOmhoog = 1;
            } else if (bewegingOmhoog === 1) {
                $("#bomber").attr('src', 'img/normal-move2.png');
                bewegingOmhoog = 0;
            }
            $("#bomber").animate({
                "top": "+=" + speedh + "px"
            }, 0);
        }
        $("#bomber").attr('src', 'img/normal_bomber.png');
    collision_monster($("#bomber"));
    });
    
    
    $("#rechts").bind('touchstart', function () {
         if (!collision($("#bomber"), 0, speedw)) {
            $("#bomber").attr('src', 'img/right.png');

            if (bewegingRechts === 0) {
                $("#bomber").attr('src', 'img/right-move2.png');
                bewegingRechts = 1;
            } else if (bewegingRechts === 1) {
                $("#bomber").attr('src', 'img/right-move1.png');
                bewegingRechts = 0;
            }
            $("#bomber").animate({
                "left": "+=" + speedw + "px"
            }, 0);
        }
        $("#bomber").attr('src', 'img/right.png');
    collision_monster($("#bomber"));
    });
    
    
    $("#boven").bind('touchstart', function () {
         if (!collision($("#bomber"), -1 * speedh, 0)) {
            $("#bomber").attr('src', 'img/top.png');

            if (bewegingOmhoog === 0) {
                $("#bomber").attr('src', 'img/top-move1.png');
                bewegingOmhoog = 1;
            } else if (bewegingOmhoog === 1) {
                $("#bomber").attr('src', 'img/top-move2.png');
                bewegingOmhoog = 0;
            }
            $("#bomber").animate({
                "top": "-=" + speedh + "px"
            }, 0);
        }
        $("#bomber").attr('src', 'img/top.png');
    collision_monster($("#bomber"));
    });
    
    $("#links").bind('touchstart', function () {
         if (!collision($("#bomber"), 0, -1 * speedw)) {
            $("#bomber").attr('src', 'img/left.png');
            if (bewegingLinks === 0) {
                $("#bomber").attr('src', 'img/left-move2.png');
                bewegingLinks = 1;
            } else if (bewegingLinks === 1) {
                $("#bomber").attr('src', 'img/left-move1.png');
                bewegingLinks = 0;
            }
            $("#bomber").animate({
                "left": "-=" + speedw + "px"
            }, 0);
        }

        $("#bomber").attr('src', 'img/left.png');
    collision_monster($("#bomber"));
    });
    
    
    $("#bombg").bind('touchstart', function () {
         if (bomInGame <= numberBom) {
            playerPosition = $('#bomber').position();
            playerPositions = {
                top: playerPosition.top,
                left: playerPosition.left
            };
            var prefix = Math.floor(Math.random() * 1e6);
            $("#gamePlatform").append("<img src='img/Smoothie_Smash_Bomb.gif' alt='bomb' id='bomb" + prefix + "'>");
            $("#bomb" + prefix).css({
                position: 'absolute',
                top: playerPositions.top,
                left: playerPositions.left,
                height: '7%',
                width: '7%'
            });
            ++bomInGame;
            var Non = false;
            setTimeout(function () {
                var bom = $("#bomb" + prefix).position();
                console.log(prefix);
                explos();
                $("#bomb" + prefix).attr('src', 'img/explosion7.gif');
                var explosion = Math.floor(Math.random() * 1e6);
                $("#bomb" + prefix).addClass("expl" + explosion, "b");
                for (var i = 1; i <= soufle; ++i) {
                    if (!Non && !collision($("#bomb" + prefix), 0, speedw * i)) {
                        var intern = Math.floor(Math.random() * 1e6);
                        $("#gamePlatform").append("<img src='img/explosion7.gif' alt='bomb' class='expl" + explosion + "' id='expl-" + intern + "'>");
                        $("#expl-" + intern).css({
                            position: 'absolute',
                            top: bom.top,
                            left: bom.left + speedw * i,
                            height: '7%',
                            width: '7%'
                        });

                        collision_fire($("#bomber"), ".expl" + explosion, "b")
                        for (var i = 0; i < 3; ++i) {
                            collision_fire($("#monster" + i), ".expl" + explosion, "m");
                        }
                    } else {
                        Non = true;
                    }

                }


                Non = false;
                for (var i = 1; i <= soufle; ++i) {

                    if (!Non && !collision($("#bomb" + prefix), 0, speedw * -i)) {


                        var intern = Math.floor(Math.random() * 1e6);
                        $("#gamePlatform").append("<img src='img/explosion7.gif' alt='bomb' class='expl" + explosion + "' id='expl-" + intern + "'>");
                        $("#expl-" + intern).css({
                            position: 'absolute',
                            top: bom.top,
                            left: bom.left + speedw * -i,
                            height: '7%',
                            width: '7%'
                        });
                        collision_fire($("#bomber"), ".expl" + explosion, "b")
                        for (var i = 0; i < 3; ++i) {
                            collision_fire($("#monster" + i), ".expl" + explosion, "m");
                        }

                    } else {
                        Non = true;
                    }

                }
                Non = false;
                for (var i = 1; i <= soufle; ++i) {
                    if (!Non && !collision($("#bomb" + prefix), speedh * i, 0)) {

                        var intern = Math.floor(Math.random() * 1e6);
                        $("#gamePlatform").append("<img src='img/explosion7.gif' alt='bomb' class='expl" + explosion + "' id='expl-" + intern + "'>");
                        $("#expl-" + intern).css({
                            position: 'absolute',
                            top: bom.top + speedh * i,
                            left: bom.left,
                            height: '7%',
                            width: '7%'
                        });
                        collision_fire($("#bomber"), ".expl" + explosion, "b")
                        for (var i = 0; i < 3; ++i) {
                            collision_fire($("#monster" + i), ".expl" + explosion, "m");
                        }


                    } else {
                        Non = true;
                    }
                }
                Non = false;

                for (var i = 1; i <= soufle; ++i) {
                    if (!Non && !collision($("#bomb" + prefix), speedh * -i, 0)) {

                        var intern = Math.floor(Math.random() * 1e6);
                        $("#gamePlatform").append("<img src='img/explosion7.gif' alt='bomb' class='expl" + explosion + "' id='expl-" + intern + "'>");
                        $("#expl-" + intern).css({
                            position: 'absolute',
                            top: bom.top + speedh * -i,
                            left: bom.left,
                            height: '7%',
                            width: '7%'
                        });
                        collision_fire($("#bomber"), ".expl" + explosion, "b")
                        for (var i = 0; i < 3; ++i) {
                            collision_fire($("#monster" + i), ".expl" + explosion, "m");
                        }

                    } else {
                        Non = true;
                    }

                }


                --bomInGame;
                setTimeout(function () {
                    collision_fire($("#bomber"), ".expl" + explosion, "b")
                    for (var i = 0; i < 3; ++i) {
                        collision_fire($("#monster" + i), ".expl" + explosion, "m");
                    }
                    $("#bomb" + prefix).remove();
                    $(".expl" + explosion).remove();
                }, 200);

            }, 1.5e3);

        }
    });  
    
});