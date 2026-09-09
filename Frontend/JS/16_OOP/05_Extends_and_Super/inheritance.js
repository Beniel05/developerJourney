class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is Eating.`;
  }
  makeSound() {
    return `Default Sound for Animals`;
  }
}

class Dog extends Pet {
  makeSound() {
    return "Bark! Bark!!";
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR!");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  makeSound() {
    return "Meow! Meow!!";
  }
}

const tommy = new Dog("Tommy", 5);
console.log(tommy.eat());
console.log(tommy.makeSound());

const orange = new Cat("Orange", 2);
console.log(orange.eat());
console.log(orange.makeSound());

/* orange - check typing this in the browser console and check the prototypes. */