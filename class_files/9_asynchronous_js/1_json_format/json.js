let object =  {name: "John", age: 31, city: "New York"};
let jsonText =  '{"name": "John", "age": 31, "city": "New York"}';

//print out the object and JSON string to the console
console.log(object);
console.log(jsonText);

//convert the text to an object
let person = JSON.parse(jsonText);
console.log(person);

let text = JSON.stringify(object);
console.log(text);