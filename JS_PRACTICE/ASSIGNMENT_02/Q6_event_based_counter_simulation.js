// Q6. Event-Based Counter Simulation
let count = 0;

function showCount() {
  // Nested function reads count from the outer scope.
  function logCount() {
    console.log(`Current count: ${count}`);
  }
  logCount();
}

function increment() {
  count++;
  showCount();
}

function decrement() {
  count--;
  showCount();
}

// Simulate button clicks by calling functions.
increment(); // 1
increment(); // 2
decrement(); // 1
