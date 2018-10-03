$(document).ready(function() {
    $.getJSON("http://jservice.io/api/random", function(data) {
        console.log(data);
    })
});
