const readlineSync = require('readline-sync');

const obj = {
    name: 'Prakash',
    age: 100
};

// Getting a key from the user
const key = readlineSync.question('What do you want to know about the mentor? (name, age, city, state): ');

// Adding the key to the object dynamically
obj[key] = obj[key] || "Not Available";

console.log(obj[key]);
console.log(obj);