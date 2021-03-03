window.onload = function() {
    let textbox = document.getElementById("textbox");
    textbox.onkeypress = record;
}

function record(event)
{
    let keyPressed = event.key;
    console.log("Pressed: " + keyPressed);

    let keyCode = event.code;
    console.log("Code: " + keyCode);

    if (keyPressed === "a")
    {
        //stop the key from being entered, if "a"
        event.preventDefault();
    }
}

