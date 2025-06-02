//slice removes an item from between also
//slice performs a shallow copy
let courses=["html","css","js","reactjs","jquery"];
let value=courses.slice(1,4);//delete staring from index to index 4(excluded)//slice takes out a slce of elements from array
console.log(courses);//courses remains same
console.log(value);
console.log(typeof value);


//
let userNamename="prakash";
console.log(userNamename.slice(1));


//uused in realWorld

let userId="vikram";
let firstUpperCaseChar=userId[0].toUpperCase();
let capitalizeName=firstUpperCaseChar+userId.slice(1).toLowerCase();//end will be taken by default as userId.length
console.log(capitalizeName);