function checkpassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    const lengthpass = password.length >= 8;
    const numberpass = /\d/.test(password);
    const symbolpass = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const capitalpass = /[A-Z]/.test(password);

    let strength = 0;
    if (lengthpass) strength++;
    if (numberpass) strength++;
    if (symbolpass) strength++;
    if (capitalpass) strength++;

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

function generatestrongpassword() {
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
