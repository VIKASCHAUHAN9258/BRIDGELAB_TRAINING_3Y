// Q5. Boolean Logic Access System
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Secure only when all required conditions are true.
// The negation checks are included to demonstrate ! logic.
const isSecure =
  isAlarmOn &&
  isDoorLocked &&
  isWindowClosed &&
  isOwnerInside &&
  !( !isDoorLocked || !isWindowClosed );

console.log(isSecure ? "Secure" : "Unsafe");

// Change any variable above to test different outcomes.
isWindowClosed = false;
const secondOutcome =
  isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log(secondOutcome ? "Secure" : "Unsafe");
