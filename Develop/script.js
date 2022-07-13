//current time and day 
const timeNow = moment().format("dddd, MMMM Do, h:mm");
$("#currentDay").text(timeNow);

//code that will cause past timeblocks to gray out
var timePass = function () {
    var currentHour = moment().hours();
    console.log(currentHour);

   // var eachBlock = $(".hour").each(function() {
   // var timeBlock = $(this)
   // .text()
   // .trim()
   // .replace('AM', '')
  //  .replace('PM', '')
   // });

   var blockHour = $(".hour")
   for (var i = 0; i<blockHour.length; i++) {
    blockHour[i] = parseInt(blockHour[i].textContent)
    var timeBlock = moment(blockHour[i], "HH").format("LTS")
    

    console.log(blockHour[i]);
    console.log(timeBlock);

    if (moment().isAfter(blockHour[i])) {
    $(".textarea").addClass("past");
   }
    
   }



  } 
timePass();


//present timeblock is red

//future timeblocks are green

// save input information into localstorage upon button click



