$(document).ready(function() {
    console.log("index page is loaded!!");
});
$(document).ready(function() {
    $(".Upcoming").click(function() {
        if ($("#aOfNow").hasClass('selected') == true) {
            $("#aOfNow").removeClass("selected");
            $(".Upcoming").addClass("selected");
            $("#headingOfMovieShowcaseing").text("UpComing Movies");
        }
    });
});
$(document).ready(function() {
    $("#aOfNow").click(function() {
        if ($("#aOfNow").hasClass('selected') != true) {
            $("#aOfNow").addClass("selected");
            $(".Upcoming").removeClass("selected");
            $("#headingOfMovieShowcaseing").text("Current Movies");
        }
    });
});
$(document).ready(function() {

    $('.nav-link').hover(function() {
            $(this).css("background-color", "03001C");
        },
        function() {
            $(this).css("background-color", " #03001C");
        });
});
$(document).ready(function() {

    $('.active').hover(function() {
            $(this).css("background-color", "03001C");
        },
        function() {
            $(this).css("background-color", "white");
        });
});
$(document).ready(function() {

    $('.yearInButton').hover(function() {
            $(this).css("background-color", "#0078FF").css("color", "white");
        },
        function() {
            $(this).css("background-color", "#F2F2F2").css("color", "black");
        });
    $('.monthINButton').hover(function() {
            $(this).css("background-color", "#0078FF").css("color", "white");
        },
        function() {
            $(this).css("background-color", "#F2F2F2").css("color", "black");
        });


});

$(document).ready(function() {
    $("button").click(function() {

        $(this).toggleClass(".yearInButtonclick");
    });


});
$(document).ready(function() {

    $('.monthINButton').click(function() {
        $(this).toggleClass("monthINButtonclick");
    });

});

$(document).ready(function() {
    if ($("#aOfNow").hasClass('selected') == true) {
        $("#calender").hide();
    }
    $("#aOfNow").click(function() {

        $("#calender").hide();
    });
    $(".Upcoming").click(function() {
        $("#calender").show();
    });
});