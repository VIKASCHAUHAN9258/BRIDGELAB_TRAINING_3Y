// Q6. Pyramid Pattern Generator
"use strict";

// Change this value to simulate user input; default is 5.
const userInput = 5;
const rowLimit = Number.isInteger(userInput) && userInput > 0 ? userInput : 5;

for (let row = 1; row <= rowLimit; row++) {
  let pattern = "";
  for (let column = 1; column <= row; column++) {
    pattern += "* ";
  }
  console.log(pattern.trimEnd());
}

// Replacing let with var makes row/column function-scoped rather than block-scoped.
// With synchronous loops, the displayed pattern is the same; scope behavior differs.
// Strict mode catches undeclared variables, but var itself remains function-scoped.
