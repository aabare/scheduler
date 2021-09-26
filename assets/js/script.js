$(document).ready(function () {
  
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY")); 
  
    function Time() { 
      var presentTime = moment().hours();
  
      $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("-")[1]); 
  
        
        if (timeBlock < presentTime) { 
          $(this).addClass("past");
        }
        else if (timeBlock === presentTime) { 
          $(this).removeClass("past"); 
          $(this).addClass("present"); 
        }
        else {
          $(this).removeClass("past");  
          $(this).removeClass("present"); 
          $(this).addClass("future"); 
        }
      });
    }
  
    Time(); 
    $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
    $("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
    $("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
    $("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
    $("#hour-13").children(".description").val(localStorage.getItem("hour-13"));
    $("#hour-14").children(".description").val(localStorage.getItem("hour-14"));
    $("#hour-15").children(".description").val(localStorage.getItem("hour-15"));
    $("#hour-16").children(".description").val(localStorage.getItem("hour-16"));
    $("#hour-17").children(".description").val(localStorage.getItem("hour-17"));
  
    $(".saveBtn").on("click", function () { 
      var plannerItem = $(this).siblings(".description").val();
      console.log(plannerItem);
      var listItem = $(this).parent().attr("id");
      console.log(listItem);
      localStorage.setItem(listItem, JSON.stringify(plannerItem));
    });
  
  });