let obj={
   name:"prakash",
address:{
        state:"MH",
        city:"Mumbai",
        locality:"Santacruz"
    },
    courses:["html","css","js","reactjs","redux"]
}
let {address:{state}}=obj;
console.log(obj.address);
console.log(state);
console.log(address);