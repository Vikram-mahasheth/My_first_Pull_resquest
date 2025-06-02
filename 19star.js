/**
 * star pattern
 *  *
 *  * *
 *  * * *
 *  * * * *
 *  * * * * *
 * 
 */
const symbol="* ";
const input=require("readline-sync").question("enter input")
for(let i=1;i<=input;i++)
{
    console.log(symbol.repeat(i));
}
for(let i=input-1;i>0;i--)
{
    console.log(symbol.repeat(i));
}
