// Q3. Transaction Validator
"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

for (let index = 0; index < transactions.length; index++) {
  const transaction = transactions[index];

  try {
    if (transaction === null) {
      const error = new Error("Null transaction entry");
      error.name = "NullEntryError";
      throw error;
    }
    if (typeof transaction !== "object" || transaction.id === undefined || transaction.amount === undefined) {
      const error = new Error("Missing transaction id or amount");
      error.name = "MissingFieldError";
      throw error;
    }
    if (transaction.amount < 0) {
      const error = new Error("Transaction amount cannot be negative");
      error.name = "NegativeAmountError";
      throw error;
    }

    validTransactions.push(transaction);
  } catch (error) {
    invalidTransactions.push({
      index: index + 1,
      transaction,
      errorType: error.name,
      message: error.message
    });
  }
}

console.log("Valid transactions:");
console.table(validTransactions);
console.log("Invalid transactions:");
console.table(invalidTransactions);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);

// Debugging: set a breakpoint inside the try block and inspect index, transaction, and error.
