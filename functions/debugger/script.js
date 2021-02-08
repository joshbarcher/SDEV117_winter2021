let button = document.querySelector("button");
button.onclick = function(event)
{
    event.preventDefault();

    //get value, convert to number
    let text = document.getElementById("number");
    let value = text.value;
    let number = parseInt(text);

    //show output
    let output = document.getElementById("output");
    output.innerHTML = number;
}