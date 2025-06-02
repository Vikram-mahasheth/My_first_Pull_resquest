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
let {name,...rest1}=obj;
console.log(name);
console.log(rest1);
console.log(typeof name)
console.log(typeof rest1)