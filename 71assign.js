const person1={
    name:"vikram",
    age:100
}

const person2=Object.assign({},person1);
person2.name="Anu";
person1.age=1000;
console.log(person1);
console.log(person2);