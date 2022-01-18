const workBtn = document.getElementById("work-btn");
const shortBreakBtn = document.getElementById("short-break-btn");
const longBreakBtn = document.getElementById("long-break-btn");
const timeDisplay = document.getElementById("time-display");
const focusedWork = document.getElementById("focused-work");

const workTriangle = document.getElementById("workTriangle");
const shortTriangle = document.getElementById("shortTriangle");
const longTriangle = document.getElementById("longTriangle");

let pomodoro1 = document.getElementById("one");
let pomodoro2 = document.getElementById("two");
let pomodoro3 = document.getElementById("three");

let ok = 1;

let min = 0;
let focusedMin = 0;
let sec = 0;
let focusedSec = 0;
let minSec = null;
let focused = null;
let totalFocusedWork = 0;
const workInterval = 25;
const shortBreakInterval = 5;
const longBreakInterval = 15;
let pomodoroNumber = 3;

workBtn.addEventListener('click', function(){
    if(ok == 1) {
        ok = 0;
        workTriangle.classList.add("activ");
        shortTriangle.classList.remove("activ");
        longTriangle.classList.remove("activ");
        timePassed(workInterval);
        focusedWorkTime(workInterval);
    }
})

shortBreakBtn.addEventListener('click', function(){
    if(ok == 1) {
    ok = 0;
    workTriangle.classList.remove("activ");
    shortTriangle.classList.add("activ");
    longTriangle.classList.remove("activ");
    timePassed(shortBreakInterval);
}
})

longBreakBtn.addEventListener('click', function(){
    if(ok == 1) {
    ok = 0;
    workTriangle.classList.remove("activ");
    shortTriangle.classList.remove("activ");
    longTriangle.classList.add("activ");
    timePassed(longBreakInterval);
    }
})

function timePassed(maxTime){
     minSec = setInterval(function() {
        sec += 1;
        if (sec == 60){
            min += 1;
            sec = 0;
        }
        if (sec <= 9){
            timeDisplay.textContent = min + ':0' + sec;
        } else{
            timeDisplay.textContent = min + ':' + sec;
        }
        if(min == maxTime){
            var audio = new Audio('violin.wav');
            audio.play();
            min = 0;
            ok = 1;
            timeDisplay.textContent = '0:00';
            clearInterval(minSec);
        }
    },1000)
    
}

function focusedWorkTime(maxTime){
    focused = setInterval(function() {
        focusedSec += 1;
        if (focusedSec == 60){
            focusedMin += 1;
            focusedSec = 0;
        }
        if (focusedSec <= 9){
            focusedWork.textContent = totalFocusedWork + focusedMin + ':0' + focusedSec;
        } else{
            focusedWork.textContent = totalFocusedWork + focusedMin + ':' + focusedSec;
        }
        if(focusedMin == maxTime){
            focusedMin = 0;
            totalFocusedWork += workInterval;
                        if(pomodoroNumber > 1) {
                pomodoroNumber -= 1;
            } else {
                pomodoroNumber = 3;
            }
            remainedTomatoes(pomodoroNumber);
            clearInterval(focused);
        }
    },1000)
   
}

function remainedTomatoes(nr){
    if(nr == 3) {
        pomodoro1.style.opacity = 1;
        pomodoro2.style.opacity = 1;
        pomodoro3.style.opacity = 1;
    } else if(nr == 2) {
        pomodoro1.style.opacity = 1;
        pomodoro2.style.opacity = 1;
        pomodoro3.style.opacity = 0.4;
    } else {
        pomodoro1.style.opacity = 1;
        pomodoro2.style.opacity = 0.4;
        pomodoro3.style.opacity = 0.4;
    }
}
