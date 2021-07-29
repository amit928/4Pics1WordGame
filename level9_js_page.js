// This is the code to giving inputs to the input field and click to go another page of the game .
$(document).ready(function () {
    $("#submit_btn").click(function () {
        letter1 = document.getElementById("spantag1").value;
        letter2 = document.getElementById("spantag2").value;
        letter3 = document.getElementById("spantag3").value;
        letter4 = document.getElementById("spantag4").value;
        if (letter1 == 'g' || letter1 == 'G') {
            if (letter2 == 'a' || letter2 == 'A') {
                if (letter3 == 'n' || letter3 == 'N') {
                    if (letter4 == 'g' || letter4 == 'G') {

                        $("#spantag1").css("border", "2px solid green");
                        $("#spantag2").css("border", "2px solid green");
                        $("#spantag3").css("border", "2px solid green");
                        $("#spantag4").css("border", "2px solid green");
                        $("#warn-msg").html("WINNER");
                        $("#warn-msg").css('color', 'white');
                        $("#warn-msg").css('font-size', '70px');
                        $("#warn-msg").css('margin-left', '560px');
                        $("#warn-msg").css('margin-top', '-15px');

                        // This is the code to link a page with another page .
                        setTimeout(function () {
                            $(location).attr('href', 'last_page.html');
                        }, 2000
                        );

                    }
                    else {
                        $("#spantag1").css("border", "2px solid red");
                        $("#spantag2").css("border", "2px solid red");
                        $("#spantag3").css("border", "2px solid red");
                        $("#spantag4").css("border", "2px solid red");
                        $("#warn-msg").html("Oops..Try Again");
                    }
                }
                else {

                    $("#spantag1").css("border", "2px solid red");
                    $("#spantag2").css("border", "2px solid red");
                    $("#spantag3").css("border", "2px solid red");
                    $("#spantag4").css("border", "2px solid red");
                    $("#warn-msg").html("Oops..Try Again");

                }
            }
            else {

                $("#spantag1").css("border", "2px solid red");
                $("#spantag2").css("border", "2px solid red");
                $("#spantag3").css("border", "2px solid red");
                $("#spantag4").css("border", "2px solid red");
                $("#warn-msg").html("Oops..Try Again");

            }
        }
        else {
            $("#spantag1").css("border", "2px solid red");
            $("#spantag2").css("border", "2px solid red");
            $("#spantag3").css("border", "2px solid red");
            $("#spantag4").css("border", "2px solid red");
            $("#warn-msg").html("Oops..Try Again");

        }
    });
});
// This is the code for back button .

$(document).ready(function()
{
    $("#back_btn").click(function()
    {
        $(location).attr('href','level8_html_page.html');
    });
});

// This is the code to give hints to the user .
$(document).ready(function()
{
    $("#hints_btn").click(function()
    {
    
        $("#hints_btn").html("1 💡");
        $("#spantag2").val("A");
        $("#spantag2").attr('readonly','true');
        $("#hints_btn").html("0 💡");
        $("#hints_btn").css('color','red');
        $("#spantag3").val("N");
        $("#spantag3").attr('readonly','true');
        
    });
});

// This is the code to automatic jump to another input field after giving one letter to a input field .

$(document).ready(function()
{
$(".spantag").keyup(function()
{

    if (this.value.length == this.maxLength) {
        var $next = $(this).next('.spantag');
        if ($next.length)
            $(this).next('.spantag').focus();
        else
            $(this).blur();
      } 
    });
});