// Q8: Dynamic Object Updater

// Initial user object specified in the assignment.
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const userNameInput = document.getElementById("userName");
const userEmailInput = document.getElementById("userEmail");
const userAgeInput = document.getElementById("userAge");
const userOutput = document.getElementById("userOutput");

// Fill the form with the initial object values.
userNameInput.value = user.name;
userEmailInput.value = user.email;
userAgeInput.value = user.age;

function displayUser() {
    userOutput.textContent = JSON.stringify(user, null, 2);
}

userForm.addEventListener("submit", event => {
    event.preventDefault();

    // Update the same object using the latest form values.
    user.name = userNameInput.value.trim();
    user.email = userEmailInput.value.trim();
    user.age = Number(userAgeInput.value);

    displayUser();
});

displayUser();
