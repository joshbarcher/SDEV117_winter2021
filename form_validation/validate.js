window.onload = function() {
    //set the event handler for the button
    document.querySelector("button").onclick = quizCheck;
};

//event handler
function quizCheck(event)
{
    //prevent the form submission
    event.preventDefault();

    //determine which radio button is selected
    let buttons = document.querySelectorAll("input[type='radio']");
    console.log(buttons);

    for (let i = 0; i < buttons.length; i++)
    {
        if (buttons[i].checked)
        {
            console.log("The radio button you click on is - " + buttons[i].value);
        }
    }
}












