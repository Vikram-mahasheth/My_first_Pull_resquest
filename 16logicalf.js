const firstName=null;
const nickName=undefined;

const userName=firstName|| nickName||null;
console.log(`name is ${userName}`);
console.log(typeof userName);