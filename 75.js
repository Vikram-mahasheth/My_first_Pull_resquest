function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person2 = deepCopy(person1); // Custom deep copy
person2.name = 'Ashish';
person2.address.city = 'Sirsa';

console.log(person1.name); // Output: Prakash
console.log(person2.name); // Output: Ashish
console.log(person1.address.city); // Output: Mumbai
console.log(person2.address.city); // Output: Sirsa