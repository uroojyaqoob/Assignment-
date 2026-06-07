// Question 1: Grading System
let marks = Number(prompt("Enter student marks 0-100: "));

if (marks >= 90 && marks <= 100) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else if (marks >= 50) {
  console.log("Grade: D");
} else if (marks >= 0) {
  console.log("Grade: Fail");
} else {
  console.log("Invalid marks. Enter 0-100");
}

// Question 2: Even or Odd Number Checker
let num = Number(prompt("Enter an integer: "));
if (num % 2 === 0) {
  console.log(num + " is Even");
} else {
  console.log(num + " is Odd");
}

// Question 3: Multiplication Table
let tableNum = Number(prompt("Enter a number for table: "));
console.log("Multiplication Table of " + tableNum);
for (let i = 1; i <= 10; i++) {
  console.log(tableNum + " x " + i + " = " + (tableNum * i));
}

// Question 4: Sum of N Natural Numbers
let N = Number(prompt("Enter N: "));
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum = sum + i;
}
console.log("Sum of first " + N + " natural numbers = " + sum);

// Question 5: Largest of Three Numbers
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let c = Number(prompt("Enter third number: "));

let largest = a;
if (b > largest) {
  largest = b;
}
if (c > largest) {
  largest = c;
}
console.log("Largest number is: " + largest);
