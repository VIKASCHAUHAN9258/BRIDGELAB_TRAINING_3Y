// Q8. Dynamic Discount Evaluator
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

let discountedSubtotal = 0;

for (const product of cart) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  const finalItemPrice = product.price * (1 - discountRate);
  discountedSubtotal += finalItemPrice;

  console.log(
    `${product.item}: Original ₹${product.price.toFixed(2)}, ` +
    `discount ${discountRate * 100}%, final ₹${finalItemPrice.toFixed(2)}`
  );
}

const originalCartTotal = cart.reduce((sum, product) => sum + product.price, 0);
let finalTotal = discountedSubtotal;

// Extra 5% overall discount if the original cart value exceeds ₹50,000.
let extraDiscount = 0;
if (originalCartTotal > 50000) {
  extraDiscount = 0.05;
  finalTotal *= 1 - extraDiscount;
}

console.log(`Original cart total: ₹${originalCartTotal.toFixed(2)}`);
console.log(`Subtotal after category discounts: ₹${discountedSubtotal.toFixed(2)}`);
console.log(`Extra cart discount: ${extraDiscount * 100}%`);
console.log(`Final cart total: ₹${finalTotal.toFixed(2)}`);
