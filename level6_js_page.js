// This is the code to giving inputs to the input field and click to go another page of the game .
$(document).ready(function () {
    $("#submit_btn").click(function () {
        letter1 = document.getElementById("spantag1").value;
        letter2 = document.getElementById("spantag2").value;
        letter3 = document.getElementById("spantag3").value;
        letter4 = document.getElementById("spantag4").value;
        letter5 = document.getElementById("spantag5").value;
        letter6 = document.getElementById("spantag6").value;
        letter7 = document.getElementById("spantag7").value;

        if (letter1 == 'p' || letter1 == 'P') {
            if (letter2 == 'r' || letter2 == 'R') {
                if (letter3 == 'a' || letter3 == 'A') {
                    if (letter4 == 's' || letter4 == 'S') {
                        if (letter5 == 'a' || letter5 == 'A') {
                            if (letter6 == 'n' || letter6 == 'N') {
                                if (letter7 == 't' || letter7 == 'T') {

                                    $("#spantag1").css("border", "2px solid green");
                                    $("#spantag2").css("border", "2px solid green");
                                    $("#spantag3").css("border", "2px solid green");
                                    $("#spantag4").css("border", "2px solid green");
                                    $("#spantag5").css("border", "2px solid green");
                                    $("#spantag6").css("border", "2px solid green");
                                    $("#spantag7").css("border", "2px solid green");
                                    $("#warn-msg").html("SUPERB");
                                    $("#warn-msg").css('color', 'white');

                                    // This is the code to link a page with another page .
                                    setTimeout(function () {
                                        $(location).attr('href', 'level7_html_page.html');
                                    }, 1000
                                    );

                                }
                                else {
                                    $("#spantag1").css("border", "2px solid red");
                                    $("#spantag2").css("border", "2px solid red");
                                    $("#spantag3").css("border", "2px solid red");
                                    $("#spantag4").css("border", "2px solid red");
                                    $("#spantag5").css("border", "2px solid red");
                                    $("#spantag6").css("border", "2px solid red");
                                    $("#spantag7").css("border", "2px solid red");
                                    $("#warn-msg").html("Oops..Try Again");
                                }
                            }
                            else {

                                $("#spantag1").css("border", "2px solid red");
                                $("#spantag2").css("border", "2px solid red");
                                $("#spantag3").css("border", "2px solid red");
                                $("#spantag4").css("border", "2px solid red");
                                $("#spantag5").css("border", "2px solid red");
                                $("#spantag6").css("border", "2px solid red");
                                $("#spantag7").css("border", "2px solid red");
                                $("#warn-msg").html("Oops..Try Again");

                            }
                        }
                        else {

                            $("#spantag1").css("border", "2px solid red");
                            $("#spantag2").css("border", "2px solid red");
                            $("#spantag3").css("border", "2px solid red");
                            $("#spantag4").css("border", "2px solid red");
                            $("#spantag5").css("border", "2px solid red");
                            $("#spantag6").css("border", "2px solid red");
                            $("#spantag7").css("border", "2px solid red");
                            $("#warn-msg").html("Oops..Try Again");

                        }
                    }
                    else {

                        $("#spantag1").css("border", "2px solid red");
                        $("#spantag2").css("border", "2px solid red");
                        $("#spantag3").css("border", "2px solid red");
                        $("#spantag4").css("border", "2px solid red");
                        $("#spantag5").css("border", "2px solid red");
                        $("#spantag6").css("border", "2px solid red");
                        $("#spantag7").css("border", "2px solid red");
                        $("#warn-msg").html("Oops..Try Again");

                    }
                }
                else {
                    $("#spantag1").css("border", "2px solid red");
                    $("#spantag2").css("border", "2px solid red");
                    $("#spantag3").css("border", "2px solid red");
                    $("#spantag4").css("border", "2px solid red");
                    $("#spantag5").css("border", "2px solid red");
                    $("#spantag6").css("border", "2px solid red");
                    $("#spantag7").css("border", "2px solid red");
                    $("#warn-msg").html("Oops..Try Again");

                }
            }
            else {
                $("#spantag1").css("border", "2px solid red");
                $("#spantag2").css("border", "2px solid red");
                $("#spantag3").css("border", "2px solid red");
                $("#spantag4").css("border", "2px solid red");
                $("#spantag5").css("border", "2px solid red");
                $("#spantag6").css("border", "2px solid red");
                $("#spantag7").css("border", "2px solid red");
                $("#warn-msg").html("Oops..Try Again");

            }
        }
        else {
            $("#spantag1").css("border", "2px solid red");
            $("#spantag2").css("border", "2px solid red");
            $("#spantag3").css("border", "2px solid red");
            $("#spantag4").css("border", "2px solid red");
            $("#spantag5").css("border", "2px solid red");
            $("#spantag6").css("border", "2px solid red");
            $("#spantag7").css("border", "2px solid red");
            $("#warn-msg").html("Oops..Try Again");

        }

    });
});
// This is the code for back button .

$(document).ready(function () {
    $("#back_btn").click(function () {
        $(location).attr('href', 'level5_html_page.html');
    });
});

// This is the code to give hints to the user .
$(document).ready(function () {
    $("#hints_btn").click(function () {

        $("#hints_btn").html("1 💡");
        $("#spantag1").val("P");
        $("#spantag1").attr('readonly', 'true');
        $("#hints_btn").html("0 💡");
        $("#hints_btn").css('color', 'red');
        $("#spantag6").val("N");
        $("#spantag6").attr('readonly', 'true');

    });
});

// This is the code to automatic jump to another input field after giving one letter to a input field .

$(document).ready(function () {
    $(".spantag").keyup(function () {

        if (this.value.length == this.maxLength) {
            var $next = $(this).next('.spantag');
            if ($next.length)
                $(this).next('.spantag').focus();
            else
                $(this).blur();
        }
    });
});