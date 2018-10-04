var questions = [];
var playerScore = 0;

$(document).ready(function() {
    var question = null;
    var answer = null;
    var value = null;
    $("#start").click(function(e){
        $("#intro").hide();
        $.getJSON("http://jservice.io/api/random", function(data) {
            console.log(data);
            question = data[0]['question'];
            value = data[0]['value'];
            answer = data[0]['answer'];
            e.preventDefault();
            $("#game").show();
            $("#playerScore").text("Player score: " + playerScore);
            $("#myQuestion").text(question);
            $("#questionValue").text('Question value: ' + value)
            questions.push(data);
            questions[0].status = "skipped";
            startTimer();
        })
    })
    
    $("#submit").click(function(e){
        var userAnswer = $("#input").val();
        if (userAnswer.toLowerCase() == answer.toLowerCase()) {
            questions[questions.length-1].status = "correct";
            playerScore = playerScore + value;
            $("#playerScore").text("Player score: " + playerScore);
            $("#response").text("Correct!");
        }
        else {
            questions[questions.length-1].status = "wrong";
            $("#response").text("Wrong!");
        }
        $("#response").show();
        $("#input").hide();
        $("#input").val('');
        $("#submit").hide();
        $("#skip").hide();
        $("#continue").show();
        
        e.preventDefault();
    })
    
    $("#continue").click(function(e){
        $.getJSON("http://jservice.io/api/random", function(data) {
            console.log(data);
            question = data[0]['question'];
            value = data[0]['value'];
            answer = data[0]['answer'];
            e.preventDefault();
            $("#questions").show();
            $("#myQuestion").text(question);
            $("#questionValue").text('Question value: ' + value);
            $("#response").hide();
            $("#continue").hide();
            $("#input").val = ("Answer");
            $("#input").show();
            $("#submit").show();
            $("#skip").show();
            questions.push(data);
            questions[questions.length-1].status = "skipped";

        });
        
        e.preventDefault();
    })
    
    $("#skip").click(function(e){
        $.getJSON("http://jservice.io/api/random", function(data) {
            console.log(data);
            question = data[0]['question'];
            value = data[0]['value'];
            answer = data[0]['answer'];
            e.preventDefault();
            $("#questions").show();
            $("#myQuestion").text(question);
            $("#questionValue").text('Question value: ' + value);
            $("#response").hide();
            $("#continue").hide();
            $("#input").val = ("Answer");
            $("#input").show();
            $("#submit").show();
            $("#skip").show();
            questions.push(data);
            questions[questions.length-1].status = "skipped";

        });
        
        e.preventDefault();
    });
    
});

function startTimer(){
    $("#timer").width("75%");
    var start = $.now();
    $("#timer").animate(
        {width: "0px"},
        1000,
        "linear",
        function(){
            endGame();
        }
    );
}

function endGame(){
    $("#game").hide();
    $("#endGame").show();
    $("#endMessage").show();
    $("#endMessage").fadeOut(300);
    console.log(questions);
    console.log(playerScore);
    $("#finalScore").text("Final Score: " + playerScore);
    $("#finalScore").delay(300).show();
    var sep = "<div id=\"sep\"></div>";
    var list = "";
    for (index in questions){
        var number = "<div id=\"number\">" + index + "</div>";
        var question = "<div id=\"questionText\">" + questions[index][0]["question"] + "</div";
        var status = "<div id=\"status\">" + questions[index].status + "</div>";
        list += "<li id=\"questionSummary\">";
        list += number + sep + question + sep + status;
        list += "</li>";
        console.log(questions);
    }
    // console.log(list);
    $("#questionList").html(list).show();
}