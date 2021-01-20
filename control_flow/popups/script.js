//read in operands
let oper1 = prompt("Enter a number");
let oper2 = prompt("Enter a number");

//these are strings!
console.log(typeof oper1);
console.log(typeof oper2);

//convert our string inputs to numbers
oper1 = parseInt(oper1);
oper2 = parseInt(oper2);

//these are numbers!
console.log(typeof oper1);
console.log(typeof oper2);

//perform a calculation
let addition = oper1 + oper2;

//show my results
alert(oper1 + " + " + oper2 + " = " + addition);