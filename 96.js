const obj={
    name:"vikram",
    emp1:{
        name:"viku"
    },
    displayMessage:function(){
        console.log("hello "+obj.name);
        console.log("hello "+this.name);//implicit Binding
        
    }

};
obj.displayMessage();
