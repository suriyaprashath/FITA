function onInput(event) {
  console.log('Input changed', event.target.value);
}

let intervalId = null;

function onClick(event) {
  let count = 0;
  console.log('Mouse Down: ', event);

  intervalId = setInterval(() => {
    console.log('Timer: ', count++);
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementsByClassName('btn')[0];

  btn.addEventListener('mousedown', onClick);

  const removeListenBtn = document.getElementsByClassName('remove')[0];

  removeListenBtn.addEventListener('click', () => {
    console.log('Removed Event Listener');
    btn.removeEventListener('mousedown', onClick);

    if (intervalId) {
      clearInterval(intervalId);
    }
    btn.remove();

    console.log(btn);
  });


  // New custom event
  const notifyEvent = new CustomEvent('message-notification', {
    detail: {
      msg: 'New Message Received',
    },
  });
  const notifyBtn = document.getElementsByClassName('notify')[0];
  const messageInput = document.getElementsByClassName('message')[0];

  notifyBtn.addEventListener('click', () => {
    messageInput.dispatchEvent(notifyEvent);
  });
  
  messageInput.addEventListener('message-notification', (event) => {
    console.log(event);
    messageInput.value = event.detail.msg;
  });

});
