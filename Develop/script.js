var timeDisplayEl = $("#current-day");
var saveBtn = document.getElementById("saveBtn");
var eventInput = document.getElementById("event-input");

 

function displayTime() {
  var rightNow = moment().format('dddd, MMMM Do');
  timeDisplayEl.text(rightNow); 
}

displayTime()


saveBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var eventEntered = {
    eventTyped: eventInput.value,
  };

  eventEntered = JSON.stringify(eventEntered);

  localStorage.setItem("eventEntered", eventEntered);

  console.log(localStorage)

});

