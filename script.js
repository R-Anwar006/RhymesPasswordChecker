function checkpassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    console.log("Password entered: " + password);  // Debugging line

    // Password strength checks
    const lengthpass = password.length >= 10;  // Check if length is 10 or more
    const numberpass = /\d/.test(password);    // Check if there's a number
    const symbolpass = /[!@#$%^&*(),.?":{}|<>]/.test(password);  // Check for symbols
    const capitalpass = /[A-Z]/.test(password); // Check for uppercase letters
    const nopass = password.length <= 0;      // Check if no password is entered

    // Initialize strength level
    let strength = 0;

    // Increase strength for each criterion that is met
    if (lengthpass) strength++;
    if (numberpass) strength++;
    if (symbolpass) strength++;
    if (capitalpass) strength++;

    // Decrease strength if password is empty
    if (nopass) strength--;

    console.log("Strength level: " + strength);  // Debugging line

    // Determine password strength based on the strength level
    if (strength === 4) {
        result.textContent = "Your password is a strong password!";
        result.style.color = "green";
    } 
    else if (strength === 3) {
        result.textContent = "Your password is manageable..";
        result.style.color = "orange";
    } 
    else if (strength === 2) {
        result.textContent = "Your password is weak!";
        result.style.color = "yellow";
    }
    else if (strength === 1) {
        result.textContent = "Your password is very weak!";
        result.style.color = "red";
    }
    else if (strength <= 0) {
        result.textContent = "You didn't insert a password!";
        result.style.color = "red";
    }
}
