// Q8. Strict Mode Showdown
"use strict";

// The supplied original code is a SyntaxError in strict mode because duplicate
// parameter names are forbidden. Assignment to undeclared `total` and deleting
// an unqualified identifier are also errors in strict mode.

// Correct ES6 version:
function demo(first, second) {
  const total = first + second;
  console.log(`First: ${first}, Second: ${second}, Total: ${total}`);
  return total;
}

demo(5, 10);

// To compare non-strict behavior, run a separate non-strict script without
// "use strict": duplicate parameters may be accepted in classic non-strict
// scripts, assigning undeclared variables may create globals, and `delete total`
// on an unqualified identifier generally returns false. Do not use this pattern.
