document.getElementById("registration-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contact-number").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, contactNumber, password }),
        });

        const data = await response.json();
        alert(data.message);

        if (response.ok) {
            // Switch to login form
            document.getElementById("login-form").classList.add("active");
            document.getElementById("registration-form").classList.remove("active");
        }
    } catch (error) {
        console.error("Registration Error:", error);
    }
});

document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        alert(data.message);

        if (response.ok) {
            window.location.href = data.redirect;
        }
    } catch (error) {
        console.error("Login Error:", error);
    }
});
