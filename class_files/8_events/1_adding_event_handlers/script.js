let button = document.querySelector("button");

/*button.onclick = function(event) {
    console.log("clicked");
};

button.onmouseenter = function(event) {
    console.log("entered");
};

//alternative mechanic
button.addEventListener("mouseleave", function(event) {
    console.log("left");
});

button.onmousemove = function(event) {
    console.log("moved");
};*/

//you can only register a single event handler
//with on* properties
/*button.onclick = function(event) {
    console.log("clicked in function #1");
};

button.onclick = function(event) {
    console.log("clicked in function #2");
};

button.onclick = function(event) {
    console.log("clicked in function #3");
};

button.onclick = function(event) {
    console.log("clicked in function #4");
};

button.onclick = function(event) {
    console.log("clicked in function #5");
};*/

//you can register more than one event handler
//with addEventListener()
button.addEventListener("click", function(event) {
    console.log("clicked in function #1");
});

button.addEventListener("click", function(event) {
    console.log("clicked in function #2");
});

button.addEventListener("click", function(event) {
    console.log("clicked in function #3");
});

button.addEventListener("click", function(event) {
    console.log("clicked in function #4");
});

button.addEventListener("click", function(event) {
    console.log("clicked in function #5");
});
