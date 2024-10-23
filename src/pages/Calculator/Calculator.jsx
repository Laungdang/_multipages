import React, { useEffect } from 'react';
import './Calculator.css';

let firstOperand = '';
let secondOperand = '';
let operator = '';
let currentValue = '';

const addToDisplay = (value) => {
    const display = document.getElementsByClassName("display-text")[0];
    const ceButton = document.getElementsByClassName("keypad-ce")[0];

    if (currentValue === '0' || currentValue === '') {
        currentValue = value;
    } else {
        currentValue += value;
    }

    display.textContent = currentValue;

    if (ceButton.textContent === "CE") {
        ceButton.textContent = "C";
    }
};

const minus = () => {
    firstOperand = currentValue;
    currentValue = '';
    operator = "-";
};

const plus = () => {
    firstOperand = currentValue;
    currentValue = '';
    operator = "+";
};

const calculate = () => {
    if (currentValue === "" && secondOperand === '') {
        document.getElementsByClassName("display-text")[0].textContent = '0';
        return;
    }

    if (operator === "") {
        document.getElementsByClassName("display-text")[0].textContent = currentValue;
        return;
    }

    if (firstOperand === '') {
        firstOperand = currentValue;
    }

    if (secondOperand === '') {
        secondOperand = currentValue;
    }

    let result;
    if (operator === "-") {
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (operator === "+") {
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
    }

    if (isNaN(result)) {
        result = "0";
    }

    document.getElementsByClassName("display-text")[0].textContent = result;
    firstOperand = result;
    currentValue = '';
};

const clearDisplay = () => {
    currentValue = '';
    secondOperand = '';
    document.getElementsByClassName("display-text")[0].textContent = '0';
    const ceButton = document.getElementsByClassName("keypad-ce")[0];

    if (ceButton.textContent === "C") {
        ceButton.textContent = "CE";
    }
};

const checkKeyboard = (e) => {
    if (e.key === 'Escape') {
        clearDisplay();
    } else if (e.key === 'Enter') {
        calculate();
    } else if (e.key === '+' || e.key === '=') {
        plus();
    } else if (e.key === '-') {
        minus();
    } else if (e.key >= '0' && e.key <= '9') {
        addToDisplay(e.key);
    }
};

const Calculator = () => {
    useEffect(() => {
        document.addEventListener('keydown', checkKeyboard);
        return () => {
            document.removeEventListener('keydown', checkKeyboard);
        };
    }, []);

    return (
        <div className='calculator-container'>
        <div className="out-line">
            <div className="in-line">
                <div className="display">
                    <span className="display-text">0</span>
                </div>

                <div className="keypad">
                    <table>
                        <tbody>
                            <tr>
                                <td><button className="size-pad" onClick={() => addToDisplay('MC')} disabled>MC</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('MR')} disabled>MR</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('M+')} disabled>M+</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('M-')} disabled>M-</button></td>
                                <td><button className="size-pad keypad-ce" onClick={clearDisplay}><span>CE</span></button></td>
                            </tr>
                            <tr>
                                <td><button className="size-pad" onClick={() => addToDisplay('7')}>7</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('8')}>8</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('9')}>9</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('/')} disabled>÷</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('**')} disabled>√</button></td>
                            </tr>
                            <tr>
                                <td><button className="size-pad" onClick={() => addToDisplay('4')}>4</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('5')}>5</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('6')}>6</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('*')} disabled>*</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('%')} disabled>%</button></td>
                            </tr>
                            <tr>
                                <td><button className="size-pad" onClick={() => addToDisplay('1')}>1</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('2')}>2</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('3')}>3</button></td>
                                <td><button className="size-pad" onClick={minus}>-</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('1/x')} disabled>1/x</button></td>
                            </tr>
                            <tr>
                                <td><button className="size-pad" onClick={() => addToDisplay('0')}>0</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('.')}>.</button></td>
                                <td><button className="size-pad" onClick={() => addToDisplay('+/-')} disabled>+/-</button></td>
                                <td><button className="size-pad" onClick={plus}>+</button></td>
                                <td><button className="size-pad" onClick={calculate}>=</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Calculator;
