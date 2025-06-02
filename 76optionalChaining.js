const user={
    name:"vikram",
    age:22,
    address:{
        street:"kalina",
        city:"delhi"
    },
    likes:"eat sing sleep Repeat"
}
console.log(user.address.city); 

console.log(user.hobbies);//gives undefined if key is not there in object
