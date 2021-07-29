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
        letter8 = document.getElementById("spantag8").value;
        letter9 = document.getElementById("spantag9").value;
        letter10 = document.getElementById("spantag10").value;

        if (letter1 == 's' || letter1 == 'S') {
            if (letter2 == 'a' || letter2 == 'A') {
                if (letter3 == 'i' || letter3 == 'I') {
                    if (letter4 == 'k' || letter4 == 'K') {
                        if (letter5 == 'r' || letter5 == 'R') {
                            if (letter6 == 'i' || letter6 == 'I') {
                                if (letter7 == 's' || letter7 == 'S') {
                                    if (letter8 == 'h' || letter8 == 'H') {
                                        if (letter9 == 'n' || letter9 == 'N') {
                                            if (letter10 == 'a' || letter10 == 'A') {

                                                $("#spantag1").css("border", "2px solid green");
                                                $("#spantag2").css("border", "2px solid green");
                                                $("#spantag3").css("border", "2px solid green");
                                                $("#spantag4").css("border", "2px solid green");
                                                $("#spantag5").css("border", "2px solid green");
                                                $("#spantag6").css("border", "2px solid green");
                                                $("#spantag7").css("border", "2px solid green");
                                                $("#spantag8").css("border", "2px solid green");
                                                $("#spantag9").css("border", "2px solid green");
                                                $("#spantag10").css("border", "2px solid green");
                                                $("#warn-msg").html("AMAZING");
                                                $("#warn-msg").css('color', 'orange');

                                                // This is the code to link a page with another page .
                                                setTimeout(function () {
                                                    $(location).attr('href', 'level9_html_page.html');
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
                                                $("#spantag8").css("border", "2px solid red");
                                                $("#spantag9").css("border", "2px solid red");
                                                $("#spantag10").css("border", "2px solid red");
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
                                            $("#spantag8").css("border", "2px solid red");
                                            $("#spantag9").css("border", "2px solid red");
                                            $("#spantag10").css("border", "2px solid red");
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
                                        $("#spantag8").css("border", "2px solid red");
                                        $("#spantag9").css("border", "2px solid red");
                                        $("#spantag10").css("border", "2px solid red");
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
                                    $("#spantag8").css("border", "2px solid red");
                                    $("#spantag9").css("border", "2px solid red");
                                    $("#spantag10").css("border", "2px solid red");
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
                                $("#spantag8").css("border", "2px solid red");
                                $("#spantag9").css("border", "2px solid red");
                                $("#spantag10").css("border", "2px solid red");
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
                            $("#spantag8").css("border", "2px solid red");
                            $("#spantag9").css("border", "2px solid red");
                            $("#spantag10").css("border", "2px solid red");
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
                        $("#spantag8").css("border", "2px solid red");
                        $("#spantag9").css("border", "2px solid red");
                        $("#spantag10").css("border", "2px solid red");
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
                    $("#spantag8").css("border", "2px solid red");
                    $("#spantag9").css("border", "2px solid red");
                    $("#spantag10").css("border", "2px solid red");
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
                $("#spantag8").css("border", "2px solid red");
                $("#spantag9").css("border", "2px solid red");
                $("#spantag10").css("border", "2px solid red");
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
            $("#spantag8").css("border", "2px solid red");
            $("#spantag9").css("border", "2px solid red");
            $("#spantag10").css("border", "2px solid red");
            $("#warn-msg").html("Oops..Try Again");

        }

    });
});
// This is the code for back button .

$(document).ready(function () {
    $("#back_btn").click(function () {
        $(location).attr('href', 'level7_html_page.html');
    });
});

// This is the code to give hints to the user .
$(document).ready(function () {
    $("#hints_btn").click(function () {

        $("#hints_btn").html("1 💡");
        $("#spantag2").val("A");
        $("#spantag2").attr('readonly', 'true');
        $("#hints_btn").html("0 💡");
        $("#hints_btn").css('color', 'red');
        $("#spantag6").val("I");
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