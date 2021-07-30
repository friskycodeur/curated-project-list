const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minsEl=document.getElementById("mins");
const secsEl=document.getElementById("secs");

const occasion="4 Nov 2021";


function countDown() {
    const eventDate=new Date(occasion);
    const currentDate=new Date();
    const totalSecs=(eventDate-currentDate)/1000;
    const Days=Math.floor(totalSecs / 3600 /24);
    const Hours=Math.floor(totalSecs / 3600) % 24;
    const Mins=Math.floor(totalSecs / 60) % 60;
    const Secs = Math.floor(totalSecs)%60;

    daysEl.innerHTML=Days;
    hoursEl.innerHTML=formatTime(Hours);    
    minsEl.innerHTML=formatTime(Mins);
    secsEl.innerHTML=formatTime(Secs);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown,1000);