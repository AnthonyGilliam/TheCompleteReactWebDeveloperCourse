const square = function(x) {
    return x * x;
};

const squareArrow = (x) => x * x;

const fullName = 'Anthony Gilliam';

const getFirstName = (name) => name.split(' ')[0];

console.log(squareArrow(9));
console.log(getFirstName(fullName));