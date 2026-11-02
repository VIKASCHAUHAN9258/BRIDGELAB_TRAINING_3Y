// Q2: Student Form Validator (Forms + RegExp)

const studentForm = document.getElementById("studentForm");

const studentRules = {
    name: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    phone: /^\d{10}$/,
    // At least one uppercase letter, one digit and one special character.
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

const studentMessages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email address.",
    phone: "Phone number must contain exactly 10 digits.",
    password: "Password must contain an uppercase letter, a number and a special character."
};

function validateStudentField(fieldName) {
    const input = document.getElementById(fieldName);
    const error = document.getElementById(`${fieldName}Error`);
    const isValid = studentRules[fieldName].test(input.value.trim());

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    error.textContent = isValid ? "" : studentMessages[fieldName];
    return isValid;
}

Object.keys(studentRules).forEach(fieldName => {
    document.getElementById(fieldName).addEventListener("input", () => {
        validateStudentField(fieldName);
    });
});

studentForm.addEventListener("submit", event => {
    event.preventDefault();
    const allValid = Object.keys(studentRules)
        .map(validateStudentField)
        .every(Boolean);

    const result = document.getElementById("result");
    result.textContent = allValid
        ? "Registration successful!"
        : "Please correct the highlighted fields.";
    result.style.color = allValid ? "green" : "red";
});
