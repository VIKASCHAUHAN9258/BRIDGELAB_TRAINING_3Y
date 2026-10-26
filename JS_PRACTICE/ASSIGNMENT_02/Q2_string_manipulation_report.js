// Q2. String Manipulation Report
const productName = " wireless headphones PRO ";

// Remove extra spaces, convert to lowercase, and capitalize each word.
let cleanedTitle = productName
  .trim()
  .toLowerCase()
  .split(/\s+/)
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Replace "Pro" with "Pro Edition" after capitalization.
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
