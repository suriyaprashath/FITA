function add() {
  const a = 10;

  return function (b) {
    console.log(a + b);
  };
}

const addFn = add();

addFn(25);
