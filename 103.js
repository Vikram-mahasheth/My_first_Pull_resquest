const obj = {
    name: "Prakash",
    showName: function() {
        const self = this;
        function display() {
            console.log(self.name);
        }
        display();
    }
};

obj.showName();