GET:
$(document).ready(
    function() {
    $("#getAllBooks").submit(function(event) {
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
    type : "GET",
    contentType:"application/json",
    url : window.location + "getBooks",
    success : function(result) {
              if(result.status == 'success') {
                  $("#getResultDiv ul").empty(
                  var custList = "";
                  $.each(result.data, function(i,book) {
                      var user = "Book Name " + book.bookName
                          + ",Author = " + book.author + "<br>";
                      $('#getResultDiv .list-group').append(book)
                  });
                  console.log("Success: ", result);

              } else {
                  $("#getResultDiv").html("<strong>Error</strong>");
                  console.log("Fail: ", result);
              }

          },
          error : function(e) {
              alert("Error!")
              console.log("ERROR: ",e);
          }

       })

      }

    }
)