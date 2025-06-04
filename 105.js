
// by convention use capial letter for function name
function User(){
      this.name="vikram";
      this.age=101;
      console.log(this);
}
const user=new User();
console.log(user);
console.log(typeof user)