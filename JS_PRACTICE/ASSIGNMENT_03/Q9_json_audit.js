// Q9. JSON Audit
"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let index = 0; index < rawData.length; index++) {
  const lineNumber = index + 1;

  try {
    const parsed = JSON.parse(rawData[index]);

    if (!Object.prototype.hasOwnProperty.call(parsed, "user") ||
        !Object.prototype.hasOwnProperty.call(parsed, "age")) {
      throw new Error("Missing required key: user or age");
    }

    const age = Number(parsed.age);
    if (!Number.isFinite(age)) {
      throw new Error("Age is not a valid number");
    }

    if (age >= 18) {
      cleanData.push({ user: parsed.user, age });
    }
  } catch (error) {
    errors.push({ line: lineNumber, message: error.message });
  }
}

console.log("Clean entries (age 18+):");
console.table(cleanData);
console.log("Errors:");
console.table(errors);
