const user1={
    name:"prakash",
    showName:()=>{
        console.log(this.name);
    }
};
user1.showName();

//regular arrow function
const displayMessage=() =>{
    console.log(this);
}
displayMessage();