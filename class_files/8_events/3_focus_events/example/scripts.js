window.onload = function() {
    //select my button and add event handlers for focus
    let button = document.querySelector("button");

    //gain focus
    button.onfocus = function(event) {
        button.style.backgroundColor = "black";
        button.style.color = "yellow";
    };

    //lose focus
    button.onblur = function(event) {
        //set button colors back to defaults
        button.style.backgroundColor = "";
        button.style.color = "";
    };
};