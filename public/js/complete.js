$(document).ready(function() {
    $(".fab").on('click', function(){
    $("#spa").css("color", "#9fa8da");
    $(".fab").addClass("expand");
    $(".fab-sha").addClass("fabactive");
    $(".close").addClass("active");
    $("#text").html("Select an exercise: <p>Focus breathing</p> <p>Eyesight reset</p> <p>Simple hand exercise</p> <p>T-pose head roll</p>");
    });

    $(".close").on('click', function(){
    $(".close").removeClass("active");
    $(".fab").removeClass("expand");
    $("#text").html("");
    $(".fab-sha").removeClass("fabactive");
    delay(function(){
    $("#spa").css("color", "#FFF");
    },800);
    });
});

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();