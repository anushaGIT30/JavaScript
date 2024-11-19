function data(event) {
    // Prevent form submission
    event.preventDefault();

    // Get values of the input fields
    let a = document.getElementById("username").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("phone").value;
    let d = document.getElementById("male").checked;
    let e = document.getElementById("female").checked;
    let f = document.getElementById("password").value;
    let g = document.getElementById("Confirmpassword").value;

    // Check if any of the required fields are empty or if gender is not selected
    if (a === "" || b === "" || c === "" || (d === false && e === false) || f === "" || g === "") {
        alert("All fields are required");
        return false;  // Prevent form submission
    }

    // Check if password and confirm password match
    if (f !== g) {
        alert("Passwords do not match");
        return false;  // Prevent form submission
    }

    // Check if the phone number is exactly 10 digits
    if (c.length !== 10 || isNaN(c)) {
        alert("Please enter a valid 10-digit phone number");
        return false;  // Prevent form submission
    }

    // If all validations pass, show success message and submit the form
    alert("Form submitted successfully");

    // Optionally, you can manually submit the form after validation
    // document.querySelector("form").submit();  // Uncomment this to actually submit the form
    // Or, you can redirect to another page like signupSubmit.html
    // window.location.href = "signupSubmit.html";  // Redirect to another page
}
