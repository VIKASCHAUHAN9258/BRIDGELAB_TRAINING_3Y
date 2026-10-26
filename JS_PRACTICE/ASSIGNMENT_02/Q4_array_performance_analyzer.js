// Q4. Array Performance Analyzer
// Generate 8 random integer scores from 30 through 100.
const scores = Array.from(
  { length: 8 },
  () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedCount = scores.filter(score => score >= 50).length;
const scoreLabels = scores.map((score, index) => ({
  Student: index + 1,
  Score: score,
  Result: score >= 50 ? "Pass" : "Fail"
}));

console.table(scoreLabels);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passedCount} out of ${scores.length}`);
