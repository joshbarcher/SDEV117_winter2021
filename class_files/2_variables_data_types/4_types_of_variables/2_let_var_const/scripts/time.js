/*
    This script will calculate the time components (seconds, minutes, hours, ...)
    since the Unix Epoch.

    Author: Josh Archer
    Date: 1/11/2021
    File: time.js
 */

//declare my constants first, at the top of the script!
const MILLIS_IN_SECOND = 1000;
const SECONDS_IN_MIN = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365; //fudge a bit here...

//calculate our time values
let milliseconds = new Date().getTime();
let seconds = milliseconds / MILLIS_IN_SECOND;
let minutes = seconds / SECONDS_IN_MIN;
let hours = minutes / MINUTES_IN_HOUR;
let days = hours / HOURS_IN_DAY;
let years = days / DAYS_IN_YEAR;

//round our numbers
milliseconds = Math.round(milliseconds);
seconds = Math.round(seconds);
minutes = Math.round(minutes);
hours = Math.round(hours);
days = Math.round(days);
years = Math.round(years);

//display them
let element = document.querySelector("div#millis span");
element.innerHTML = milliseconds;

element = document.querySelector("div#seconds span");
element.innerHTML = seconds;

element = document.querySelector("div#minutes span");
element.innerHTML = minutes;

element = document.querySelector("div#hours span");
element.innerHTML = hours;

element = document.querySelector("div#days span");
element.innerHTML = days;

element = document.querySelector("div#years span");
element.innerHTML = years;

