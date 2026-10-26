// Q1. Scope Conflict Resolver
// Global bonus variable
let bonus = 5000;

function calculateSalary(isPermanent) {
  // Local salary variable inside the function
  let salary = 40000;

  // Add the global bonus only for permanent employees
  if (isPermanent === true) {
    salary += bonus;
  }

  console.log(`Permanent employee: ${isPermanent}`);
  console.log(`Total salary: ₹${salary}`);
  console.log(`Global bonus remains: ₹${bonus}`);
}

// Test both outcomes
calculateSalary(true);
calculateSalary(false);

// Changing the local parameter does not change the global bonus.
