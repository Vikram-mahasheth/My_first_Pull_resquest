/**
 * Mutable object or Imutable object
 * mutable object can be changed like array ,deleting or adding is allowed
 * Immutable object that can't be changed like string ,there is no way to add or delte in string through any methods
 */
//push
let fruits=["apple","mango","banana"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);


fruits.push("Kiwi","melon");// allows pushing more than one item also
console.log(fruits)


//concat
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=arr1.concat(arr2);
let arr4=arr3.concat([7,8,9]);
console.log(arr3);
console.log(arr4);

let arr5=arr1.concat(arr2,arr3,arr4);
console.log(arr5);
console.log(arr1);