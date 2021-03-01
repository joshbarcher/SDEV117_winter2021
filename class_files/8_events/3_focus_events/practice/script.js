window.onload = function() {
    //select all <input> and <select> elements
    let inputs = document.querySelectorAll("input, select");

    //loop over all the elements and add event handlers
    for (let i = 0; i < inputs.length; i++)
    {
        //select one of the elements in the array-like structure
        let input = inputs[i];

        input.onfocus = function() {
            input.style.backgroundColor = "rgb(140,231,132)";
        };

        input.onblur = function() {
            input.style.backgroundColor = "";
        };
    }
};