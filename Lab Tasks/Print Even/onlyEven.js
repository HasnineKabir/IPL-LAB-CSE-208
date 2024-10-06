function getEven(arr) {
    let evenNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
  
    return evenNumbers;
  }
  
  const numbers = [12, 17, 22, 37, 40, 51, 60];
  document.write("Even numbers: ", getEven(numbers));
  