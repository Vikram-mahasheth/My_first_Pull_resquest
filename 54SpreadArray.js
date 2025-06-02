const arr=[1,2,3,4,5];
console.log("array -",arr)
console.log(...arr);//not an array //spreading means unpacking//spread avoids mutation


const arr1=[1,2,3,4,5];
const arr2=[6,8,9];
const arr3=[...arr1,7,...arr2,10];
console.log(arr3);