/* const student = {
    name: "John",
    age: 20,
    major: "Computer Science",
    email: "jojon@gmail.com",
    gender: "male"
};

const student1 = {
    name: "Doe",
    age: 22,
    major: "Information System",
    email: "doe@gmail.com",
    gender: "male"
};

const student2 = {
    name: "Jane",
    age: 21,
    major: "Computer Engineering",
    email: "jane@gmail.com",
    gender: "female"
}; */

class Student {
    name;
    email;
    batch;
    gender;
    location = "Indonesia"; // default value

    constructor(_name, _email, _batch, _gender) {
        this.name = _name;
        this.email = _email;
        this.batch = _batch;
        this.gender = _gender;
    }
}

const studentBudi = new Student(
    "Budi", 
    "budi@gmail.com",
    "2021",
    "male"
);

const studentSara = new Student(
    "Sara", 
    "sara@gmail.com",
    "2021",
    "female"
);

console.log(studentBudi);
console.log(studentSara);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

class Product {
    #name = "keyboard"; // private property
    #price = 1500000; // private property

    getProduct() {
        return this.#name + " - " + this.#price;
    }

    updateName(newName) {
        this.#name = newName;
    }
}

const newProduct = new Product();
console.log(newProduct.getProduct());
newProduct.updateName("mouse"); // error karena private property tidak bisa diakses di luar class
console.log(newProduct.getProduct());

// INHERITANCE
class Animal {
    name;
    species;
    environment;

    constructor(_name, _species, _environment) {
        this.name = _name;
        this.species = _species;
        this.environment = _environment;
    }
    speak(){
        console.log("makes a sound");
    }
}

class Dog extends Animal{
    constructor(_name, _species, _environment){
        super(_name, _species, _environment);
    }
    speak(){
        return "woof woof";
    }
}

const dog1 = new Dog("Doggy", "dog", "land");
console.log(dog1.speak());

class Cat extends Animal{
    constructor(_name, _species, _environment){
        super(_name, _species, _environment);
    }
    speak(){
        return "meow meow";
    }
}
const kucing = new Cat("Kitty", "cat", "land");
console.log(kucing.speak());

class Snake extends Animal{
    constructor(_name, _species, _environment){
        super(_name, _species, _environment);
    }
}
const snake1 = new Snake("Slytherin", "snake", "land");
console.log(snake1.speak());

class AnimalHaveLegs extends Animal{
    legs;
    constructor(_species, _environment, _legs){
        super(_species, _environment);
        this.legs = _legs;
    }
}
class AnimalHaveFin extends Animal{
    fin;
    constructor(_species, _environment, _fin){
        super(_species, _environment);
        this.fin = _fin;
    }
}

const dog = new AnimalHaveLegs("dog", "land", 4);
console.log(dog);
const fish = new AnimalHaveFin("fish", "water", 3);
console.log(fish);

