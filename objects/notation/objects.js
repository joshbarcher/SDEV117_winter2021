//create an object to represent our class
let ourClass = {
    title: "Web Programming w/ Javascript",
    schedule: "MW 9-11am, F 9am",
    seats: 20,
    courseNumber: "SDEV 117",
    students: [
        {first: "Yuki", last: "Yamada"},
        {first: "Thomas", last: "Loudon"},
        {first: "Patrick", last: "Luong"},
        {first: "Mayank", last: "Parkash"},
        {first: "Mathieu", last: "Cameron"},
        {first: "Lennox", last: "???"},
        {first: "Kevin", last: "Price"}
    ],
    building: "Home",
    roomNumber: 1,
    instructor: {
        first: "Josh",
        last: "Archer",
        middle: "B",
        officeHours: "1-2pm daily"
    },
    virtual: true,
    tutorsAvailable: true,
    projectorAvailable: false,
    incrementSeats: function() {
        //this function is located in an object!
        //the keyword "this" represents the object
        //that contains this function
        this.seats++;
    },
    printInstructor: function() {
        console.log(this.instructor.first + " " +
                    this.instructor.last);
    },
    changeRoomNumber: changeNumber
};

let storeInMall = {
    name: "Verizon Store",
    owner: "Bob Smith",
    roomNumber: 11,
    changeRoomNumber: changeNumber
}

function changeNumber(number)
{
    this.roomNumber = number;
}

//interact with some interesting properties on our class
console.log(ourClass.title);
console.log("Instructor: " + ourClass.instructor);

ourClass.roomNumber = 3;
ourClass.seats = 24;
console.log(ourClass); //log the entire object (very important)!

//loop over and print out the names of students in our class
console.log();
for (let i = 0; i < ourClass.students.length; i++)
{
    console.log(ourClass.students[i].first);
}
console.log();

if (ourClass.projectorAvailable)
{
    console.log("Great!");
}
else
{
    console.log("Oh, no!");
}

//print out nested object properties
console.log("Office hours: " + ourClass.instructor.officeHours)

console.log("Seats: " + ourClass.seats);
ourClass.incrementSeats();
ourClass.incrementSeats();
ourClass.incrementSeats();
console.log("Seats: " + ourClass.seats);
console.log();

ourClass.printInstructor();
ourClass.changeRoomNumber(3);
console.log("Room #" + ourClass.roomNumber);





