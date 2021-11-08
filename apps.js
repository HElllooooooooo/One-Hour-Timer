 // let minutes = document.querySelector("#minutes");
// let seconds = documetn.querySelector("#seconds");
// let startBtn = document.querySelector("#startBtn");
// let stopBtn = document.querySelector("#stopBtn");

// let myTimer;

// let myCounter = 1;

// startBtn.document.AddEventListener("click", function () {
//     myTimer = setInterval(function () {
//         myCounter++;
//         console.log(myCounter);
//     }, 1000)
// });

let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let Rst = document.querySelector("#Rst");

let myTimer;
let mySeconds = 0;
let myCounter = 0;
let myMinutes = 0;

startBtn.addEventListener("click", function () {
 startBtn.disabled = true;
 stopBtn.disabled = false;
 Rst.disabled = false;

 
 
 
    myTimer = setInterval(function () {
        myCounter++;
        mySeconds = myCounter;

        seconds.innerHTML = mySeconds;

        //Start counting seconds
        if (mySeconds > 59) {
            seconds.innerHTML = "00";
            myCounter = 0;
            myMinutes++;

         } else if(mySeconds > 9) {

        seconds.innerHTML = mySeconds;

    } else{

        seconds.innerHTML = "0" + mySeconds;
    } 

// Counting minutes
if (myMinutes > 59) {
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    myCounter = 0;
    myMinutes = 0;
    mySeconds = 0;
    clearInterval(myTimer)
} else if (mySeconds > 90) {
    minutes.innerHTML = myMinutes;

} else {
    minutes.innerHTML = "" + myMinutes
    mySeconds.innerHTML = "0" + seconds
}
}, 1000)
});

stopBtn.addEventListener("click", function () {
    clearInterval(myTimer);
    stopBtn.disabled = true;
    startBtn.disabled = false;

});
stopBtn.disabled = true;
Rst.addEventListener("click", function () {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  Rst.disabled = true;
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    myCounter = 0;
    myMinutes = 0;
    mySeconds = 0;
    clearInterval(myTimer)
   
});
Rst.disabled = true;