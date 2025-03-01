let registeredUsers = {};

document.getElementById("register-btn").addEventListener("click", function() {
    document.getElementById("registration-form").classList.add("active");
    document.getElementById("login-form").classList.remove("active");
    document.getElementById("register-btn").classList.add("active");
    document.getElementById("login-btn").classList.remove("active");
});

document.getElementById("login-btn").addEventListener("click", function() {
    document.getElementById("login-form").classList.add("active");
    document.getElementById("registration-form").classList.remove("active");
    document.getElementById("login-btn").classList.add("active");
    document.getElementById("register-btn").classList.remove("active");
});

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contact-number").value;
    const password = document.getElementById("password").value;

    registeredUsers[email] = {
        name: name,
        contactNumber: contactNumber,
        password: password
    };

    console.log("Registration successful!");
    console.log("Registered Users:", registeredUsers);

    // Redirect to login page
    document.getElementById("login-form").classList.add("active");
    document.getElementById("registration-form").classList.remove("active");
    document.getElementById("login-btn").classList.add("active");
    document.getElementById("register-btn").classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        
        // Simulate login validation (Replace this with actual backend verification)
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            // Redirect to Emergency Contact Page
            window.location.href = "emergency.html"; 
        } else {
            alert("Please enter valid credentials.");
        }
    });
});
