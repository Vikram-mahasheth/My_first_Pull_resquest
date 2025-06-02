//like string,array it also has includes function
//returns booleanvalue

const availableSize=["S","M","L","XL","XXl","XXXL"];
const readlineSync=require("readline-sync");
const userSize=readlineSync.question("enter your size you want(S/M/L/XL/XXL/XXXL)---");
const isSizeAvailable=availableSize.includes(userSize);
console.log(isSizeAvailable);


