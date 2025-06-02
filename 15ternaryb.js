const totalMarksScored=84;
if(totalMarksScored<40){
    console.log("You need to wrok hard");
}
else if(totalMarksScored<60)
{
    console.log("B grade");
}
else if(totalMarksScored<75)
{
    console.log("A grade");
}
else if(totalMarksScored<85)
{
    console.log("A+ grade");
}
else{
    console.log("Genius");
}

// write all these conditions in a single line using ternary operators
// cond?cond true:cond false;
// cond1?if(cond1==true)do task and return:if(cond1==false)write 2nd condition here or execute task here
//cond1?if cond1 true return:cond2?if cond2 true return:cond3?.........
const result=totalMarksScored<40?"you need to work hard":totalMarksScored<60?"B grade":totalMarksScored<75?
"A grade":totalMarksScored<85?"A+ grade":"Genius";
console.log(result);