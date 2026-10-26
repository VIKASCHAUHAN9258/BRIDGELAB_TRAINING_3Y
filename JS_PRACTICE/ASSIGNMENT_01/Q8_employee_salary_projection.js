// Q8. Employee Salary Projection
let currentSalary = 50000;
const annualIncrementRate = 8; // Percentage
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
  currentSalary *= 1 + annualIncrementRate / 100;
  currentSalary = Math.round(currentSalary * 100) / 100;
  salaryProjection.push({
    Year: year,
    Salary: currentSalary.toFixed(2)
  });
}

console.table(salaryProjection);
