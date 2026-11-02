// Q7: Login Form Validation using RegExp

const loginForm = document.getElementById("loginForm");

// Username must contain at least 5 characters.
const usernamePattern = /^.{5,}$/;

// Password must contain at least 8 characters, uppercase, lowercase,
// a number and a special character.
const loginPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{8,}$/;

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("loginPassword").value;
    const errors = [];

    if (!usernamePattern.test(username)) {
        errors.push("Username must be at least 5 characters long.");
    }
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must include an uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must include a lowercase letter.");
    }
    if (!/\\d/.test(password)) {
        errors.push("Password must include a number.");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must include a special character.");
    }

    const message = document.getElementById("loginMessage");
    if (errors.length === 0 && loginPasswordPattern.test(password)) {
        message.textContent = "Validation successful! Login details are valid.";
        message.style.color = "green";
    } else {
        message.textContent = errors.join("\\n");
        message.style.color = "red";
    }
});
