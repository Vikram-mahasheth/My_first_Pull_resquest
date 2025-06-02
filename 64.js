// computed property basically means ,getting key from user and accessing value of  to that key
const readlineSync=require("readline-sync");
const key=readlineSync.question("what do you want to know about the mentor(name/age/city//country)-");


const obj={
    name:"vikram",
    age:100,


}
// we can add property to an object
obj.city="Mumbai";
obj.country="india";
console.log(obj.key);
console.log(obj[key]);