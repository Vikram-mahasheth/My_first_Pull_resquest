const user1={
    name:"prakash",
    age:99,
    displayMessage(){
        console.log(this.age);
        //this is implicit binding bcz here this points to the object user1
    }
   
}
const user2={
    name:"Anu",
    age:98,
    
}
const user3={
    name:"Vikram",
    age:97,
   
}
// explicit binding is done by call and apply function
function sayHi(degree,year){
        console.log(this.name,year,degree);
    }

    sayHi.apply(user1);