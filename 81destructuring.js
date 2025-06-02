let obj={
    // three properties
    name:"vikram",
    address:{
        state:"MH",
        city:"MUmbai",
        locality:"santacrucz"
    },
    courses:["html","css","js","reactjs","redux"]
}
let {name,address,courses}=obj;
console.log(name);
console.log(address);
console.log(courses);

//diff with array
let numbers=[1,2,3];
let[x,a,c]=numbers;
console.log(a,x,c)

console.log(obj.name);