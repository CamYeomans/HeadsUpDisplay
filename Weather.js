function gettingJSON(){
    document.write("jquery loaded");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=6e7a1f81fcfdd566b8766029bff1b08f",function(json){
        document.write(JSON.stringify(json));
    });
}