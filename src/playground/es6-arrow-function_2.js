// arguments object no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Eric',
    cities: ['San Francisco', 'Boston', 'Chicago'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
};
console.log(user.printPlacesLived());

// object with data on it and a method that accesses the data 
// use map to traverse it.

const multiplier = {
    numbers: [3, 4, 5, 5, 7],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply(2));