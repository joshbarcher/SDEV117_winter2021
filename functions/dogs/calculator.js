//invoke (or call) the function
let aryaAge = humanToDogYears(4);
console.log("Arya is " + aryaAge + " years old!");
let snoopAge = humanToDogYears(3);
console.log("Snoop is " + snoopAge + " years old!");

console.log("Whoola is " + humanToDogYears(7) + " years old!");

//declare a function
function humanToDogYears(dogYears)
{
    //convert the parameter to an integer
    dogYears = parseInt(dogYears);

    if (Number.isNaN(dogYears) || dogYears <= 0)
    {
        return NaN;
    }
    else
    {
        //perform the calculation
        if (dogYears <= 3)
        {
            return dogYears * 10;
        }
        else
        {
            //remaining years are worth 7 each
            let remainingYears = dogYears - 3;
            return 30 + remainingYears * 7;
        }
    }
}