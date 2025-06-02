const user1={
    name:"prakash",
    showName:function(){
        console.log(this.name);
    }
};
const user2={
    name:"vik",
    showName:function(){
        console.log(this.name);
    }
};
const user3={
    name:"anu",
    showName:function(){
        console.log(this.name);
    }
};

user1.showName();
user2.showName();
user3.showName();

//explicit binding
//call---apply and bind