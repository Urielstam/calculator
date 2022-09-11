

const display = document.querySelector('.display'); 
const operands = Array.from(document.querySelectorAll('.operand'))
const operators = Array.from(document.querySelectorAll('.operator'));; 
const decimal = document.querySelector('.decimal');
const sign = document.querySelector('.sign');
const equals = document.querySelector('.equals'); 
const clearDisplay = document.querySelector('.clear');


 
const add = (a,b) => a + b; 
const subtract = (a,b) => a - b; 
const multiply = (a,b) => a * b; 
const divide = (a,b) => a / b; 
const operate = (calculate, n1, n2) => {
    if (calculate === "add") return add(n1, n2);
    if (calculate === "subtract") return subtract(n1, n2);
    if (calculate === "multiply") return multiply(n1, n2);
    if (calculate === "divide") return divide(n1, n2);

};

// allow user to chain operations
// if user presses operator 
// if there is display content
// set that display content to be firstchosenoperand

let firstChosenOperand = "";
let secondChosenOperand = "";
for(const operand of operands) { 
    operand.addEventListener('click', (e) => { 
        if(!chosenOperator) {
            if(!firstChosenOperand) {
                firstChosenOperand = operand.textContent; 
                display.textContent = firstChosenOperand; 
            } 
            else {
                firstChosenOperand += operand.textContent;
                display.textContent = firstChosenOperand;
            }
        }
        else {
            if(!secondChosenOperand) {
                secondChosenOperand = operand.textContent;
                display.textContent = secondChosenOperand;
            }
            else {
                secondChosenOperand += operand.textContent;
                display.textContent = secondChosenOperand;
            }
        } 
    }) 
}

decimal.addEventListener('click', (e) => {
    if(display.textContent) {
        if(display.textContent === firstChosenOperand) {
            display.textContent += ".";
            firstChosenOperand += ".";
        }
        else if (display.textContent === secondChosenOperand) {
            display.textContent += ".";
            secondChosenOperand += ".";
        }
    }
})

sign.addEventListener('click', (e) => {
    
})

let chosenOperator = "";
for(const operator of operators) { 
    operator.addEventListener('click', (e) => { 
        if(display.textContent) {
            firstChosenOperand = display.textContent;
            chosenOperator = operator.value;
        }
    }) 
} 


// Modular functions
const isInt = (n) => n % 1 === 0;
const clearVariables = () => {
    firstChosenOperand = "";
    secondChosenOperand = "";
    chosenOperator = "";
} 

let calculate;
let calcResult;
equals.addEventListener('click', (e) => { 

    if(display.textContent) {
        if(!secondChosenOperand) {
            display.textContent = firstChosenOperand;
        } 
        else {
            calculate = chosenOperator;
            calcResult = operate(calculate, +firstChosenOperand, +secondChosenOperand);
            if(isInt(calcResult)) {
                display.textContent = calcResult;
            } else {
                display.textContent = Math.round(calcResult * 1000) / 1000;
            }
            clearVariables();
        }
    }

    
});

clearDisplay.addEventListener('click', (e) => {
    display.textContent = "";
    clearVariables();
})
 




