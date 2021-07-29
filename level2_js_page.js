// This is the code to giving inputs to the input field and click to go another page of the game .
$(document).ready(function () {
    $("#submit_btn").click(function () {
        letter1 = document.getElementById("spantag1").value;
        letter2 = document.getElementById("spantag2").value;
        letter3 = document.getElementById("spantag3").value;
        letter4 = document.getElementById("spantag4").value;
        if (letter1 == 'k' || letter1 == 'K') {
            if (letter2 == 'u' || letter2 == 'U') {
                if (letter3 == 'h' || letter3 == 'H') {
                    if (letter4 == 'u' || letter4 == 'U') {

                        $("#spantag1").css("border", "2px solid green");
                        $("#spantag2").css("border", "2px solid green");
                        $("#spantag3").css("border", "2px solid green");
                        $("#spantag4").css("border", "2px solid green");
                        $("#warn-msg").html("VERY GOOD");
                        $("#warn-msg").css('color', 'rgb(145, 255, 0)');
                        $("#warn-msg").css('text-align','center');

                        // This is the code to link a page with another page .
                        setTimeout(function () {
                            $(location).attr('href', 'level3_html_page.html');
                        }, 1000
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
        $(location).attr('href','level1_html_page.html');
    });
});

// This is the code to give hints to the user .
$(document).ready(function()
{
    $("#hints_btn").click(function()
    {
    
        $("#hints_btn").html("1 💡");
        $("#spantag4").val("U");
        $("#spantag4").attr('readonly','true');
        $("#hints_btn").html("0 💡");
        $("#hints_btn").css('color','red');
        $("#spantag1").val("K");
        $("#spantag1").attr('readonly','true');
        
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