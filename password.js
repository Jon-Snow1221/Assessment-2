console.log('Welcome to the Password Validator! Please type in your password below:');

function CheckPassword() {
    let userPassword = document.getElementById("pswd").value;
    if (userPassword.length > 10) {
        alert('Correct!')
        return true;
    } else {
        alert('Incorrect. Please try again.')
        return false;
    }
};
