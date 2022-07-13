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
    //finally got it to look at ID
    blockHour[i] = parseInt(blockHour[i].id)
    
    

    console.log(blockHour[i]);
    

    if (currentHour > blockHour[i]) {
    $(".description").addClass("past");
   } 

   }
    
   }



  
timePass();

var saveContent = function (){
    $('')
}


//present timeblock is red

//future timeblocks are green

// save input information into localstorage upon button click



