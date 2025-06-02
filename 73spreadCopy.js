const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person2 = { ...person1 }; // Shallow copy
person2.name = 'Ashish';
person2.address.city = 'Sirsa';

console.log(person1.name); // Output: Prakash
console.log(person2.name); // Output: Ashish
console.log(person1.address.city); // Output: Sirsa
console.log(person2.address.city); // Output: Sirsa