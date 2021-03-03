//wait until the DOM loads, using the onload event
window.onload = function() {
    //register button event handlers
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].onclick = handleClick;
    }
};

function handleClick(event)
{
    //get the button
    let button = event.target;
    button.textContent += " was clicked";
    button.style.border = "5px solid red";

    console.log(button.textContent);
}

