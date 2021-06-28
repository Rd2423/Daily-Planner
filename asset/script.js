// Date
const today = moment();
var newformat = (today.format('MMM Do YY'));
$("#currentDay").text(newformat);


// Regular hours of work
var startTime = 8;
var endTime = 17;





// creating a row containing the hour, the description and the submit button


var createRows = function(){


if (endTime > startTime){
    startTime++;
}

var container= $(".container");
var containerOfAll = $('<div>').addClass("row");
$(container).append(containerOfAll);
$(container);
var hourEl = $('<div>').addClass("col-1").addClass("hour").text(startTime + "h").css("margin", "0px");
var textArea = $('<input>').addClass("col-8").css("margin", "0px");
var submitBtn = $('<button>').addClass("col-1").addClass("saveBtn").addClass("saveBtn i:hover").addClass("fas fa-save").css("margin", "0px");

$(containerOfAll).append(hourEl).append(textArea).append(submitBtn)


var currentTime = moment().hour();
console.log(currentTime);

if(currentTime === startTime){
    $(textArea).addClass("present")
} else if (currentTime > startTime){
    $(textArea).addClass("future")
}else if (currentTime < startTime){
    $(textArea).addClass("past")
}
};


// function to add multiple rows of 'createRows'
var multipleRows = function(){
    var numberOfRows = 10;
    for(var i = 0; i < numberOfRows; i++){
        createRows();
    }
};

// save to local storage

$(createRows).on("click", function(){
    var inputValue = $(textArea).val();

    if(inputValue){
        localStorage.setItem(inputValue);
    }
})







multipleRows();



