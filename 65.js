// computed property basically means ,getting key from user and accessing value of  to that key
const readlineSync=require("readline-sync");
const key=readlineSync.question("what do you want to know about the mentor(name/age/city//country)-");
const course=readlineSync.question("which course you want to leran(html/css/js/react/reduxx)")

const obj={
    name:"vikram",
    age:100,
    [course]:"courses not available" //course is a variable which contains a property,[course] cpmpute the property or key
    // we are assigning html as a key here
}
// we can add property to an object
obj.city="Mumbai";
obj.country="india";
console.log(obj[course]);
