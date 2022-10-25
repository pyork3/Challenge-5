var timeDisplayEl = $('#currentDay');





function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }