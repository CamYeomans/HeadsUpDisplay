var link = document.getElementById("Day");
var DateIntervale = setInterval(FindDate(), 1000);


function FindDate(){
    var d = new Date();
    var n = d.getDay();
    if(n == 0){
        link.innerHTML = "SUN";
    }
    if(n == 1){
        console.log("test");
        link.innerHTML = "MON";
    }
    
    if(n == 2){
        document.getElementById("Day").innerHTML = "TUE";
    }
    
    if(n == 3){
        document.getElementById("Day").innerHTML = "WED";
    }
    
    if(n == 4){
        document.getElementById("Day").innerHTML = "THU";
    }
    
    if(n == 5){
        document.getElementById("Day").innerHTML = "FRI";
    }
    
    if(n == 6){
        document.getElementById("Day").innerHTML = "SAT";
    }
}