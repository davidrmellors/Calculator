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
let equation = document.querySelector('.equation');
let deleteBtn = document.querySelector('#delete-btn');

let equalsActive = false;
let stringNum = "";


operators.forEach(operator => {
    operator.addEventListener('click', () => {

        if(equalsActive == true){
            equalsActive = false;
            values.textContent = operandStack.slice(-1)[0];
            operandStack.pop();
            console.log(operandStack[-1]);
        }
        
        
        selectedOperator = operator.value;
        equation.textContent = '';

        if(operandStack.length == 0){
            firstNumber = Number(values.textContent);
            operandStack.push(firstNumber);
            equation.textContent += `${firstNumber} ${selectedOperator} `;
        }
        else if(operandStack.length == 1 && operatorStack.length == 0){
            equation.textContent += `${firstNumber} ${selectedOperator} `;
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
            equation.textContent += `${answer} ${selectedOperator} `;
            console.log(secondNumber);
        }    
        
    })
});

equalBtn.addEventListener('click', () => {

    equalsActive = true;
    if(operandStack.length > 0) {
        operandStack.push(values.textContent);
        let currOperator = operatorStack.pop();
        let secondOperand = operandStack.pop();
        let firstOperand = operandStack.pop();

        equation.textContent +=` ${secondOperand} ${equalBtn.value}`;

        let answer = Math.round((operate(firstOperand, currOperator, secondOperand))*100)/100;

        operandStack.push(answer);
        values.textContent = answer;
        console.log(answer);
    }


});


clearBtn.addEventListener('click', () => {
    operandStack = [];
    operatorStack = [];
    firstNumber = "";
    secondNumber = "";
    values.textContent = "";
    equation.textContent = "";
});


deleteBtn.addEventListener('click', () => {
    let string = values.textContent;
    let stringLength = values.textContent.length;

    values.textContent =  string.substring(0, stringLength - 1);
});


numButtons.forEach(numButton => {
    numButton.addEventListener('click', () => {
        
        console.log(`operand stack: ${operandStack.length}`);

        
        // press equals button
        // display answer
        // set equals button to active
        // if equals button active
        // empty display and set equals to inactive
        if(equalsActive == true){
            values.textContent = '';
            equation.textContent = '';
            operandStack.pop();
            equalsActive = false;
        }


        if(selectedOperator.length > 0) {
            operatorStack.push(selectedOperator);
            selectedOperator = '';
            values.textContent = "";
        }

        values.textContent += numButton.value;


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