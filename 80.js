const user={
    Name:"vikram",
    age:22,
    address:{//optional in the form
        street:"kalina",
        city:"delhi"
    },
    likes:"eat ing sleep Repeat",
    getDisplayMessage:function(){
        console.log(`welcome ${user.Name}`);
    }
}
user.getDisplayMessage();
user.getDisplayAddress?.();
//check if function exist or not
// we are checking here if this function as a property exist or not
console.log(user.getDisplayAddress?.())
user.getDisplayMessage?.();
console.log(user.hobbies);