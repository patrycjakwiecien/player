//buttons

$(document).ready(function () {
    $("#back_ico_background-cover-transparent").click(function () {
        $("#background-covers").hide()
    });

});

$(document).ready(function () {
    $("#back_ico_back_playlist").click(function () {
        $("#playlist").hide()
    });

});

$(document).ready(function () {
    $("#back_ico_arrow_playlist").click(function () {
        $("#playlist").hide()
    });

});


//button play

function myFunction() {
    document.getElementById("active_button").src = "images/Play_active.png";
}