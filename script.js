function checkpassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    console.log("password entered: " + password);  // debugging line

    // password strength checks
    const lengthpass = password.length >= 8;  // to make sure password is at least 8 characters
    const numberpass = /\d/.test(password);    // to check if there are numbers
    const symbolpass = /[!@#$%^&*(),.?":{}|<>]/.test(password);  // to check for symbols
    const capitalpass = /[A-Z]/.test(password); // to check for uppercase letters
    const lowercasepass = /[a-z]/.test(password); // to check for lowercase letters
    const nopass = password.length <= 0;      // to check if no password is entered
    const shortpass = password.length <= 5; // if password length is only up to 5, it's too short
    const longpass = password.length >= 12; // if password is very long, increase strength

    // initialize strength level
    let strength = 0;

    // shortpass, nopass scenarios
    if (nopass) {
        strength = -1; // if no password is entered, set strength to -1
        result.textContent = "you didn't insert a password!";
        result.style.color = "red";
        return; // exit function early since password is invalid
    }

    if (shortpass) {
        strength = -1; // if password is too short, set strength to -1
        result.textContent = "your password is too short to be valid!";
        result.style.color = "red";
        return; // exit function early since password is too short
    }

    // increase strength for each valid condition
    if (lengthpass) strength++;
    if (numberpass) strength++;
    if (symbolpass) strength++;
    if (capitalpass) strength++;
    if (lowercasepass) strength++;
    if (longpass) strength++;  // giving bonus for very long passwords (12 or more characters)

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
        result.textContent = "Your password is very weak!";
        result.style.color = "red";
    }
    
    function generatePassword() {
    console.log("Generating password...");  // debugging line

    const length = 14;  // At least 14 characters for a very strong password
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    // make sure the password contains at least one number, one uppercase, one lowercase, and one symbol
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    // generate at least one character of each type to maximize the strength
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));

    // fill the rest of the password to meet the required length
    for (let i = password.length; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // shuffle the password to randomize the character order
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    const display = document.getElementById('generated-password');
    display.textContent = `Here is your password: ${password}`;
    display.style.color = "blue";
}
