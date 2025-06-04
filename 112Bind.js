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
function sayHi(){
    console.log("hello "+this.name);
}
const sayHiUser1=sayHi.bind(user1);
sayHiUser1();