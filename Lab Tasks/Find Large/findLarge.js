function findLargestNumber(arr) {
    if (arr.length === 0) {
      return "Array is empty";
    }
  
    let largest = arr[0]; // Assume the first number is the largest
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; // Update largest if current number is greater
      }
    }
  
    return largest;
  }
  
  let numbers = [34, 12, 78, 45, 89, 23];
  document.write("The largest number is:", findLargestNumber(numbers));
  