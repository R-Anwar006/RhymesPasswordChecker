function checkpassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    console.log("Password entered: " + password);  // debugging line

    // Password strength checks
    const lengthpass = password.length >= 10;  // to make sure password is atleast 10 letters
    const numberpass = /\d/.test(password);    // to check if theres numbers
    const symbolpass = /[!@#$%^&*(),.?":{}|<>]/.test(password);  // to check for symbols
    const capitalpass = /[A-Z]/.test(password); // to check for uppercase letters
    const lowercasepass = /[a-z]/.test(password); // to check for lower case letters
    const nopass = password.length <= 0;      // to check if no password is entered

    // initialize strength level at 0
    let strength = 0;

    // increase the strength for each criteria met
    if (lengthpass) strength++;
    if (numberpass) strength++;
    if (symbolpass) strength++;
    if (capitalpass) strength++;

    // lower the strength if theres no password input in the first place.
    if (nopass) strength--;

    console.log("Strength level: " + strength);  // Debugging line

    // Determine password strength based on the strength level
    if (strength === 5) {
        result.textContent = "Your password is a strong password!";
        result.style.color = "green";
    } 
    else if (strength === 4) {
        result.textContent = "Your password is manageable..";
        result.style.color = "orange";
    } 
    else if (strength === 3) {
        result.textContent = "Your password is alright..";
        result.style.color = "yellow";
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
