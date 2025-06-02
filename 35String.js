//iterating over strings
let displayMessage="I am a student at gfg";
//let of loop
for(let char of displayMessage)
{
    if(char==="d"){
        break;
    }
    
    console.log(char);
}


for(let i=0;i<displayMessage.length;i++){
    if(displayMessage[i]==="n")break;
    else console.log(displayMessage[i]);
}