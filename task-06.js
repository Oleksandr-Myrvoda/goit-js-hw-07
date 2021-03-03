const inputRef = document.querySelector('#validation-input');

const validationRef = () => {
    inputRef.classList.remove('valid', 'invalid');
    if (inputRef.value.length === parseInt(inputRef.dataset.length)) {
        inputRef.classList.add('valid') 
    } else {
        inputRef.classList.add('invalid')   
    }    
}

inputRef.addEventListener('blur',validationRef);
