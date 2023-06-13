class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The animal makes a sound.");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example usage:
const cat = new Cat("Felis catus");
console.log(cat.species); // Output: Felis catus
cat.makeSound(); // Output: The animal makes a sound.
cat.purr(); // Output: purr

const dog = new Dog("Canis lupus familiaris");
console.log(dog.species); // Output: Canis lupus familiaris
dog.makeSound(); // Output: The animal makes a sound.
dog.bark(); // Output: woof
