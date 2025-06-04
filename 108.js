const user1={
    name:"prakash",
    age:99,
   
}
const user2={
    name:"Anu",
    age:98,
    
}
const user3={
    name:"Vikram",
    age:97,
   
}
//optimising previous code
function sayHi(){
        console.log(this.name);
    }

//borrowing sayhi function for each object
sayHi.call(user1);
sayHi.call(user2);
sayHi.call(user3);
//user1.sayHi(); gives error as sayHi fun is not part or method of object user1f