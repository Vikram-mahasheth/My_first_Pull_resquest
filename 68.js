// lets say we have a function which return an object
function getObjects(name,city){
    return {
        name,
       city
       // this is short hand propert if your key and value have same name you can use this property
    }
}
const obj=getObjects("vikram","delhi");
console.log(obj);

const obj2=getObjects("ashish","mubai");
console.log(obj2);

// another example of shorthand property
const student="ayush";
const course="redux";
console.log({student,course});