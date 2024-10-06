function celsius(Celsi) {
    return (Celsi * 9 / 5) + 32;
}

let value = parseInt(prompt("Enter temperature in celsius: "));
document.write("Temperature in Fahrenheit is: ");
document.write(celsius(value));
