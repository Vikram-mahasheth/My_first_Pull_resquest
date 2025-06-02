let obj={
   name:"prakash",
address:{
        state:"MH",
        city:"Mumbai",
        locality:"Santacruz"
    },
    courses:["html","css","js","reactjs","redux"]
}
let {name,address:{state,city,locality},courses}=obj;
console.log(obj.address);
console.log(address);