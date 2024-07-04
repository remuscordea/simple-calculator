const textField = document.getElementById('textField');
const submit = document.getElementById('submitButton');
const reset = document.getElementById('resetButton')
let x;

const addToField = (n) => {
    textField.value += n;
    textField.focus();
}

const power = (y) => {
    x = textField.value;
    x = Math.pow(x, y);
    textField.value = x;
}

const powten = () => {
    x = textField.value;
    x = Math.pow(10, x);
    textField.value = x;
}

const calculate = (e) => {
    e.preventDefault();
    x = textField.value;
    x = eval(x);
    textField.value = x;
}

submit.addEventListener('click', calculate, false);
reset.addEventListener('click', () => { textField.focus(); })
