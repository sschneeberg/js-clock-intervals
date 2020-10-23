function secondRotation(secs) {
    //60 sec in min
    //360 deg
    //6 deg per tick
    let degRotationS = secs * 6;
    return degRotationS;
}

function minuteRotation(secs) {
    //3600 sec
    //360 deg
    //0.1 deg per tick
    let degRotationM = secs * 0.1;
    return degRotationM;
}

function hourRotation(secs) {
    //12*60*60 seconds
    //360 deg
    //0.00167 deg per tick
    let degRotationH = secs * 0.0083333;
    return degRotationH;
}


function degRotation() {
    let secs = Math.floor((Date.now() - startTime) / 1000) + (currTime);
    let degS = secondRotation(secs);
    let degM = minuteRotation(secs);
    let degH = hourRotation(secs);
    document.getElementById('second').style.transform = `rotate(${degS}deg)`;
    document.getElementById('minute').style.transform = `rotate(${degM}deg)`;
    document.getElementById('hour').style.transform = `rotate(${degH}deg)`;
}

function tick() {
    seconds += 1;
    if (seconds === 60) {
        minutes += 1;
        seconds = 0;
    }
    if (minutes === 60) {
        hours += 1;
        minutes = 0;
    }
    console.log(seconds, minutes, hours);
    degRotation();
}

function setTime() {
    let sec = now.getSeconds();
    let minSec = (now.getMinutes() * 60);
    let hourSec = (now.getHours() * 3600);
    currTime = hourSec + minSec + sec;
    let degS = secondRotation(sec);
    let degM = minuteRotation((minSec + sec));
    let degH = hourRotation((hourSec + minSec + sec));
    document.getElementById('second').style.transform = `rotate(${degS}deg)`;
    document.getElementById('minute').style.transform = `rotate(${degM}deg)`;
    document.getElementById('hour').style.transform = `rotate(${degH}deg)`;
}

//on amout of time
//update time passed
let secondsPassed = 0;
let startTime = 0;
let minutes = 0;
let seconds = 0;
let hours = 0;
let now = new Date();
let currTime = 0;


document.addEventListener('DOMContentLoaded', function() {
    setTime();
    startTime = Date.now();
    setInterval(tick, 1000);
});