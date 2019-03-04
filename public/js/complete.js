$(document).ready(function() {
    $(".fab").on('click', function(){
    $("#spa").css("color", "#9fa8da");
    $(".fab").addClass("expand");
    $(".fab-sha").addClass("fabactive");
    $(".close").addClass("active");
    delay(function(){
    $("#text").html("Choose an exercise");
    $("#exercise").css("display", "block");
    },400);
    });

    $(".close").on('click', function(){
    $(".close").removeClass("active");
    $(".fab").removeClass("expand");
    $("#text").html("");
    $(".fab-sha").removeClass("fabactive");
    $("#exercise").css("display", "none");
    $("#textinstructions").css("display", "none");
    delay(function(){
    $("#spa").css("color", "#FFF");
    },800);
    });

    $(".button_resume").on('click', function(){
    $(".close").removeClass("active");
    $(".fab").removeClass("expand");
    $("#text").html("");
    $(".fab-sha").removeClass("fabactive");
    $("#exercise").css("display", "none");
    $(".button_resume").css("display", "none");
    $("#textinstructions").css("display", "none");
    delay(function(){
    $("#spa").css("color", "#FFF");
    },800);
    });

    $("#focus").click(function(){
        $("#text").html("Focus Breathing");
        $("#exercise").css("display", "none");
        $("#textinstructions").css("display", "block");
        $(".button_resume").css("display", "block");
        $("#textinstructions").html("<ul><li>Think of a word or phrase to help you feel relaxed</li><li>Close your eyes</li><li>Take a few big deep breaths</li><li>As you breathe picture that the air is filled with a sense of peace and transquility</li><li>As you breathe out imagine that your stress leaves with the air</li><li>Repeat several times</li></ul>");
    });

    $("#eye").click(function(){
        $("#text").html("The Eye Reset");
        $("#exercise").css("display", "none");
        $("#textinstructions").css("display", "block");
        $(".button_resume").css("display", "block");
        $("#textinstructions").html("<ul><li>Remove all eyewear</li><li>Close your eyes</li><li>While cusping hands cover the eyes without pressing hands into eyes</li><li>Adjust hands as needed to block all light out</li><li>Hold for 30 seconds at a time for a total of 2 minutes</li></ul>");
    });

            $("#pose").click(function(){
        $("#text").html("T-Pose Head Roll");
        $("#exercise").css("display", "none");
        $("#textinstructions").css("display", "block");
        $(".button_resume").css("display", "block");
        $("#textinstructions").html("<ul><li>Stand and spread legs half a step apart</li><li>Extend arms horizontally away from the body</li><li>Look down without folding the body</li><li>Roll the head counter-clockwise for 4 complete cycles</li><li>Reverse and roll the head clockwise for 4 more cycles</li><li>Repeat 3 times</li></ul>");
    });

                $("#square").click(function(){
        $("#text").html("Square Breathing");
        $("#exercise").css("display", "none");
        $("#textinstructions").css("display", "block");
        $(".button_resume").css("display", "block");
        $("#textinstructions").html("<ul><li>Inhale deeply through the nose for 4 counts (count to 4)</li><li>Hold breath in for 4 counts</li><li>Exhale for 4 counts</li><li>Repeat 10 times </li></ul>");
    });
});

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();