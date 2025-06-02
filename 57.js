let arr1=[1,2,3];
let arr2=arr1;//shallow copy
console.log(arr1,arr2);
arr2.push(4);
console.log(arr1,arr2);//both gets updted due to ccopy by array referencing


//spread operator -to prevent above problem
let arr3=[...arr1];
console.log(arr3);
arr3.push(5);
console.log(arr1,arr3);



//for loop
let arr4=[11,2,3,4];
let arr6=[];
for(let number of arr4)
{
    arr6.push(number);
}
console.log(arr6)
arr6.push(5);
console.log(arr4,arr6);