console.log('Welcome to the Password Validator!');

function CheckPassword(inputtxt) {
    let userPassword = /^[A-Za-z]\w{10}$/;
    if (inputtxt.value.match(userPassword)) {
        alert('Correct!')
        return true;
    } else {
        alert('Incorrect. Please try again.')
        return false;
    }
}
