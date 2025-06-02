/**
 * madam->madam
 * paalindrome string;
 */

const inputStr="madami";
const arr=[1,2,3,4,5];
console.log(arr.reverse());
//so to implemnt reverse on string convert string into array and then array into string
const arrOfchar=inputStr.split("");
console.log(arrOfchar);//array contain one string madam
console.log(arrOfchar.reverse());
const reverseStr=arrOfchar.join("");
console.log(inputStr);
console.log(reverseStr);
if(inputStr===reverseStr){
    console.log("palind");
}
else{
    console.log("non-palindrome")
}



