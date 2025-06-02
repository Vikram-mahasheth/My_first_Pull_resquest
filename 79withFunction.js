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
user.getDisplayAddress();
// give error ,bcz with function we do not get undefined,undefined
//is only returned by variable not functions.
//so if we try to acess a function which is no there in
//object ,it will give error.