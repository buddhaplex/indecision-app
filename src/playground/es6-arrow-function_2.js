// arguments object no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55,1));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Eric',
    cities: ['San Francisco', 'Boston', 'Chicago'],
    printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();