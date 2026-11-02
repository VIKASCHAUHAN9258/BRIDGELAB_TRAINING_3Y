// Q5: Movie Ticket Booking (Objects + RegExp)

const bookingForm = document.getElementById("bookingForm");

const bookingNamePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
const bookingEmailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("bookingName").value.trim();
    const email = document.getElementById("bookingEmail").value.trim();
    const seatsText = document.getElementById("seats").value.trim();
    const seats = Number(seatsText);
    const errors = [];

    if (!bookingNamePattern.test(name)) {
        errors.push("Name must contain alphabets only.");
    }
    if (!bookingEmailPattern.test(email)) {
        errors.push("Enter a valid email address.");
    }
    if (!/^\\d+$/.test(seatsText) || !Number.isInteger(seats) || seats < 1 || seats > 10) {
        errors.push("Seats must be a whole number from 1 to 10.");
    }

    const message = document.getElementById("bookingMessage");
    const ticket = document.getElementById("ticket");

    if (errors.length > 0) {
        message.textContent = errors.join(" ");
        message.className = "error";
        ticket.textContent = "";
        return;
    }

    // Store validated booking details in the requested object shape.
    const booking = { name, email, seats };
    message.textContent = "Booking successful!";
    message.className = "";
    ticket.textContent =
        `TICKET CONFIRMATION\\nName: ${booking.name}\\nEmail: ${booking.email}\\nSeats: ${booking.seats}`;
    ticket.style.whiteSpace = "pre-line";
});
