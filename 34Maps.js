const newMap=new Map();
console.log(newMap);
newMap.set(10,"value will be here");
newMap.set({},10);
console.log(newMap);



console.log(newMap.get(10));


newMap.delete(10);
console.log(newMap);

console.log(newMap.size)



console.log(newMap.keys());
console.log(newMap.values());


newMap.forEach((value)=>{
    console.log(value);
})


console.log(newMap.has(10));//key