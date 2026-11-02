// Q6: Employee Management System (Classes + Object Methods)

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            throw new Error("Bonus percentage cannot be negative.");
        }
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aarav", "IT", 50000),
    new Employee(2, "Diya", "HR", 42000),
    new Employee(3, "Rohan", "Finance", 48000),
    new Employee(4, "Meera", "Marketing", 45000),
    new Employee(5, "Kabir", "IT", 60000)
];

// Apply a 5% bonus to each employee before calculating annual payout.
employees.forEach(employee => employee.applyBonus(5));

console.log("Employee Annual Salaries:");
employees.forEach(employee => {
    console.log(
        `${employee.name} (${employee.department}): ₹${employee.getAnnualSalary().toFixed(2)}`
    );
});

// Use reduce() to calculate the company's total annual payout.
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(`\\nTotal Annual Company Payout: ₹${totalAnnualPayout.toFixed(2)}`);
