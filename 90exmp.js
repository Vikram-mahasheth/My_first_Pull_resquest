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
const {engineers:{emp2}}=employees;
console.log(emp2);
const{engineers:{emp1}}=employees;
console.log(emp1);

const {engineers:{emp2:{name,occupation}}}=employees;
console.log(name,occupation);



