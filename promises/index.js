function takes5Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      for (let index = 0; index < 10000000000; index++) {
      }
      resolve('I have run 1 Billion times');
    }, 1000);
    // setTimeout(function () {
    //   resolve('I have run 1 Billion times');
    // }, 5000);
  });
}

function logClick() {
  console.log('Clicked!!!');
}

takes5Seconds()
  .then(
    function (value) {
      console.log('Success: ', value);

      return new Promise((resolve, reject) => {
        reject('I have failed');
      });
    },
    function (error) {
      console.log('Failed: ', error);
      throw 'Error in Promise';
    }
  )
  .then(
    function (msg) {
      console.log('In Success: ', msg);
    },
    function (msg) {
      console.log('In Failure: ', msg);
    }
  )
  .catch(function (error) {
    console.log('In Catch: ', error);
  });

console.log('After heavy operation');
