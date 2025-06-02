const firstName=null;
const nickName=undefined;

const userName=firstName|| nickName;
console.log(`name is ${userName}`);
console.log(typeof userName);