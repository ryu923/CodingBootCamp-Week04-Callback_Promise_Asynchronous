const writeText = callback => {
    if (!callback) return;
    
    const myTextArea = document.querySelector('#my-text');
    
    myTextArea.oninput = () => {
        const textBelow = document.querySelector('#text-below');
        textBelow.innerHTML = callback(myTextArea.value);
    }
}

const showError = callback => {
    if (!callback) return;
    const myTextArea = document.querySelector('#my-text');
    myTextArea.oninput = () => {
        const error = document.querySelector('#error');
        if (callback(myTextArea.value)) {
        error.innerHTML = 'Your input is too long!';
        } else {
        error.innerHTML = '';
        }
  }
}