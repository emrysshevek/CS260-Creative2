$(document).ready(function() {
    
    $("#start").click(function(e){
        
        document.location.href = "../html/trivia.html";
        // $("#intro").hide();
        // $.getJSON("http://jservice.io/api/random", function(data) {
        //     console.log(data);
        // })
        e.preventDefault();
    })
    
});
