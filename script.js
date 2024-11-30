function checkpassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    console.log("Password entered: " + password);  // Debugging line

    const lengthpass = password.length >= 8;
    const numberpass = /\d/.test(password);
    const symbolpass = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const capitalpass = /[A-Z]/.test(password);

    let strength = 0;
    if (lengthpass) strength++;
    if (numberpass) strength++;
    if (symbolpass) strength++;
    if (capitalpass) strength++;

    console.log("Strength level: " + strength);  // Debugging line

    if (strength === 4) {
        result.textContent = "Your password is a strong password!";
        result.style.color = "green";
    } else if (strength === 3) {
        result.textContent = "Your password is manageable..";
        result.style.color = "orange";
    } else {
        result.textContent = "Your password is too weak!";
        result.style.color = "red";
    }
}
