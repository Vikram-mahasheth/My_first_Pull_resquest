const user1={
    name:"prakash",
    age:99,
    sayHi(){
        console.log(this.name);
    }
}
const user2={
    name:"Anu",
    age:98,
    sayHi(){
        console.log(this.name);
    }
}
const user3={
    name:"Vikram",
    age:97,
    sayHi(){
        console.log(this.name);
    }
}
//sayHI fun is repeating in every function
user1.sayHi();
user2.sayHi();
user3.sayHi();