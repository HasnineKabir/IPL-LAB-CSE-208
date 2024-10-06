function calculate() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let char = prompt("What operation do you want to perform?");


    switch (char) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero!";
            }
            return num1 / num2;
        default:
            return "Invalid Operation";
    }
}

const result = calculate();
document.write("Result is:");
document.write(result);
