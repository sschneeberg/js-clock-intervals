function secondRotation(seconds) {
    //60 sec in min
    //360 deg
    //6 deg per tick
    let degRotationS = seconds * 6;
    return degRotationS;
}

function degRotation(seconds) {
    seconds = Math.floor((Date.now() - startTime) / 1000);
    degS = secondRotation(seconds);
    document.getElementById('second').style.transform = `rotate(${degS}deg)`;
    return seconds;
}

//on amout of time
//update time passed
let secondsPassed = 0;
let startTime = Date.now();
setInterval(degRotation, 1000);