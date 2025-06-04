function displayName(){
    console.log(this);
}
const user1={
    name:"prakash",
    
    showName:function(){
        displayName();//this will point towindow object
    },
}
user1.showName();
//user1.showName().displayName();