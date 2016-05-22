"use strict";
/*global $ */
var rdnResuct;
var count = 0;
var count2 = 0;
var count3 = 0;
var score = 0;
var telmonster = 0;

function collision(bomber, yto, xto) {
    var found = false, rect1 = {
        x: bomber.position().left + xto,
        y: bomber.position().top + yto,
        width: bomber.width(),
        height: bomber.height()
    };
    $(".stone").each(function (i, element) {

        var rect2 = {
            x: $(element).position().left,
            y: $(element).position().top,
            width: $(element).width(),
            height: $(element).height()
        };
        if (!found) { found = !(((rect1.y + rect1.height) < (rect2.y)) ||
                (rect1.y > (rect2.y + rect2.height)) ||
                ((rect1.x + rect1.width) < rect2.x) ||
                (rect1.x > (rect2.x + rect2.width))
            ); }
    });
    if (NotInWorld(bomber, yto, xto)) {
        return true;
    } else {
        return found;
    }

}

function collision_monster(bomber) {
    try {
        var found = false, rect1 = {
            x: bomber.position().left,
            y: bomber.position().top,
            width: bomber.width(),
            height: bomber.height()
        };
        $(".monsters").each(function (i, element) {

            var rect2 = {
                x: $(element).position().left,
                y: $(element).position().top,
                width: $(element).width(),
                height: $(element).height()
            };
            if (!found) { found = !(((rect1.y + rect1.height) < (rect2.y)) ||
                    (rect1.y > (rect2.y + rect2.height)) ||
                    ((rect1.x + rect1.width) < rect2.x) ||
                    (rect1.x > (rect2.x + rect2.width))
                ); }
            if (found) {
                
                                    console.log("red");    
                $("#bomber").css({
                        "left": 4,
                        "top": 4
                    });
                telmonster++;
                if ((telmonster % 3) === 0)
                    {
                        --bomberlife;
                        hearth();
                        count = 0;
                        count2 = 0;
                        count3 = 0;
                        bomberpain();
                        telmonster = 0;

                    }
                else if((telmonster % 2) === 0){
                    --bomberlife;
                        hearth();
                        count = 0;
                        count2 = 0;
                        count3 = 0;
                        bomberpain();
                        telmonster = 0;
                }
                
                
                if(bomberlife === 0)
                    {
                        bomber.remove();
                        GameOver();
                    }
            }
            
            

        });
    } catch (e) {
    }
}

function collision_fire(bomber, fire, name) {

    try {
        var found = false, rect1 = {
            x: bomber.position().left,
            y: bomber.position().top,
            width: bomber.width(),
            height: bomber.height()
        };
        $(fire).each(function (i, element) {

            var rect2 = {
                x: $(element).position().left,
                y: $(element).position().top,
                width: $(element).width(),
                height: $(element).height()
            }; if (!found) { found = !(((rect1.y + rect1.height) < (rect2.y)) ||
                    (rect1.y > (rect2.y + rect2.height)) ||
                    ((rect1.x + rect1.width) < rect2.x) ||
                    (rect1.x > (rect2.x + rect2.width))
                ); }
            if (found) {
                console.log(name);
                if (name === "m") {
                    ++count;
                    ++count2;
                    kilMonster();

                    if (count < 3) {
                        score = score + 20;

                    } else if (count < 6) {
                        score = score + 30;

                    } else {
                        score = score + 40;
                    }
                    rdnResuct = Math.floor(Math.random() * 3) + 1;
                    
                    document.getElementById('score').innerHTML = score;


                    switch (rdnResuct) {
                    case 1:
                        bomber.css({
                            "left": $("#gamePlatform").width() - $("#bomber").width(),
                            "top": 4,
                            "width": $("#bomber").width(),
                            "height": $("#bomber").height()
                        });
                        break;
                    case 2:
                        bomber.css({
                            "left": 4,
                            "top": $("#gamePlatform").height() - $("#bomber").height(),
                            "width": $("#bomber").width(),
                            "height": $("#bomber").height()
                        });
                        break;
                    case 3:
                        bomber.css({
                            "left": $("#gamePlatform").width() - $("#bomber").width(),
                            "top": $("#gamePlatform").height() - $("#bomber").height(),
                            "width": $("#bomber").width(),
                            "height": $("#bomber").height()
                        });
                        break;

                    }
                    if (count === 3) {
                        if (bomberlife < 5) {
                            ++bomberlife;
                            hearth();
                            count = 0;

                        }
                    }
                    /*if (count2 === 4)
                        {
                            if(soufle<6)
                                {
                            ++soufle;
                            count2 = 0;
                                }
                        }*/

                } else if (name === "b") {
                    bomberpain();
                    --bomberlife;
                    count = 0;
                    count2 = 0;
                    count3 = 0;
                    if ((score - 30) >= 0){
                    score = score - 30;
                    }
                    else{
                        score = 0;
                    }
                    if (bomberlife === 0) {
                        bomber.remove();
                        GameOver();
                    }
                    hearth();
                    $("#bomber").css({
                        "left": 4,
                        "top": 4
                    });

                }
                console.log(rdnResuct);

            }
        });
    } catch (e) {;
    }

}

function NotInWorld(bomber, yto, xto) {
    var world = $("#gamePlatform");
    if (bomber.position().top + yto > world.height()) {
        return true;
    }
    if (bomber.position().left + xto < 0) {
        return true;
    }
    if (bomber.position().top + yto < 0) {
        return true;
    }
    if (bomber.position().left + xto + 4 > world.width()) {
        return true;
    }

    return false;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function moveM() {
    return setInterval(function () {
        for (var i = 0; i < 3; ++i) {
            var rdn = getRandomInt(0, 4);

            var monster = $("#monster" + i);
            switch (rdn) {
            case 0:
                if (!collision(monster, speedh, 0)) {

                    monster.animate({
                        "top": "+=" + speedh + "px"
                    }, 0);
                }
                break;
            case 1:
                if (!collision(monster, -1 * speedh, 0)) {

                    monster.animate({
                        "top": "-=" + speedh + "px"
                    }, 0);
                }
                break;
            case 2:
                if (!collision(monster, 0, speedw)) {

                    monster.animate({
                        "left": "+=" + speedw + "px"
                    }, 0);
                }
                break;
            case 3:
                if (!collision(monster, 0, -1 * speedw)) {
                    monster.animate({
                        "left": "-=" + speedw + "px"
                    }, 0);
                }
                break;
            }
            setTimeout(function () {
                            collision_monster($("#bomber"));

                }, 3000);

        }
    }, 300);
}