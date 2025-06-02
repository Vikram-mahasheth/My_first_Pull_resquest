const obj={};//object literal
console.log(typeof obj);

// every object has something called as property,property is bascially key value pair

const Obj={
    name:"vikram",//property
    age:99,
    job:"mentor",
    1:"number one",
   course:["html","css","js","reactjs"],//value can be array also
   //["html","css","js","reactjs"]: "course"
}
//key should only be string
//value can be anything
// but here we can see that keys like name,age,job are not in the form of string that is not like ("name") ,("age"),("job").
// bcz JavaScript will do the implict conversion (own its own) ,that is it convert keys into string on its own
//even if we write 1 that is number as a key,it will also be converted to string implicitlly by javaScript
console.log(Obj);



