//create an object to represent our class
let ourClass = {
    title: "Web Programming w/ Javascript",
    schedule: "MW 9-11am, F 9am",
    seats: 20,
    courseNumber: "SDEV 117",
    students: [
        "Yuki", "Thomas", "Patrick", "Mayank", "Mathieu",
        "Lennox", "Kevin"
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
    projectorAvailable: false
};

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
    console.log(ourClass.students[i]);
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








