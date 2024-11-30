function checkpassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    console.log("password entered: " + password);  // debugging line

    // password strength checks
    const lengthpass = password.length >= 8;  // to make sure password is atleast 8 letters/numbers/symbols.
    const numberpass = /\d/.test(password);    // to check if theres numbers
    const symbolpass = /[!@#$%^&*(),.?":{}|<>]/.test(password);  // to check for symbols
    const capitalpass = /[A-Z]/.test(password); // to check for uppercase letters
    const lowercasepass = /[a-z]/.test(password); // to check for lower case letters
    const nopass = password.length <= 0;      // to check if no password is entered
    const shortpass = password.length <= 5; // if password length is only up to 5 letters/numbers/symbols, its too short.
    const longpass = password.length >= 12; // if password is very long then it increases strength.

    // initialize strength level at 0
    let strength = 0;

    // increase the strength for each criteria met
    if (lengthpass) strength++;
    if (numberpass) strength++;
    if (symbolpass) strength++;
    if (capitalpass) strength++;
    if (lowercasepass) strength++;
    if (longpass) strength = 4;
    
    // set the strength if theres no password input in the first place or if the pass is too short.
    if (nopass) strength = -1;
    if (shortpass) strength = 2;

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
    else if (strength <= -1) {
        result.textContent = "you didn't insert a password!";
        result.style.color = "red";
    }
}

function generatePassword() {
    console.log("Generating password...");  // debugging line

    // make sure the password meets the strength criteria
    const length = 14;  // At least 14 characters for a very strong password
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    // make sure the password contains at least one number, one uppercase, one lowercase, and one symbol
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    // generate at least one character of each type to maximizze the strength
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));

    // fill the rest of the password to meet the required length
    for (let i = password.length; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // shuffle up the password to randomize the character order
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    const display = document.getElementById('generated-password');
    display.textContent = `Here is your password: ${password}`;
    display.style.color = "blue";
}
