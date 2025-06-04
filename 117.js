// this is arroe function 
// this points to global window object
const displayName=() =>{
    console.log(this);
}

const user2={
    name:"vikram",
}
displayName.apply(user2);