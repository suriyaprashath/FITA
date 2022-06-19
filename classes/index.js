class Animal {
  type = 'Animal';
  static canMove = true;

  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log('Speaking...');
  }
}

class Dog extends Animal {
  type = 'Dog';
  noOfLegs = 4;

  constructor(name) {
    super(name);
  }

  speak() {
    console.log('Bark....');
  }
}

class Cat extends Animal {
  type = 'Cat';

  constructor(name) {
    super(name);
  }

  speak() {
    console.log('Meowwww....');
  }
}

var dog = new Animal('Jimmy');

console.log(dog.name, dog.type);
dog.speak();

var dog1 = new Dog('Jimmy');

console.dir(dog1);
console.log(dog1.name, dog1.type, dog.canMove);
dog1.speak();

console.dir(Animal);
console.dir(Animal.canMove);
