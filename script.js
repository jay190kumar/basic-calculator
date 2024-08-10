// Get the display element
let display = document.getElementById('display');

// Function to append a number or operator to the display
function appendNumber(number) {
    display.value += number;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to remove the last character from the display
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression in the display
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
