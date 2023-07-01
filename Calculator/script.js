let display = document.getElementById('display');

function appendDigit(digit) {
  display.value += digit;
}

function appendOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = '';
}

function deleteDigit() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let result = eval(display.value);
  display.value = result;
}
