// Q2. Multi-Type Data Summary
const userName = "Vikas";              // string
const age = 21;                        // number
const isStudent = true;                // boolean
const skills = ["JavaScript", "HTML"]; // array
const profile = { city: "Aligarh" };   // object
const middleName = null;               // null
let nickname;                          // undefined

const entries = [
  { label: "userName", value: userName, type: typeof userName },
  { label: "age", value: age, type: typeof age },
  { label: "isStudent", value: isStudent, type: typeof isStudent },
  { label: "skills", value: skills.join(", "), type: Array.isArray(skills) ? "array" : typeof skills },
  { label: "profile", value: JSON.stringify(profile), type: typeof profile },
  { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
  { label: "nickname", value: String(nickname), type: typeof nickname }
];

console.table(entries);
