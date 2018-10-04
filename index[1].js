$(document).ready(function() {
    var question;
    var answer;
    var value;
    var playerScore = 0;
    $("#start").click(function(e){
        $("#intro").hide();
        $.getJSON("http://jservice.io/api/random", function(data) {
            console.log(data);
            question = data[0]['question'];
            value = data[0]['value'];
            answer = data[0]['answer'];
            e.preventDefault();
            $("#questions").show();
            $("#playerScore").text("Player score: " + playerScore);
            $("#myQuestion").text(question);
            $("#questionValue").text('Question value: ' + value)
        })
    })
    
    $("#submit").click(function(e){
        var userAnswer = $("#input").val();
        if (userAnswer.toLowerCase() == answer.toLowerCase()) {
            playerScore = playerScore + value;
            $("#playerScore").text("Player score: " + playerScore);
            $("#response").text("Correct!");
        }
        else {
            $("#response").text("Wrong!");
        }
        $("#response").show();
        $("#input").hide();
        $("#submit").hide();
        $("#skip").hide();
        $("#continue").show();
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

        })
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

        })
    })
    
});
