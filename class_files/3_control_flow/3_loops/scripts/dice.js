let button = document.querySelector("button");
button.onclick = function(event) {
    //stop the form from submitting
    event.preventDefault();

    //get the dice area
    let area = document.querySelector("section.dice-area");

    //clear old contents from the area
    area.innerHTML = "";

    //get the target number
    let target = document.getElementById("target"); //HTML element
    target = target.value; //string
    target = parseInt(target) //number

    //make sure we have a number
    if (Number.isNaN(target) || target < 1 || target > 6)
    {
        alert("Number is not valid!");
    }
    else
    {
        //generate random numbers (and display them as dice)
        //until the targetted number is chosen
        let random = 0;
        while (random !== target)
        {
            //generate numbers in range [1, 6]
            random = Math.floor(Math.random() * 6) + 1;

            //show the dice that we rolled
            let imageName = random + ".png";
            area.innerHTML += "<img src='images/" + imageName +
                "' alt='A die'>";
        }
    }
};

