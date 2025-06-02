const person1={
    name:"vikram",
    age:101
}
console.log(person1);

const person2=person1;
console.log(person2);


person2.name="Ashish";
console.log(person1);
console.log(person2);


person1.name="anu";

console.log(person1);
console.log(person2);

// this is happening bcz objects are not copied by value but they are copied by reference(memory address)