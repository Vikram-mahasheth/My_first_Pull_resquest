const user1={
    name:"prakash",
    showName:function(){
        console.log("here-",this.name);
        function displayMessage(){
            console.log("there-",this.name);
        }
        displayMessage();
    }
};






user1.showName();