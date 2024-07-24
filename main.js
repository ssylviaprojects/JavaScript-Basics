//1.Create variables of different data types: string, number, boolean, null, undefined, object, and symbol. (5 Marks)
let myString = "Hello, World!"; 
let myNumber = 42; 
let myBoolean = true; 
let myNull = null; 
let myUndefined; 
let myObject = { name: "John", age: 30 }; 
let mySymbol = Symbol("mySymbol"); 


//2.Print these variables to the console using console.log(). (5 Marks)
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Null:", myNull);
console.log("Undefined:", myUndefined);
console.log("Object:", myObject);
console.log("Symbol:", mySymbol);



//1.Create an array of numbers. (2 Marks)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



//2.Use the map method to create a new array where each number is multiplied by 2. (2 Marks)
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);



//3.Use the filter method to create a new array that only includes numbers greater than 10. (2 Marks)
let filteredNumbers = doubledNumbers.filter(num => num > 10);
console.log("Filtered Numbers (greater than 10):", filteredNumbers);



//4.Use the reduce method to find the sum of all numbers in the array. (2 Marks)
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);



//5.Use the forEach method to print each number in the array to the console. (2 Marks)
console.log("Numbers in the Array:");
numbers.forEach(num => console.log(num));



//1.Create a function named greet that takes a name parameter and prints a greeting message to the console. (3 Marks)
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");



//2.Create a function named sumArray that takes an array of numbers as a parameter and returns the sum of all elements. (3 Marks)
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

console.log("Sum of Array:", sumArray(numbers));



//3.Create a function named findMax that takes an array of numbers as a parameter and returns the maximum number. (4 Marks)
function findMax(arr) {
    return Math.max(...arr);
}

console.log("Maximum Number in Array:", findMax(numbers));
