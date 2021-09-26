$(document).ready(function () {

    //Moment.JS
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY")); 


    //Changes class based on present time 
    function Time() { 
      var presentTime = moment().hours();
  
      $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("-")[1]); 
  
        //Adds past class
        if (timeBlock < presentTime) { 
          $(this).addClass("past");
        }
        //Adds present class
        else if (timeBlock === presentTime) { 
          $(this).removeClass("past"); 
          $(this).addClass("present"); 
        }
        //Adds future class
        else {
          $(this).removeClass("past");  
          $(this).removeClass("present"); 
          $(this).addClass("future"); 
        }
      });
    }
    
    //Time Function
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
  

    //Local Storage
    $(".saveBtn").on("click", function () { 
      var todo = $(this).siblings(".description").val();
      var savedItem = $(this).parent().attr("id");
      localStorage.setItem(savedItem, JSON.stringify(todo));
    });
  
  });