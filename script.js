function checkpassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    console.log("password entered: " + password);  // debugging line

    // password strength checks
    const lengthpass = password.length >= 8;  // to make sure password is at least 8 characters
    const numberpass = /\d/.test(password);    // to check if there's a number
    const symbolpass = /[!@#$%^&*(),.?":{}|<>]/.test(password);  // to check for symbols
    const capitalpass = /[A-Z]/.test(password); // to check for uppercase letters
    const lowercasepass = /[a-z]/.test(password); // to check for lowercase letters
    const nopass = password.length <= 0;      // to check if no password is entered

    // initialize strength level at 0
    let strength = 0;

    // increase the strength for each criterion met
    if (lengthpass) strength++;
    if (numberpass) strength++;
    if (symbolpass) strength++;
    if (capitalpass) strength++;
    if (lowercasepass) strength++;  // add strength for lowercase letters

    // if no password is entered, reduce strength
    if (nopass) strength--;

    console.log("strength level: " + strength);  // debugging line

    // reset the result area before showing new result
    result.textContent = "";  // clear previous result
    result.style.color = "black";  // reset the text color

    // determine password strength based on the strength level
    if (strength === 6) {
        result.textContent = "your password is very strong!";
        result.style.color = "green";
    } 
    else if (strength === 5) {
        result.textContent = "your password is strong.";
        result.style.color = "green";
    } 
    else if (strength === 4) {
        result.textContent = "your password is manageable..";
        result.style.color = "orange";
    } 
    else if (strength === 3) {
        result.textContent = "your password is alright..";
        result.style.color = "yellow";
    } 
    else if (strength === 2) {
        result.textContent = "your password is weak!";
        result.style.color = "red";
    }
    else if (strength === 1) {
        result.textContent = "your password is very weak!";
        result.style.color = "red";
    }
    else if (strength <= 0) {
        result.textContent = "you didn't insert a password!";
        result.style.color = "red";
    }
}

// function to generate a strong password
function generatePassword() {
    const length = 14;  // password length
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';  // characters to use for password
    let password = '';

    // randomly select characters to form the password
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // display the generated password
    const display = document.getElementById('generated-password');
    display.textContent = `here is your password: ${password}`;
    display.style.color = "blue";  // set the color of the generated password to blue
}
