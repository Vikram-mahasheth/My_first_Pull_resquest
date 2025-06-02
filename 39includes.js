/**
 * includes tells us that if a character is present in string or not,it return boolean value
 */
const displayMessage="I love to code in dark mode";
console.log(displayMessage.includes("I"));
console.log(displayMessage.includes("light"));
console.log(displayMessage.includes("dark"));

const vowels="aeiouAEIOU";
for(let char of displayMessage){
    if(vowels.includes(char)){
        console.log(`${char} is a vowel`);
    }
}