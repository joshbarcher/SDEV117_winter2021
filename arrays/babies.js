//create some other arrays
let names = ["Jordan", "Elliot", "Alex", "Tyler", "Carson"];

//add some boy names
addNames("Tommy", "Jacob", "Spencer", "Trevor", "Zack");

//add some girl names
addNames("Sonia", "Kelly", "Lily", "Emma");

//this function adds names to the page
function addNames()
{
    //print the arguments to the console
    console.log(arguments);

    let list = document.querySelector("ol");

    for (let i = 0; i < arguments.length; i++)
    {
        let name = arguments[i];
        let item = "<li>" + name + "</li>";
        list.innerHTML += item;
    }
}