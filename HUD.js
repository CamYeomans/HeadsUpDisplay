function updateClock ( )
{
var currentTime = new Date ( );
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();

currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
currentHours = ( currentHours == 0 ) ? 12 : currentHours;

var currentTimeString = currentHours + ":" + currentMinutes;

if(timeOfDay == "AM"){
    document.getElementById("PM").classList.remove("hidden");
    document.getElementById("AM").classList.add("hidden");
}else{
    document.getElementById("AM").classList.remove("hidden");
    document.getElementById("PM").classList.add("hidden");
}

document.getElementById("HHMM").firstChild.nodeValue = currentTimeString;

var day = currentTime.getDay();

if(day == 0){
    document.getElementById("Day").firstChild.nodeValue = "Sunday";
}
if(day == 1){
    document.getElementById("Day").firstChild.nodeValue = "Monday";
}
if(day == 2){
    document.getElementById("Day").firstChild.nodeValue = "Tuesday";
}
if(day == 3){
    document.getElementById("Day").firstChild.nodeValue = "Wednesday";
}
if(day == 4){
    document.getElementById("Day").firstChild.nodeValue = "Thursday";
}
if(day == 5){
    document.getElementById("Day").firstChild.nodeValue = "Friday";
}
if(day == 6){
    document.getElementById("Day").firstChild.nodeValue = "Saturday";
}




}