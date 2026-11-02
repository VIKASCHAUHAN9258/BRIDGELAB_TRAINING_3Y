// Q9: Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (!name || price < 0 || quantity <= 0) {
            throw new Error("Enter a valid item name, price and quantity.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(couponCode) {
        // Accept codes such as SAVE20 or DISC10.
        const couponPattern = /^(SAVE|DISC)(\\d{1,2})$/;
        const match = couponCode.match(couponPattern);

        if (!match) {
            return {
                valid: false,
                message: "Invalid coupon. Use a format such as SAVE20 or DISC10."
            };
        }

        const discountPercent = Number(match[2]);
        if (discountPercent < 1 || discountPercent > 100) {
            return {
                valid: false,
                message: "Coupon discount must be between 1 and 100."
            };
        }

        const originalTotal = this.getTotal();
        const discountAmount = originalTotal * discountPercent / 100;
        const finalTotal = originalTotal - discountAmount;

        return {
            valid: true,
            discountPercent,
            originalTotal,
            discountAmount,
            finalTotal
        };
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Mouse", 700, 2);
cart.addItem("USB Drive", 500, 1);

console.log("Cart Items:");
cart.items.forEach(item => {
    console.log(`${item.name} | ₹${item.price} × ${item.quantity}`);
});

console.log(`\\nCart Total: ₹${cart.getTotal().toFixed(2)}`);

const couponResult = cart.applyCoupon("SAVE20");
if (couponResult.valid) {
    console.log(`Coupon Applied: ${couponResult.discountPercent}%`);
    console.log(`Discount: ₹${couponResult.discountAmount.toFixed(2)}`);
    console.log(`Final Total: ₹${couponResult.finalTotal.toFixed(2)}`);
} else {
    console.log(couponResult.message);
}
