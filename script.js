let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    display.textContent = value || '0'; // Ensure display always shows a valid number or zero
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    updateDisplay('0');
}

function setOperator(op) {
    if (currentInput === '') return; // Ignore operator if there's no number input

    if (firstOperand === '') {
        firstOperand = currentInput;
        currentInput = '';
    } else if (currentInput !== '') {
        calculate(); // Automatically calculate if operator pressed consecutively
        firstOperand = display.textContent;
    }

    operator = op; // Set the new operator
}

function calculate() {
    if (!firstOperand || !currentInput || !operator) return;

    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Error: Division by zero!');
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    updateDisplay(result); // Display the result
    firstOperand = result.toString(); // Store result for further operations
    currentInput = ''; // Reset current input
    operator = ''; // Reset operator
}
