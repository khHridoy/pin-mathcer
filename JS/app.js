function getPin() {
    const pin = generatePin();
    const pinInString = pin + '';

    if (pinInString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const generatedPin = getPin();

    //display pin
    const displayPinInput = document.getElementById('display-pin');
    displayPinInput.value = generatedPin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const clickedNum = event.target.innerText;

    const calculatorDisplayField = document.getElementById('cal-display');
    const previousDisValue = calculatorDisplayField.value;

    if (isNaN(clickedNum)) {
        if (clickedNum === 'C') {
            calculatorDisplayField.value = '';
        }
        else if (clickedNum === '<') {
            const arr = previousDisValue.split('');
            arr.pop();
            calculatorDisplayField.value = arr.join('');
        }
    }
    else {
        const newDisValue = previousDisValue + clickedNum;
        calculatorDisplayField.value = newDisValue;
    }
})

document.getElementById('btn-submit').addEventListener('click', function () {
    const randomDisInput = document.getElementById('display-pin');
    const generateValue = randomDisInput.value;

    const calculatorDisplayField = document.getElementById('cal-display');
    const inputValue = calculatorDisplayField.value;

    const success = document.getElementById('pin-success');
    const wrong = document.getElementById('pin-wrong');

    if (generateValue === inputValue) {
        wrong.style.display = 'none';
        success.style.display = "block";
    }
    else {
        success.style.display = 'none';
        wrong.style.display = "block";
    }
})