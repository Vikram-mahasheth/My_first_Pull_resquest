let studentName=["vikram","sneha","atush","thala"];// in asingle box
console.log(studentName);
console.log(studentName[0]);
// for loop
for(let i=0;i<=6;i++)
{
    console.log(studentName[i],i);
}


for(let i=0;i<studentName.length;i++)
{
    console.log(studentName[i]);
}
console.log("j")
//for let of
for(let name of studentName)//works with string also
{
    console.log(name);
}
//for let in
for(let name in studentName)//gives all student index
{
      console.log(name,studentName[name]);
}