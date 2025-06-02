/**
 * user enters a number ,if the number is gretaer than 50 then ask the user to enter a number less than 50 again
 */
let a=require("readline-sync").question("enter number less than 50");
 console.log(a);
while(a>=50)
{   
    a=require("readline-sync").question("enter number less than 50-");
    console.log(a);
}
console.log("number accepted");