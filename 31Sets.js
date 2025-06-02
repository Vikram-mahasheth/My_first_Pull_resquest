const studentIds=new Set();
studentIds.add(1);
studentIds.add(2);
studentIds.add(1);
console.log({studentIds});




const arr=[1,2,3,4];
console.log(arr[2]);

//no indexing system in sets

console.log(studentIds[1]);



// you can convert an set to an array ,and array to set;


const studentIds1=[1,2,3,5,5,5];
const uniquestudentIds=new Set(studentIds1);
console.log({uniquestudentIds});