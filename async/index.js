function logClick() {
  console.log('Button clicked!!!');
}

function runLoop() {
  console.log('For loop starting...');
  let count = 0;
  for (let i = 0; i < 5000000000; i++) {
    count++;
  }
  console.log('For loop ran successfully: ', count);
}

document.addEventListener('DOMContentLoaded', () => {
  const log = document.querySelector('.event-log');
  const customEvent = new CustomEvent('async-complete');

  const xhrElem = document.querySelector('#xhr');

  xhrElem.addEventListener('async-complete', () => {
    log.textContent = `${log.textContent}Completed async request\n`;
  });

  xhrElem.addEventListener('click', () => {
    log.textContent = '';

    setTimeout(() => {
      xhrElem.dispatchEvent(customEvent);
    }, 2000);

    log.textContent = `${log.textContent}Started async request\n`;
  });

  document.querySelector('#reload').addEventListener('click', () => {
    log.textContent = '';
    document.location.reload();
  });
});

function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Operation failure!!!');
    }, 2000);
  });
}

function delay() {
  const promise = asyncOperation();

  promise
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log('I am continuing the operations...');
}

async function delayAsync() {
  console.log('I am continuing the operations...');

  try {
    const data = await asyncOperation();
    console.log(data);
  } catch (err) {
    console.log(err);
  }

}
