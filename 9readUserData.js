/* 
 Read data from user
*/
const readlineSync=require("readline-sync");
//readlineSync.question();
const userName=readlineSync.question("May i know your name?");
console.log(typeof(userName));

const x=readlineSync.question("May i know your number?");
console.log(typeof(x));


const userAge=Number(readlineSync.question("May i know your age?"));
console.log(typeof(userAge));



const enter=require("readline-sync");
//readlineSync.question();
const userName1=enter.question("May i know your name?");
console.log(typeof(userName));

const x1=enter.question("May i know your number?");
console.log(typeof(x));


const userAge1=Number(enter.question("May i know your age?"));
console.log(typeof(userAge));
