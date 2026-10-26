// Q4. Debugging Mystery
"use strict";

function showMessage() {
  // Strict mode throws ReferenceError if an undeclared variable is assigned.
  const greeting = "Welcome";
  console.log(greeting);
}

showMessage();

// VS Code debugger: set a breakpoint at the const declaration or console.log.
// Add "greeting" to WATCH and inspect the Call Stack while paused.
