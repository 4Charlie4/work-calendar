var blockHour = $(".hour")
var currentHour = moment().hours();
var userInputEl = $("#taskDesc");
var saveBtn = $(".saveBtn");
var timeContEl = $(".container");

//current time and day 
const timeNow = moment().format("dddd, MMMM Do, h:mm");
$("#currentDay").text(timeNow);

//code that will cause past timeblocks to gray out
var timePass = function () {

    console.log(currentHour);
    //loops over each time block
   for (var i = 0; i<blockHour.length; i++) {

    //grabbing id of each time block
    blockHour[i] = parseInt(blockHour[i].id)
    
    console.log(blockHour[i]);
    
    if (currentHour > blockHour[i]) {

    $(".row").addClass("past");
}
   }

}

timePass();

var saveInput = function() {
    localStorage.setItem("Task",JSON.stringify(userInputEl.value));
};

saveBtn.addEventListener("click", function(e) {
    console.log(e.target);
    console.log("Saved");
    saveInput();
});


//present timeblock is red

//future timeblocks are green

// save input information into localstorage upon button click



