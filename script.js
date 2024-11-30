function checkpassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    console.log("password entered: " + password);  // debugging line

    // password strength checks
    const lengthpass = password.length >= 10;  // to make sure password is atleast 10 letters
    const numberpass = /\d/.test(password);    // to check if theres numbers
    const symbolpass = /[!@#$%^&*(),.?":{}|<>]/.test(password);  // to check for symbols
    const capitalpass = /[A-Z]/.test(password); // to check for uppercase letters
    const lowercasepass = /[a-z]/.test(password); // to check for lower case letters
    const nopass = password.length <= 0;      // to check if no password is entered

    // initialize strength level at 1
    let strength = 0;

    // increase the strength for each criteria met
    if (lengthpass) strength++;
    if (numberpass) strength++;
    if (symbolpass) strength++;
    if (capitalpass) strength++;
    if (lowercasepass) strength++;
    
    // lower the strength if theres no password input in the first place.
    if (nopass) strength--;

    console.log("strength level: " + strength);  // debugging line

    // determine password strength based on the strength level
    if (strength === 6) {
        result.textContent = "your password is very strong!";
        result.style.color = "green";
    } 
    else if (strength === 5) {
        result.textContent = "Your password is strong.";
        result.style.color = "green";
    } 
    else if (strength === 4) {
        result.textContent = "Your password is manageable.";
        result.style.color = "orange";
    } 
    else if (strength === 3) {
        result.textContent = "Your password is alright.";
        result.style.color = "yellow";
    } 
    else if (strength === 2) {
        result.textContent = "Your password is weak!";
        result.style.color = "red";
    } 
    else if (strength === 1) {
        result.textContent = Yyour password is very weak!";
        result.style.color = "red";
    }
    else if (strength <= 0) {
        result.textContent = "you didn't insert a password!";
        result.style.color = "red";
    }
}

function generatePassword() {
    console.log("Generating password...");  // debugging line
    const length = 14;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const display = document.getElementById('generated-password');
    display.textContent = `Here is your password: ${password}`;
    display.style.color = "blue";
}
