$(document).ready(
    function() {
    $("#bookForm").submit(function(event) {
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {
    var formData = {
        bookId : $("#bookId").val(),
        bookName : $("#bookName").val(),
        author : $("#author").val(),

    }
    $.ajax({
    type : "POST",
    contentType:"application/json",
    url : window.location + "saveBook",
    data : JSON.stringify(formData),
    dataType : 'json',
    success : function(result) {
        if(result.status == 'success') {
            $("#postResultDiv").html(
                "" + result.data.name
                    + "Post Successfully! <br>"
                    + "---> Congrats !!"
                    + "</p>");
        } else {
            $("#postResultDiv").html("<strong>Error</strong>");
        }
        console.log(result);
    },
    error : function(e) {
        alert("Error!")
        console.log("ERROR: ",e);
    }

    })

    }

    }
)