// Elements of time on webpage
const title_display = document.getElementById("title");
const days_display = document.getElementById("days");
const hours_display = document.getElementById("hours");
const minutes_display = document.getElementById("minutes");
const seconds_display = document.getElementById("seconds");

function TimeTogether() {

    // Calc
    date_start = new Date("January 3, 2023");
    date_now = new Date();

    // Data
    one_day = 1000*60*60*24;
    seconds = Math.floor((date_now - date_start) / 1000);
    minutes = Math.floor(seconds/60);
    hours = Math.floor(minutes/60);
    days = Math.floor((date_now - date_start) / one_day);

    hours = hours-(days*24); //(years*365*24)-(days*24);
    minutes = minutes-(days*24*60)-(hours*60); //minutes-(years*365*24*60)-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60); //seconds-(years*365*24*60*60)-(days*24*60*60)-(hours*60*60)-(minutes*60);

    months = Math.floor(days / 30);

    // Edit initial time on webpage
    days_display.innerHTML = days;
    hours_display.innerHTML = hours;
    minutes_display.innerHTML = minutes;
    seconds_display.innerHTML = seconds;
    title_display.innerHTML = months + "Months Together";
}

function CountUp() {
    seconds_display.innerHTML = parseInt(seconds_display.innerHTML) + 1;
    // Check if seconds > 59
    if (parseInt(seconds_display.innerHTML) > 59) {
        seconds_display.innerHTML = 0;
        minutes_display.innerHTML = parseInt(minutes_display.innerHTML) + 1;
    }
    // Check if minutes > 59
    if (parseInt(minutes_display.innerHTML) > 59) {
        minutes_display.innerHTML = 0;
        hours_display.innerHTML = parseInt(hours_display.innerHTML) + 1;
    }
    // Check if hours > 23
    if (parseInt(hours_display.innerHTML) > 23) {
        hours_display.innerHTML = 0;
        days_display.innerHTML = parseInt(days_display.innerHTML) + 1;
    }
}


// One-time exec
TimeTogether()

// Loop (1 second)
setInterval(CountUp, 1000);