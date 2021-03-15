window.onload = function() {
    let button = document.getElementById("submit");
    button.onclick = validateForm;
}

function validateForm(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //validate my fields...
    let nameHasErrors = validateName();
    let ageHasErrors = validateAge();

    //if there were no errors
    if (!nameHasErrors && !ageHasErrors)
    {
        //submit the form
        document.forms['questions'].submit();
    }
}

function validateName()
{
    //validate the form...
    let name = document.getElementById("name").value;

    //if the name bad...
    if (name === undefined || name.length < 3 || name.length > 10)
    {
        let errorText = document.getElementById("name-error");
        errorText.style.display = "inline-block";
        return true;
    }
    else
    {
        //the name is good...
        let errorText = document.getElementById("name-error");
        errorText.style.display = "none"; //hide the error text
        return false;
    }
}

function validateAge()
{
    //validate the form...
    let age = document.getElementById("age").value;
    age = parseInt(age);

    //if the name bad...
    if (Number.isNaN(age) || age < 1 || age > 100)
    {
        let errorText = document.getElementById("age-error");
        errorText.style.display = "inline-block";
        return true;
    }
    else
    {
        //the name is good...
        let errorText = document.getElementById("age-error");
        errorText.style.display = "none"; //hide the error text
        return false;
    }
}