function validatePassword(password) {
    const minLength = 8;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasCapital = /[A-Z]/.test(password);

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    } else if (!hasLetters) {
        return "Password must contain letters.";
    } else if (!hasNumbers) {
        return "Password must contain numbers.";
    } else if (!hasSymbols) {
        return "Password must contain symbols.";
    } else if (!hasCapital) {
        return "Password must contain at least one capital letter.";
    }
    return null; // Password is valid
}

// Handle sign-up form submission
document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Validate password
    const validationError = validatePassword(password);
    if (validationError) {
        alert(validationError);
        return;
    }

    // Display success message
    alert('Registration successful!');  // Use alert for testing
    document.getElementById('registerForm').reset(); // Clear input fields

    // Redirect to home page (index.html)
    window.location.href = "index.html"; // Ensure this page exists
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Validate password
    const validationError = validatePassword(password);
    if (validationError) {
        alert(validationError);
        return;
    }

    // Display success message
    alert('Login successful!');  // Use alert for testing
    document.getElementById('loginForm').reset(); // Clear input fields

    // Redirect to home page (index.html)
    window.location.href = "index.html"; // Ensure this page exists
});
