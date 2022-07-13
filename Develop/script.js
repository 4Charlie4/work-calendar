//current time and day 
const timeNow = moment().format("dddd, MMMM Do, h:mm");
$("#currentDay").text(timeNow);

//code that will cause past timeblocks to gray out
var timePass = function () {
    var time = $(".hour")
    .text()
    .trim()
    console.log(time);
    
    if (moment().isAfter(time)) {
        
        $(".hour").addClass("past");
    } 
    

}
timePass();

//present timeblock is red

//future timeblocks are green

// save input information into localstorage upon button click



