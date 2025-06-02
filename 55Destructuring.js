const number=[1,2,3];
const [a,b,c]=[1,2,3];
console.log(a);
console.log(b);
console.log(c);

const[d,e,f]=number;
console.log(d,e,f);

const[x,y,...restof]=[10,20,30,3,333];
console.log(x,y,restof);



let arr=[1,2,3,["html","css","js"]];
const[ , , ,courses]=arr;
console.log(courses);

let arr1=[["html","css","js"],1,2,3,4,5,6];
const[course,...restOf]=arr1;
const[coursE,Z]=arr1;
console.log(coursE,Z);
console.log(course,restOf);

// swap two numbers
let A=10;
let B=15;
[A,B]=[B,A];
console.log(A,B);

