//current time and day 
const timeNow = moment().format("dddd, MMMM Do, h:mm");
$("#currentDay").text(timeNow);

//code that will cause past timeblocks to gray out
var timePass = function () {
    var timeBlock = $(".hour")
    .text()
    .trim()
    .replace('AM', '')
    .replace('PM', '');
    console.log(timeBlock);
    var currentHour = moment().hours();
    
  //  if 
        
    
} 
    
timePass();

//present timeblock is red

//future timeblocks are green

// save input information into localstorage upon button click



