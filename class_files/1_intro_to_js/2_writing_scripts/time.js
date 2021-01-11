//calculate the number of milliseconds
//since new years!
let newYears  = new Date(2021, 0, 1).getTime();
let now = new Date().getTime();
let milliseconds = now - newYears;

let span = document.querySelector("span");
span.innerHTML = milliseconds;