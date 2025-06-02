const personObj={
    name:"vikram ",//property
    "age":99,
    job:"mentor",
    1:"number one",
   course:["html","css","js","reactjs"],//value can be array also
  "is Admin":"true"//multi-word key should be in string and multiword key can only be accessed using square bracket
}
// if we want to acess property of an object use dot operator
//properties here are name,age,job,....

console.log(personObj.age);
console.log(personObj.name);


// other way to access properties
// is using square bracket,but must have to use property or key  as a string
console.log(personObj["job"]);
console.log(personObj["name"]);

// why both are required if doing same thing
//ans-> if you have a property whose keys has multiple words (like is admin) then we have to put this key in as a string otherwise it will give error and
 //also console.log(personObj.is Admin)//this will gave error

 // to access multiple word key ,we must have to use square bracket
 console.log(personObj["is Admin"]);

