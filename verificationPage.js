document.getElementById('verificationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailMessage = document.getElementById('emailMessage');
    const passwordMessage = document.getElementById('passwordMessage');
    // Clear previous messages
    emailMessage.textContent = '';
    passwordMessage.textContent = '';
    // Email validation pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Password validation pattern: at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let valid = true;
    if (!emailPattern.test(email)) {
        emailMessage.textContent = 'Invalid email address';
        valid = false;
    }
    if (!passwordPattern.test(password)) {
        passwordMessage.textContent = 'Password must be at least 8 characters, include uppercase, lowercase, number and special character'
        valid = false;
    }
    if (valid) {
        alert('Email and password are valid!');
    } 
});