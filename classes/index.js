class Animal {
  // Private Variable
  #kingdom = 'Animal Kingdom';

  static willSleep = true;
  name = 'Animal Name';

  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.#kingdom + ' ' + this.name + ' makes a noise ');
  }
}

let jimmy = new Animal('Jimmy');
console.dir(Animal);
console.dir(jimmy);
console.dir(jimmy.speak());

function AnimalFn(name) {
  let kingdom = 'Animal Kingdom';

  AnimalFn.prototype.name = name;

  AnimalFn.prototype.speak = function () {
    console.log(kingdom + ' ' + this.name + ' makes a noise ');
  };
}
AnimalFn.willSleep = true;

let johny = new AnimalFn('Johny');
console.log(johny.name);
console.dir(johny.speak());

var obj = {
  name: 'Obj Name',
  a: 10,
  print: function () {
    console.log(this.name);
  },
  sum: function (b) {
    console.log('Sum: ', this.a + b);
  },
};

console.log(obj);
obj.print();

let temp = obj.print.bind(obj);
temp();

let cloneObject = Object.create(obj);
console.dir(cloneObject);
cloneObject.name = 'Clone Object';
cloneObject.print();

obj.sum.call({ a: 20 }, 30);

let timeoutObj = {
  value: 10,
  timerDisplay: function () {
    console.log('Inside function: ', this.value);
    function display() {
      console.log('Inside timeout function: ', this.value);
    }
    const contextDisplay = display.bind(this);

    setTimeout(contextDisplay, 1000);
  },
};

timeoutObj.timerDisplay();

let timeoutObj1 = {
  value: 10,
  timerDisplay: function () {
    console.log('Inside function: ', this.value);

    setTimeout(() => {
      console.log('Inside timeout function: ', this.value);
    }, 1000);
  },
};

timeoutObj1.timerDisplay({value: 20});
