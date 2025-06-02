let arr1=[1,2,3];
let arr2=arr1;//shallow copy
console.log(arr1,arr2);
arr2.push(4);
console.log(arr1,arr2);//both gets updted due to ccopy by array referencing
