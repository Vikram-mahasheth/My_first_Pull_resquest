const obj={
    name:"vikram",
    city:"delhi"
}
const isPropertyFound="name" in obj;
console.log(isPropertyFound);

const isPropertyFound1="age" in obj;
console.log(isPropertyFound1);

//loop
for(let item in obj){// this is how we use for loop for object,indexing is not supported by object,also cant use for let of with objects
    console.log(item,obj[item]);
    console.log(obj[item]);
}