//generate a random number
let number = Math.floor(Math.random() * 10) + 1; //number in [1, 10]
console.log("Random num: " + number);

//put together a path to an image
let path = "images/" + number + ".png";

//update the <img> element on the page
let img = document.querySelector("img");
img.setAttribute("src", path);