let displayValue = '';
let memory = 0; // Memory value for MR functionality

// Append value to display
function appendToDisplay(value) {
  const display = document.getElementById('display');
  if (display.innerHTML === '0' && value !== '.') {
    display.innerHTML = value;
  } else {
    display.innerHTML += value;
  }
  displayValue = display.innerHTML;
}

// Clear the display
function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerHTML = '0';
}

// Perform calculation
function calculate() {
  try {
    const result = eval(displayValue); // Use eval cautiously
    if (!isFinite(result)) {
      throw new Error('Mathematical Error');
    }
    document.getElementById('display').innerHTML = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').innerHTML = 'Error';
    console.error(error.message);
  }
}

// Square root functionality
function squareRoot() {
  try {
    const number = parseFloat(displayValue);
    if (number < 0) throw new Error('Cannot calculate square root of negative number');
    const result = Math.sqrt(number);
    document.getElementById('display').innerHTML = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').innerHTML = 'Error';
    console.error(error.message);
  }
}

// Memory recall functionality
function memoryRecall() {
  document.getElementById('display').innerHTML = memory.toString();
  displayValue = memory.toString();
}

// Handle keyboard input
document.addEventListener('keydown', (event) => {
  const validKeys = '0123456789+-*/.=';
  if (validKeys.includes(event.key)) {
    if (event.key === '=') {
      calculate();
    } else {
      appendToDisplay(event.key);
    }
  } else if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Backspace') {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerHTML = displayValue || '0';
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
});
