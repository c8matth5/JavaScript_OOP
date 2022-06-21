console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies; // .toString() converts properties that are arrays into strings in console; I learned to not use it in this spot after needing to add the addHobby/removeHobby methods that follow
    }

    //override the object.prototype.toString() method
    toString() {}

    //}
    addHobby(hobby) {
        this.hobbies.push(hobby)
    }
    removeHobby(rmHobby) { // using splice and slice methods are good alternatives to .filter here, each with own benefits
        this.hobbies = this.hobbies.filter((hobby) => hobby != rmHobby) // filter method also helps remove potential duplicates
    }
    greeting() {
        console.log(`Hello fellow person!`)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person { // creates prototype chain with subclass Coder that inherits properties and methods from earlier super/parent Person class
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer"
    }
    greeting() { // overrides or redefines the super greeting method that it inherited, but with greeting specific to a coder
        console.log(`Hello fellow person! I am a coder.`)
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let person = (new Person("Alba", 1, "house", ["baking", "welding", "swimming"]))

person.addHobby("book club");

console.log(person);

person.removeHobby("baking");

console.log(person);

let coder = (new Coder("BMO", 65, "mansion", ["dancing", "singing", "helping"]))

console.log(coder);

coder.addHobby("book club");

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    result = 0; // constructor removed in order for the result to not always need to equal 0
    add(a, b) {
        this.result = a + b;
        return this.result;
    }
    subtract(a,b) {
        this.result = a - b;
        return this.result;
    }
    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }
    divide(a, b) {
        this.result = a / b;
        return this.result;
    }
}

let calcy = new Calculator();

console.log(calcy.add(2, 34));

console.log(calcy.divide(50, 25) + calcy.subtract(200, 3));