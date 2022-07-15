var blockHour = $(".hour")
var currentHour = moment().hours();
var userInputEl = $("#taskDesc");
var saveBtn = $(".saveBtn");
//console.log(saveBtn);
var textBlock = $(".description");

//current time and day 
const timeNow = moment().format("dddd, MMMM Do, h:mm");
$("#currentDay").text(timeNow);

//code that will cause past timeblocks to gray out
var timePass = function () {

    console.log(currentHour, blockHour);
    //loops over each time block
   for (var i = 9; i<=17; i++) {
    
    if (currentHour > i)  $(`#taskDesc-${i}`).addClass("past");
    //present timeblock is red
    if (currentHour === i)  $(`#taskDesc-${i}`).addClass("present");
    //future timeblocks are green
    if (currentHour < i)  $(`#taskDesc-${i}`).addClass("future");
  }
}
timePass();



 

var loadTask = function() {
    
        for (var i=0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var keyEl = $(`#${key}`);
         

       if (!value) {
        value = "";
        break;

       } else {
        
        keyEl.val(value);
       

       }

       //console.log(`${key} : ${value}` );  
       console.log(keyEl); 

    }
  };

 loadTask();
 
 // save input information into localstorage upon button click
saveBtn.click(function(e) {
    // uservalueEl targets the value within textarea
    var userValueEl = e.target.parentElement.childNodes[3].value
    //valueId targets the id of the text area
    var valueIdEl = e.target.parentElement.childNodes[3].id
    //saves content within text area
    console.log(e.target);
    localStorage.setItem(valueIdEl, userValueEl);
  
}); 