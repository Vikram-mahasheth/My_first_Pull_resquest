const person1={
    name:"vikram",
    age:100,
    address:{
        city:"mumbai",
        state:"MH"
    }
}

const person2=Object.assign({},person1);
person2.name="Anu";
person2.address.city="Nashik";

person1.age=1000;
console.log(person1);
console.log(person2);