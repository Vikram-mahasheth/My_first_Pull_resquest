const Message="I love to code in DARk mode";
const vowels="aeiou";
let flag=false;
for(let char of Message)
{
    if(vowels.includes(char.toLowerCase())){
         flag=true;
         break;
    }
}
if(flag)
{
    console.log("vowel is present in message");
}
else{
     console.log("vowel is not present in message");
}