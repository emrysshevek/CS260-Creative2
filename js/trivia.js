$(document).ready(function() {
    // countdown();
    $("#game").delay(4).fadeIn(100, function() {
        run();
    });
});

function countdown() {
    $("#three").fadeIn(1000, function() {
        $("#three").hide();
        $("#two").fadeIn(1000, function() {
            $("#two").hide();
            $("#one").fadeIn(1000, function() {
                $("#one").hide();
                $("#go").fadeIn(1000, function() {
                    $("#go").hide();
                });
            });
        });
    });
}

function run() {
    var start = $.now();
    $("#timer").animate({width: "0px"}, {
        duration: 60000,
        easing: "linear",
        callback: endGame(),
        step: function(){
            var time = (60-(($.now()-start)/1000));
            $("#time").text(time.toFixed(2));
        }
    });
    
    
}

function endGame(){
    // alert("Game Over!");
}
