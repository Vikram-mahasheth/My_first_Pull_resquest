//splice does deep copy
let courses=["html","css","js","reactjs","jquery","vue.js","angular"];

courses.splice(5);//delete 2 elements starting from index 4
console.log(courses);
courses.splice(3,10);
console.log(courses);