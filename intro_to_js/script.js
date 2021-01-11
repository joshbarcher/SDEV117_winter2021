/*
    This is my first script!
    Author: Josh Archer
    File: script.js
    Date: 1/6/2021
 */

//Update the page with a message!
let mySpan = document.querySelector("span");
mySpan.innerHTML = "I hope 2021 is better than 2020!";

//select an element by id
let myAside = document.getElementById("newsworthy");
myAside.innerHTML = "Thank goodness, 2020 is over!!!";
myAside.style.fontWeight = "bold";
myAside.style.textDecoration = "underline";

//select an element by css selector
let element = document.querySelector("aside");
element.style.backgroundColor = "lightblue";