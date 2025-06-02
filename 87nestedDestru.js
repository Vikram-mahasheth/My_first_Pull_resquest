let obj={
   name:"prakash",
address:{
        state:"MH",
        city:"Mumbai",
        locality:"Santacruz"
    },
    courses:["html","css","js","reactjs","redux"]
}
// const hi=(obj.address.city);
// console.log(hi);
// console.log(typeof hi);
let{address:{city}}=obj;
console.log(city);
console.log(typeof city);
console.log(address);