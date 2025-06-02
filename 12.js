const readlineSync=require("readline-sync");
const number=Number(readlineSync.question("enter a number?"));
const remainder=number%3;
if(remainder==0){
    console.log("fizz");
}
else if(number%5==0){
    console.log("Buzz");
}