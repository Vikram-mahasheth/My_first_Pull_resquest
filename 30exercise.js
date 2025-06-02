function calculateSum(min,max){
    let result=0;
    for(let i=min;i<=max;i++)
    {
        result+=i;
    }
    return result;
}
const result=calculateSum(1,20);
console.log(result);