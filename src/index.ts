
import './styles.css';
import { add, multiply, subtract, divide } from './math';


const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const addButton = document.getElementById('add') as HTMLInputElement;
const answer = document.getElementById('answer');
const addRadioButton = document.getElementById('addRadioButton') as HTMLInputElement;
const subtractRadioButton = document.getElementById('subtractRadioButton') as HTMLInputElement;
const multiplyRadioButton = document.getElementById('multiplyRadioButton') as HTMLInputElement;
const divideRadioButton = document.getElementById('divideRadioButton') as HTMLInputElement;

function doMath() {
    const n1 = num1.valueAsNumber;
    const n2 = num2.valueAsNumber;
    var returnValue;
    if (addRadioButton.checked) {
        returnValue = add(n1, n2);
    }
    else if (subtractRadioButton.checked) {
        returnValue = subtract(n1, n2);
    }
    else if (multiplyRadioButton.checked) {
        returnValue = multiply(n1, n2);
    }
    else if (divideRadioButton.checked) {
        returnValue = divide(n1, n2);
    }
    else {
        returnValue = "You need to select a math thingy to do!"
    }
    //const returnResult = add(n1, n2) if addRadioButton.checked;
    answer.innerText = returnValue.toString();
}

addButton.addEventListener('click', doMath);