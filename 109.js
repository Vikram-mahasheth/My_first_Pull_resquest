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
function sayHi(degree,yeaar){
        console.log(this.name,yeaar,degree);
    }

//if we also want to console some extra information that is not the property of object then
// pass arguments to call ,otherwisw all arguments will be taken as undefined

sayHi.call(user1);
sayHi.call(user1,"btech ee",2015);