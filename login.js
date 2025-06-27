document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission (we're handling it with JS)

    // Get values from input fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Predefined credentials (for demonstration)
    const correctEmail = "user@example.com";
    const correctPassword = "password123";

    // Check if email and password are correct
    if (email === correctEmail && password === correctPassword) {
        alert("Login successful! Redirecting to your dashboard...");
        // Here you can redirect to another page, for example:
        window.location.href = "dashboard.html";  // Change to actual dashboard page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});