function secondRotation(seconds) {
    //60 sec in min
    //360 deg
    //6 deg per tick
    let degRotationS = seconds * 6;
    return degRotationS;
}

function minuteRotation(seconds) {
    //3600 sec
    //360 deg
    //0.1 deg per tick
    let degRotationM = seconds * 0.1;
    return degRotationM;
}


function degRotation() {
    seconds = Math.floor((Date.now() - startTime) / 1000);
    degS = secondRotation(seconds);
    degM = minuteRotation(seconds);

    document.getElementById('second').style.transform = `rotate(${degS}deg)`;
    document.getElementById('minute').style.transform = `rotate(${degM}deg)`;
}

//on amout of time
//update time passed
let secondsPassed = 0;
let startTime = Date.now();
setInterval(degRotation, 1000);