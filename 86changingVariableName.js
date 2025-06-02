let obj={
    userName:"prakash",
    userAddress:{
        state:"MH",
        city:"Mumbai",
        locality:"Santacruz"
    },
    courses:["html","css","js","reactjs","redux"]
}
let {userName:name,userAddress:address}=obj;
console.log(name);
console.log(address);

console.log(obj.address);
console.log(obj);
console.log(userName);