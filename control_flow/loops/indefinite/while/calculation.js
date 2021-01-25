for (let i = 1; i <= 30; i++)
{
    //create a few variables to help out
    let sum = 0;
    let output = "0";

    //loop until my sum exceeds 100
    let loopCount = 0;
    while (sum <= 100)
    {
        //count the number of times in the loop
        loopCount++;

        //generate number in range [1, 10]
        let percentage = Math.random();
        let number = 10 * percentage;
        number = Math.ceil(number);

        //add to our sum
        sum += number;

        //prepare our output
        output += " + " + number;
    }

    /*console.log("You looped " + loopCount + " times");*/
    console.log(output + " = " + sum);
}

