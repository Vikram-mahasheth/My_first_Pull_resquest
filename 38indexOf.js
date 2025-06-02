const displayMessage="I am a mentor at geeksForgeeks";
console.log(displayMessage.indexOf("a"));
console.log(displayMessage.indexOf("mentor"));// gives index of m
console.log(displayMessage.indexOf("a",3));//start searching from position 3

function findCharacter(text,char)
{
    const index=text.indexOf(char);
    if(index===-1){
        return "character not found";
    }
    return index;
}
// arrow fun
const findChar=(text,char)=>text.indexOf(char)===-1?"char not found":"char found";
const result=findCharacter("i am mentor at gfg","u");
console.log(result);

const result1=findChar("i am mentor at gfg","u");
console.log(result1);