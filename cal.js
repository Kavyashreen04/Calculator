

let display = document.getElementById('display');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let mul = document.getElementById('mul');
let div = document.getElementById('div');
let mod = document.getElementById('mod');
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');


one.addEventListener('click', () => display.value += '1');
two.addEventListener('click', () => display.value += '2');
three.addEventListener('click', () => display.value += '3');
four.addEventListener('click', () => display.value += '4');
five.addEventListener('click', () => display.value += '5');
six.addEventListener('click', () => display.value += '6');
seven.addEventListener('click', () => display.value += '7');
eight.addEventListener('click', () => display.value += '8');
nine.addEventListener('click', () => display.value += '9');
zero.addEventListener('click', () => display.value += '0');
plus.addEventListener('click', () => display.value += '+');
minus.addEventListener('click', () => display.value += '-');
mul.addEventListener('click', () => display.value += '*');
div.addEventListener('click', () => display.value += '/');
mod.addEventListener('click', () => display.value += '%');
equals.addEventListener('click', calculateResult);
clear.addEventListener('click', clearDisplay);

// Calculate result function
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Clear display function
function clearDisplay() {
  display.value = '';
}


