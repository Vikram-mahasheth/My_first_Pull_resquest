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
function introduce(degree,year){
    console.log(this.name,degree,year);
}
const sayHiUser1=introduce.bind(user1,"btech cse");
sayHiUser1();
sayHiUser1(2026);