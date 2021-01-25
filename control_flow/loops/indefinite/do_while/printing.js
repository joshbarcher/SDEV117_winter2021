//prompt the user for a number, until they enter one
let number;
do
{
    //ask for a number
    number = prompt("Enter a number");
    number = parseInt(number); //this will give us a number, or NaN
} while (Number.isNaN(number));

alert("Your number is " + number);
