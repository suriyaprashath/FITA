const customEvent = new CustomEvent('myevent');

function handleClick(event) {
  console.log('Child clicked!!!', event);
}

function removeCaptureListener() {
  const parent = document.getElementsByClassName('parent')[0];

  parent.removeEventListener('click', clickListenerOnCapture, {
    capture: true,
  });

  parent.removeEventListener('click', clickListenerOnBubble);

  // Dispatch custom event
  parent.dispatchEvent(customEvent);
}

function clickListenerOnCapture() {
  console.log('Parent Clicked on capture!!!');
}

function clickListenerOnBubble(event) {
  console.log('Parent Clicked on bubble!!!', event);
  console.log(event.target);
}

document.addEventListener('DOMContentLoaded', () => {
  const parent = document.getElementsByClassName('parent')[0];

  parent.addEventListener('click', clickListenerOnCapture, { capture: true });

  parent.addEventListener('click', clickListenerOnBubble);

  parent.addEventListener('myevent', () => {
    console.log('Capture Listener removed');
  });
});

// document.addEventListener('mousemove', (event) => {
//   console.log(`x: ${event.pageX}, y:${event.pageY}`);
// });
