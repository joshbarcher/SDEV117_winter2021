window.onload = function() {
    let button = document.getElementById("submit");
    button.onclick = validateForm;
}

function validateForm(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //validate the form...
    let name = document.getElementById("name").value;

    //is the name bad...
    if (name === undefined || name.length < 3 || name.length > 10)
    {
        let errorText = document.getElementById("name-error");
        errorText.style.display = "inline-block";
    }
    else
    {
        //the name is good...
        let errorText = document.getElementById("name-error");
        errorText.style.display = "none"; //hide the error text
    }
}

