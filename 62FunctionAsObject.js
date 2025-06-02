const obj={
    Name:"vikramm mahaseth",
    // cannot use arrow function as a property
    //anonymous function is used as we access this function using key greetMessage
    greetMessage:function (){
        console.log("hello vikram welcome to gfg");
    },//greetMessage is key and function is value
     bye(){
          console.log("bye bro");
    }// this function is helpful in borrowing the function
    // key  is bye and value is bye function itself


}
console.log(obj);
console.log(obj.greetMessage);
// call function
obj.greetMessage();
console.log(obj);
obj.bye();