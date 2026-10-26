// Q7. Customer Feedback Processor
const feedback = "Great product! Fast delivery and amazing sound quality!";
const wordCount = feedback.trim().split(/\s+/).length;
const normalizedFeedback = feedback.toLowerCase();

const needsImprovement =
  normalizedFeedback.includes("bad") ||
  normalizedFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);
console.log(needsImprovement ? "Needs Improvement" : "Positive Feedback");
