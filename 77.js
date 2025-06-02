const user={
    name:"vikram",
    age:22,
    // address:{//optional in the form
    //     street:"kalina",
    //     city:"delhi"
    // },
    likes:"eat ing sleep Repeat"
}
console.log(user.address.city); 
// it will gave error bcz user.address give undefined and
// we are trying to acess propert of undefinde thatt is 
// undefined.city therefore it will give error
