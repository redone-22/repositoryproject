"use strict";
/*global $ */
var space = 32;

var playerPosition, playerPositions;

var numberBom = 3;

var bomInGame = 1;

var bomexplosion = 1;

var bomhist = 1;

var soufle = 3;

var timer = false;

$(document).keydown(function (b) {
    if ((b.which) === space) {
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

    }

});