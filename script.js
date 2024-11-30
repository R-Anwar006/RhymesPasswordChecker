function checkpassword() 
{
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    console.log("Password entered: " + password);  // Debugging line

    const lengthpass = password.length >= 8;
    const numberpass = /\d/.test(password);
    const symbolpass = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const capitalpass = /[A-Z]/.test(password);
    const nopass = password.length <= 0;

    let strength = 0;
    if (lengthpass) strength++;
    if (numberpass) strength++;
    if (symbolpass) strength++;
    if (capitalpass) strength++;
    if (nopass) strength--;

    console.log("Strength level: " + strength);  

    if (strength === 4) 
    {
        result.textContent = "Your password is a strong password!";
        result.style.color = "green";
    } 
    else if (strength === 3)
    {
        result.textContent = "Your password is manageable..";
        result.style.color = "orange";
    } 
    else if (strength == 0)
    {
        result.textContent = "Your password is too weak!";
        result.style.color = "red";
    }
    else if (strength >= -1)
    {
        result.textContent = "You didnt insert a password!";
        result.style.color = "red";
}
