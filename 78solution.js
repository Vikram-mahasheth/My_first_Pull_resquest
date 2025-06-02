const user={
    name:"vikram",
    age:22,
    // address:{//optional in the form
    //     street:"kalina",
    //     city:"delhi"
    // },
    likes:"eat ing sleep Repeat"
}
/**
 * we will use "?." operator to check if key is undefined or not
 * we can check with every property
 */
//solution 1
if(user.address!=undefined){
    console.log(user.address.city);
}
else{
    console.log("address not found");
}
// solution 2-ternary operator

// sol3-optional chaining
//first we have to see which property can go undefined
console.log(user.address?.city);//check for address
// if adress undefined it wont go to check city