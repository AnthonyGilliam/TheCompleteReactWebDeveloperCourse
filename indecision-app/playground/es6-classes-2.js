class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} old.`
    }
}

// Use extends to declare that a class inherits from another class
class Student extends Person {
    constructor(name, age, major) {
        // Call super() to pass parameters into parent constructor
        super(name, age);
        this.major = major
        this.hasMajor = !!this.major;
    }

    // Declare a method with the same name as a method in the parent class
    // to override it
    getDescription() {
        // Use super to access parent members
        let description = super.getDescription();
        description += this.hasMajor
            ? ` Their major is ${this.major}`
            : '';
        return description;
    }
 }

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
        this.hasHomeLocation = !!homeLocation;
    }

    getDescription() {
        let description = super.getDescription();
        description += this.hasHomeLocation
            ? ` Their home location is ${this.homeLocation}`
            : '';
        return description;
    }
}

const me = new Student('Andrew Mead', 27, 'Computer Science');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Student();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());

const traveler = new Traveler('Anthony', 35, 'Denver, CO');
console.log(traveler);
console.log(traveler.getGreeting());
console.log(traveler.getDescription());
