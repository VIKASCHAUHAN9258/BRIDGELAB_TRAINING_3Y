// Q1: E-Commerce Product Manager (Classes + Objects)

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply a percentage discount to the product price.
    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new Error("Discount must be between 0 and 100.");
        }
        this.price = this.price - (this.price * percent / 100);
    }

    // Return product details in a readable format.
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

// Create multiple product objects and store them in an array.
const products = [
    new Product(101, "Laptop", 55000, "Electronics"),
    new Product(102, "Mouse", 750, "Accessories"),
    new Product(103, "Office Chair", 6500, "Furniture"),
    new Product(104, "Notebook", 120, "Stationery"),
    new Product(105, "Monitor", 12500, "Electronics")
];

// Apply a 10% discount to the laptop.
products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.displayDetails()));

// Display products whose price is greater than 1000 using filter().
console.log("\\nProducts with price greater than ₹1000:");
const expensiveProducts = products.filter(product => product.price > 1000);
expensiveProducts.forEach(product => console.log(product.displayDetails()));
