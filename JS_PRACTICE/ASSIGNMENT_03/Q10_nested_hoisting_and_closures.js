// Q10. Nested Hoisting and Closures
"use strict";

function outer() {
  console.log("outer count before assignment:", count); // undefined
  var count = 5;

  // Function declaration has its own local `count` due to var hoisting.
  function inner() {
    console.log("inner count before assignment:", count); // undefined
    var count = 10;
    console.log("inner count after assignment:", count); // 10
  }

  inner();
  console.log("outer count after inner call:", count); // 5
}

outer();

// Arrow-function comparison: the arrow has no own `this` or `arguments`, but
// a local `var count` inside it is still hoisted in its own function scope.
function outerWithArrow() {
  var count = 5;
  const innerArrow = () => {
    console.log("arrow sees outer count:", count); // 5 (no local shadowing)
  };
  innerArrow();
}
outerWithArrow();

// Debug: set breakpoints on the first console.log in outer(), inside inner(),
// and after inner() returns. Inspect the Call Stack and each function's scope.
