const fruits=["apple","cherry","orange","banana"];
fruits.sort();
console.log(fruits);


const numbers=[1,2,4,6,5,82,8,9,17];
numbers.sort();
console.log(numbers);


function sortInAscendingOrder(a,b){
    return a-b;
}

function sortInDscendingOrder(a,b){
    return b-a;
}
const numbers1=[1,2,4,6,5,3,8,9,17];
numbers1.sort(sortInAscendingOrder);
console.log(numbers1);

numbers1.sort(sortInDscendingOrder);
console.log(numbers1);