// Q3. Monthly Expense Tracker
const expenses = {
  food: 5000,
  travel: 2000,
  rent: 8000,
  bills: 1500,
  leisure: 1000
};

let total = 0;
for (const amount of Object.values(expenses)) {
  total += amount;
}

const average = total / Object.keys(expenses).length;
const taxRate = 0.10;
total += total * taxRate; // Add 10% tax using an assignment operator
const finalAmount = total;

console.log("Expenses:", expenses);
console.log(`Total before tax: ₹${(finalAmount / 1.10).toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
