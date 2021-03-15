//a pattern that recognizes zip codes
let zipPattern = /^\d{5}(-\d{4})?$/;
let testZips = ["98737", "98210", "9999", "98", "989999", "98377-1122",
                "98377--1122", "98377-112", "", "aaaaa", "bbbbb-cccc"];

for (let i = 0; i < testZips.length; i++)
{
    let zip = testZips[i];
    let resultOfTest = zipPattern.test(zip);
    console.log(zip + ": " + resultOfTest);
}
console.log(); //new line!

//a pattern that recognizes names (no titles, middle initial or name)
let namePattern = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
let testNames = ["Josh", "Todd Smith", "Will R. Frank", "Raechal Merry Brook",
                 "Alyssia Gilland-Zulevic", "Millie Sandy Bobby-Todd",
                 "Billy Bob Thorton Smith Allen", "x"];

for (let i = 0; i < testNames.length; i++)
{
    let name = testNames[i];
    let resultOfTest = namePattern.test(name);
    console.log(name + ": " + resultOfTest);
}
console.log(); //new line!

//a pattern that recognizes a sentence