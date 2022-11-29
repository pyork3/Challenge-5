var timeDisplayEl = $("#current-day");
var eventInput = document.getElementById("event-input");
var nineAm = document.getElementById("9"); 
var tenAm = document.getElementById("10"); 
var elevenAm = document.getElementById("11"); 
var twelvePm = document.getElementById("12"); 
var onePm = document.getElementById("13"); 
var twoPm = document.getElementById("14"); 
var threePm = document.getElementById("15"); 
var fourPm = document.getElementById("16"); 
var fivePm = document.getElementById("17"); 

function displayTime() {
  var rightNow = moment().format('dddd, MMMM Do');
  timeDisplayEl.text(rightNow); 
}

displayTime()


function init() {
  var storedEvents = JSON.parse(localStorage.getItem("events"));

  if (storedEvents !== null) {
    eventEntered = storedEvents;
    rows = document.getElementsByClassName("row");
    [...rows].forEach(function(row){
      var id = row.getAttribute("id");
      var value = eventEntered[id];
      row.children[1].value = value;
    })
  } 
}

btns = document.getElementsByClassName("saveBtn");
  for (var i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
      var eventEntered = {
        nineAm: nineAm.value,
        tenAm: tenAm.value,
        elevenAm: elevenAm.value,
        twelvePm: twelvePm.value,
        onePm: onePm.value,
        twoPm: twoPm.value,
        threePm: threePm.value,
        fourPm: fourPm.value,
        fivePm: fivePm.value,
      };
    
      eventEntered = JSON.stringify(eventEntered);
    
      localStorage.setItem("events", eventEntered);
    
      console.log(localStorage)
    });
  }

/*saveBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var eventEntered = {
    nineAm: nineAm.value,
    tenAm: tenAm.value,
    elevenAm: elevenAm.value,
    twelvePm: twelvePm.value,
    onePm: onePm.value,
    twoPm: twoPm.value,
    threePm: threePm.value,
    fourPm: fourPm.value,
    fivePm: fivePm.value,
  };


  eventEntered = JSON.stringify(eventEntered);

  localStorage.setItem("events", eventEntered);

  console.log(localStorage)

}); */



// Runs the color stuff
var currentHour = moment().hours()
for(let i=9; i<=17; i++){
  if(i < currentHour){
    $("#"+i).addClass("past")
  } else if( i === currentHour){
    $("#"+i).addClass("present")
  } else {$("#"+i).addClass("future")} 
};


init()
