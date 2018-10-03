$(document).ready(function() {
    
    $("#start").click(function(e){
        $("#intro").hide();
        $.getJSON("http://jservice.io/api/random", function(data) {
            console.log(data);
        })
        e.preventDefault();
    })
    
});
