// Q6. Progressive Discount System
const purchaseTotal = 7500;
let discountRate = 0;

if (purchaseTotal >= 10000) {
  discountRate = 0.25;
} else if (purchaseTotal >= 5000) {
  discountRate = 0.15;
} else if (purchaseTotal >= 2000) {
  discountRate = 0.05;
}

const discountAmount = purchaseTotal * discountRate;
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log(`Original total: ₹${purchaseTotal.toFixed(2)}`);
console.log(`Discount percentage: ${discountRate * 100}%`);
console.log(`Final price after discount: ₹${finalPrice.toFixed(2)}`);
