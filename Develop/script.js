//display current date on the page
const currentDate = moment().format("dddd, MMM Do, YY");
const currentDateEl = document.querySelector("#currentDay");

currentDateEl.textContent = currentDate;

