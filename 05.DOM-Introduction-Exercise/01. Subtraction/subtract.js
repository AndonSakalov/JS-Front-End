function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;

    let sum = Number(firstNum) - Number(secondNum);

    document.getElementById('result').textContent = sum;
}