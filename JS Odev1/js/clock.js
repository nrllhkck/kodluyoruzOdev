function startClock(){
    var time = new Date();
    var weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    hour = doublezeroCheck(hour)
    minute = doublezeroCheck(minute)
    second = doublezeroCheck(second)
    document.querySelector('#digiClock').innerHTML = `${hour}:${minute}:${second} ${weekday[time.getDay()]}` 

    setTimeout('startClock()', 1000)
}
function doublezeroCheck(val){
    if (val < 10){val = "0"+val}
    return val;
}
window.onload = startClock;

var person = prompt("Lütfen isminiz yazın: ");
document.querySelector("#myName").innerHTML=person;


