const moment = require("moment");

//display current date on the page
const currentDate = moment().format("dddd, MMM Do, YY");
const currentDateEl = document.querySelector("#currentDay");
currentDateEl.textContent = currentDate;

var tasks = {};

$(".task").on("click", function(){
  var text = $(this).text().trim();
console.log(text);
  
  var textInput = $("<textarea>").addClass("col-8 col-md-8 task").val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

//track the times that have passed
const past = function(){
if(hour < currentTime) {

  }
}

//track the time currently
const present = function(){
if(hour === currentTime){

}
}

//track the time in the future
const future = function(){
  if(hour > currentTime) {
    
  }
}


console.log(); //> 6 minutes ago