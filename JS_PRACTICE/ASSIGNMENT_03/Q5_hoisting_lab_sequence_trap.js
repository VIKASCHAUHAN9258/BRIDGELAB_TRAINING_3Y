// Q5. Hoisting Lab: The Sequence Trap
"use strict";

// Original behavior (as a comment because it throws before completing):
// console.log(score); // undefined: var declaration is hoisted and initialized.
// announce();          // prints "Game started": function declaration is hoisted.
// var score = 50;
// let status = "ready";
// startGame();          // would throw ReferenceError: status is in its TDZ.
// function startGame() { console.log(status); }

// Fixed version: initialize variables before calling functions.
const score = 50;
const status = "ready";

function announce() {
  console.log("Game started");
}
function startGame() {
  console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow function comparison: arrow functions are not hoisted like function declarations.
const announceArrow = () => console.log("Game started (arrow function)");
announceArrow();
