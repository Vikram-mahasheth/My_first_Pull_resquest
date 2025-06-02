

// take input from users
const firstName=require("readline-sync").question("enter firstName");
const nickName=require("readline-sync").question("enter secondName");;

const userName=firstName|| nickName;
console.log(`name is ${userName}`);
console.log(typeof userName);