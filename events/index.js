var input;
var customEvent = new Event('custom');

var listener1 = (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.target.value);
};

document.addEventListener('DOMContentLoaded', () => {
  const elem = document.getElementsByClassName('btn')[0];
  console.log(elem);

  elem.addEventListener('click', (event) => {
    console.log(event);
    console.log('Clicked!!!');
  });

  input = document.getElementById('name');
  console.log(input);

  input.addEventListener('input', listener1);

  input.addEventListener('input', (event) => {
    console.log('Input event triggered');
  });

  const stopBtn = document.getElementById('stopBtn');
  stopBtn.addEventListener('custom', (event) => {
    console.log('Custom event triggered: ', event);
  });

  // Event bubbling and capture
  const parent = document.getElementById('parent');
  parent.addEventListener('click', (event) => {
    console.log('Parent clicked!!!');
  });

  const child = document.getElementById('child');
  child.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('Child clicked!!!');
  });
});

function stopEvent(event) {
  input.removeEventListener('input', listener1);

  event.target.dispatchEvent(customEvent);
}
