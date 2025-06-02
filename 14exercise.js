const first="apple";
const second="banana";
const third="watermelon";

const firstLength=(first.length);
const secondLength=(second.length);
const thirdLength=(third.length);

if(firstLength<secondLength && firstLength<thirdLength)
    console.log(first);
else if(secondLength<firstLength && secondLength<thirdLength)
    console.log(second);
else{
    console.log(third);
}
