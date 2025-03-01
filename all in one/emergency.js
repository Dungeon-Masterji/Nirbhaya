document.addEventListener("DOMContentLoaded", () => {
    const emergencyForm = document.getElementById("emergency-contact-form");

    emergencyForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collecting form data (You can extend this to store in a database)
        const phone1 = document.getElementById("phone1").value;
        const email1 = document.getElementById("email1").value;

        // Simple validation check
        if (phone1 && email1) {
            alert("Emergency contacts saved successfully! Redirecting to Dashboard...");

            // Redirect to the Nirbhaya Dashboard
            window.location.href = "dashboard.html";
        } else {
            alert("Please fill at least one emergency contact and one email before submitting.");
        }
    });
});
