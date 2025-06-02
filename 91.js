const employees={
    engineers:{
        emp1:{
            id:1,
            name:"vikram",
            occupation:"front end engineer"
        },
        emp2:{
              id:2,
            name:"Anu",
            occupation:"back end engineer"
        }
    },
    placement:{
           emp3:{
            id:3,
            name:"sarah",
            occupation:"HR manager"
           }
    },
    youtube:{
        emp4:{
            id:4,
            name:"sydeny",
            occupation:"content creator"
           }
    }
}

let {engineers:{emp2:{name,occupation}}}=employees;
// this whole code means we have only  unpacked the name and 
//occupation of emp2 of engineers
console.log(name,occupation);


console.log(emp2);// gives error because we have not unpacked the whole emp2


