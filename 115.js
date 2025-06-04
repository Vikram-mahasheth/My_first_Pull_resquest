function displayName(){
    console.log(this);
}
const user1={
    name:"prakash",
    displayName,
    //displayName function will be a property of object now
    showName:displayName
}

console.log(user1);
user1.displayName();
user1.showName();
displayName();//global object
