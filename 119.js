const person={
    name:"prakash",
    sayHi:function(){
        console.log(`welcome ${this.name}`);
    }
}
//person 2 will have function sayHi
let person2=person.sayHi;
console.log(person2);
console.log(typeof person2);
person2();