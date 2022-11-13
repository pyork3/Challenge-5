var timeDisplayEl = $('#current-day');
 

function displayTime() {
  var rightNow = moment().format('dddd, MMMM Do');
  timeDisplayEl.text(rightNow); 
}

displayTime()