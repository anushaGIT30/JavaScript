const form = document.getElementById('form');
const uname = document.getElementById('uname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const tandc = document.getElementById('tc'); // Reference the terms checkbox

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validate()) {
        form.submit(); // Submit the form if all validations pass
    }
});

function validate() {
    let isValid = true;

    let nameValue = uname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let cpasswordValue = cpassword.value.trim();

    // Username check
    if (nameValue === '') {
        setError(uname, 'User name cannot be empty');
        isValid = false;
    } else if (nameValue.length < 3) {
        setError(uname, 'User name should be minimum 3 characters');
        isValid = false;
    } else {
        setSuccess(uname);
    }

    // Email check
    if (emailValue === '') {
        setError(email, 'Email cannot be empty');
        isValid = false;
    } else if (!emailCheck(emailValue)) {
        setError(email, 'Enter valid Email ID');
        isValid = false;
    } else {
        setSuccess(email);
    }

    // Password check
    if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password should be minimum 8 characters');
        isValid = false;
    } else {
        setSuccess(password);
    }

    // Confirm Password check
    if (cpasswordValue === '') {
        setError(cpassword, 'Confirm password cannot be empty');
        isValid = false;
    } else if (cpasswordValue !== passwordValue) {
        setError(cpassword, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccess(cpassword);
    }

    // Terms and conditions check
    if (!tandc.checked) {
        setError(tandc, 'You must agree to the terms and conditions');
        isValid = false;
    } else {
        setSuccess(tandc);
    }

    return isValid; // Return true if all validations pass
}

function setError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    small.innerText = message;
    parent.classList.add('error');
    parent.classList.remove('success');
}

function setSuccess(input) {
    let parent = input.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error');
}

function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailReg.test(input);
}
