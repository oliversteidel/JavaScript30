

var clockHandSecond = document.querySelector('.clock__hand--second');
var clockHandMinute = document.querySelector('.clock__hand--minute');
var clockHandHour = document.querySelector('.clock__hand--hour');


const updateClock = () => {
    var now = new Date();
    var hourPos = (now.getHours() * 30) + 180;
    var minutePos = (now.getMinutes() * 6) + 180;
    var secondPos = (now.getSeconds() * 6) + 180;

    clockHandHour.style.transform = `rotate(${hourPos}deg)`;
    clockHandMinute.style.transform = `rotate(${minutePos}deg)`;
    clockHandSecond.style.transform = `rotate(${secondPos}deg)`;

    setTimeout(updateClock, 1000);
}

updateClock();




