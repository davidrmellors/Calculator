let firstNumber = "";
let selectedOperator = '';
let secondNumber = "";
let value = "";

let operandStack = [];
let operatorStack = [];

const values = document.querySelector('.values');
let numButtons = document.querySelectorAll('.num-btn');
let equalBtn = document.querySelector('#equal-btn');
let clearBtn = document.querySelector('#clear-btn');
let operators = document.querySelectorAll('.operator');

let stringNum = "";


operators.forEach(operator => {
    operator.addEventListener('click', () => {

        console.log(operator.value);
        selectedOperator = operator.value;

        if(operandStack.length == 0){
            firstNumber = Number(values.textContent);
            operandStack.push(firstNumber);
        }
        else if(operandStack.length == 1 && operatorStack.length == 1) {
            secondNumber = Number(values.textContent);
            operandStack.push(secondNumber);
            let currOperator = operatorStack.pop();
            let secondOperand = operandStack.pop();
            let firstOperand = operandStack.pop();

            let answer = operate(firstOperand, currOperator, secondOperand);
            operandStack.push(answer);
            values.textContent = answer;

            console.log(secondNumber);
        }    
    })
});

equalBtn.addEventListener('click', () => {

    operandStack.push(values.textContent);
    let currOperator = operatorStack.pop();
    let secondOperand = operandStack.pop();
    let firstOperand = operandStack.pop();

    let answer = operate(firstOperand, currOperator, secondOperand);
    values.textContent = answer;
    console.log(answer);

});


clearBtn.addEventListener('click', () => {
    operandStack = [];
    operatorStack = [];
    firstNumber = "";
    secondNumber = "";
    values.textContent = "";
});


numButtons.forEach(numButton => {
    numButton.addEventListener('click', () => {
        
        if(selectedOperator.length > 0) {
            operatorStack.push(selectedOperator);
            selectedOperator = '';
            values.textContent = "";
        }


// if operandStack > 0
        values.textContent += numButton.value;

        if(firstNumber.length == 0) {

        }

    })
});


function displayValue(string) {
    values.textContent += string;
    value = string;
}


function operate(num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
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