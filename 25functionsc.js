function greetMessage(name ,city){//name is called as parameter
    console.log("hell from gfg" ,name,city);
}


greetMessage("prakash","mumbai");//prakash is called as an argument

greetMessage("vikram","delhi");

function calculateSum(min,max)
{
    let sum=0;
    for(let i=min;i<=max;i++)
    {
         sum+=i;
    }
    console.log(sum);
}
calculateSum(9,10);