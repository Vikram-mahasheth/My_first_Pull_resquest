const newList=new Set();//creates empty set
newList.add(1);
newList.add(2);
console.log({newList});
console.log(newList.keys());
console.log(newList.values());
console.log(newList.entries());
console.log(newList.size);//
newList.clear();//
newList.add(1);//
newList.add(2);
newList.delete(1);//
console.log({newList});

// to check if something exist or not
console.log(newList.has(5));//boolean


// for each method
newList.forEach((value)=>{
    console.log({value})
})
