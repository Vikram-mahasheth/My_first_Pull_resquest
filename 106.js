function User(name,age){
    this.name=name;
    this.age=age;
    this.displayMessage=function (){
        console.log(this.name,this.age);
    }
    
}
const user1=new User("vikram",101);
console.log(user1);
user1.displayMessage();
const user2=new User("anu",101);
console.log(user2);