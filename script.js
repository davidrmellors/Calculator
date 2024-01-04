let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let value = "";

const values = document.querySelector('.values');
let numButtons = document.querySelectorAll('.num-btn');
let equalBtn = document.querySelector('#equal-btn');
let clearBtn = document.querySelector('#clear-btn');
let operators = document.querySelectorAll('.operator');




equalBtn.addEventListener('click', () => {
    operate(firstNumber, operator, secondNumber);
});


clearBtn.addEventListener('click', () => {
    values.textContent = "";
});


numButtons.forEach(button => {
    button.addEventListener('click', () => {
        let btnValue = button.value;
        displayValue(btnValue);
    })
});


function displayValue(string) {
    values.textContent += string;
    value = string;
}


function operate(num1, operator, num2) {
    switch(operator){
        case "+":
            add(num1, num2);
        break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            break;
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}