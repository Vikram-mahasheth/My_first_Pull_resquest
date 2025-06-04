//if we also want to console some extra information that is not the property of object then
//pass it through arguments as an array accordance with function argument
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
function sayHi(degree,year){
        console.log(this.name,yeaar,degree);
    }


sayHi.apply(user1);
sayHi.apply(user1,["btech ee",2025]);