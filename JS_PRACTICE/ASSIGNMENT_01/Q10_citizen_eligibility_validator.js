// Q10. Citizen Eligibility Validator
const age = 19;
const isCitizen = true;

let message;
if (isCitizen) {
  if (age >= 21) {
    message = "Eligible for all services.";
  } else if (age >= 18 && age <= 20) {
    message = "Eligible to vote only.";
  } else {
    message = "Not eligible yet.";
  }
} else {
  if (age >= 18) {
    message = "Only age criteria met.";
  } else {
    message = "Not eligible yet.";
  }
}

console.log(message);
