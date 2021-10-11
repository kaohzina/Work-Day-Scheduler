//display current date on the page
var hours = $(".description");
var currentTime = moment().hour();

var tasks = {};
var currentDate = moment().format("dddd, MMM Do, YY");
var currentDateEl = $("#currentDay");

currentDateEl.text(currentDate);

$(".saveBtn").on("click", function () {
  console.log($(this).siblings(".description")[0]);
  var savedTask;
  saveTasks();
  console.log("saved");
});

var saveTasks = function () {
  localStorage.setItem("task", JSON.stringify(tasks).textInput);
};

console.log(hours);

for (var i = 0; i < hours.length; i++) {
  var htmlHour = parseInt($(hours[i]).attr("id"));
  if (htmlHour < currentTime) {
    $(hours[i]).addClass("past");
  }
  if (htmlHour === currentTime){
    $(hours[i]).addClass("present");
  }
  if (htmlHour > currentTime) {
    $(hours[i]).addClass("future");
  }
  
}



console.log(); //> 6 minutes ago
