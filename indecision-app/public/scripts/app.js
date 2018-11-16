'use strict';

function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

var add2 = function add2(a, b) {
    // arguments object - no longer bound with arrow functions
    // console.log(arguments); - This throws error
    return a + b;
};
console.log(add2(55, 1));

var user = {
    name: 'Anthony',
    cities: ['Eatontown', 'Hampton', 'Atlanta'],
    printPlacesLived: function printPlacesLived() {
        // In function defined as object property, this is bound to the object declaring the function
        console.log(this.name);
        console.log(this.cities);
        // In anonymous function, this is unbound and therefore undefined
        // This throws error
        // this.cities.forEach(function (city) {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
user.printPlacesLived();

var user2 = {
    name: 'Anthony',
    cities: ['Eatontown', 'Hampton', 'Atlanta'],
    // If below function was an arrow function, it would fail because this would be bound to this in the global scope which is undefined
    // Use regular ES5 functions when defining object properties that need access to the object's other properties
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);
        // Arrow functions DO NOT bind their own this value
        // this in an arrow function refers to the this value of the context it was created in
        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};
user2.printPlacesLived();

var user3 = {
    name: 'Anthony',
    cities: ['Eatontown', 'Hampton', 'Atlanta'],
    //Map function
    printPlacesLived: function printPlacesLived() {
        var _this2 = this;

        console.log(this.name);
        console.log(this.cities);
        return this.cities.map(function (city) {
            return _this2.name + ' has lived in ' + city;
        });
    }
};
console.log(user3.printPlacesLived());

// Challenge
var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this3 = this;

        return this.numbers.map(function (num) {
            return num * _this3.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
