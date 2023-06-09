var eventsData;




function setHourColors() {
    var now = dayjs();
    for (var i = 9; i < 18; i++)    {
       //$("#hour-" + i + "textarea").removeClass("future");
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
        }else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");
        }else if (i > now.hour()){
            $("#hour-" + i + " textarea").addClass("future");
        }
    }
}


var today = dayjs();
$("#currentDay").text(today.format('MMM D, YYYY'));

function handleSaveClick(event){
    //grab data in html
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val().trim();
    var hour = hourBlock.attr("id").split("-")[1];

    //modify data object
    eventsData["hour" + hour] = value;

    //store in local storage
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
    //sotre tnis hours data in local storage
    
}



//loads stored events Data and if empty it will print out empty string.
function loadStoredData(){
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData){
        eventsData = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour13: "",
            hour14: "",
            hour15: "",
            hour16: "",
            hour17: "",
        }
    }else if (eventsData !== null){
        
        $("#text1").innerHTML = eventsData.hour9;
        $("#text2").innerHTML = eventsData.hour10;
        $("#text3").innerHTML = eventsData.hour11;
        $("#text4").innerHTML = eventsData.hour12;
        $("#text5").innerHTML = eventsData.hour13;
        $("#text6").innerHTML = eventsData.hour14;
        $("#text7").innerHTML = eventsData.hour15;
        $("#text8").innerHTML = eventsData.hour16;
        $("#text9").innerHTML = eventsData.hour17;
        
    }else{
        return;
    }
}



$(".saveBtn").on("click", handleSaveClick);

$(function(){
    loadStoredData();
     setHourColors();
 
 });

 function init(){
 loadStoredData();
 }
 init();

 