// Q1. Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidData = [];

for (let index = 0; index < apiData.length; index++) {
  const value = apiData[index];
  const numericValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);

  // Blank strings, NaN text, and strings with units are invalid numeric inputs.
  const isInvalid =
    value === undefined ||
    (typeof value === "string" &&
      (value.trim() === "" || value.trim().toLowerCase() === "nan" || !Number.isFinite(numericValue))) ||
    (typeof value === "string" && value.trim() !== "" && !Number.isFinite(numericValue));

  const report = {
    index,
    original: String(value),
    numberForm: Number.isNaN(numericValue) ? "NaN" : numericValue,
    booleanForm: booleanValue,
    stringForm: stringValue
  };

  if (isInvalid) {
    invalidData.push(report);
  } else {
    validNumericData.push(report);
  }
}

console.log("Valid numeric data:");
console.table(validNumericData);
console.log("Invalid data:");
console.table(invalidData);
console.log(`Valid count: ${validNumericData.length}; Invalid count: ${invalidData.length}`);
