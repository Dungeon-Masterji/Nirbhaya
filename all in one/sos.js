let countdown;
let timer = 5;
const sosButton = document.getElementById("sosButton");
const stopButton = document.getElementById("stopButton");
const timerDisplay = document.getElementById("timer");

sosButton.addEventListener("click", function() {
    sosButton.disabled = true; // Disable the SOS button
    stopButton.style.display = "none"; // Hide stop button initially
    timer = 5;
    timerDisplay.innerText = `Sending alert in ${timer} seconds...`;

    countdown = setInterval(function() {
        timer--;
        timerDisplay.innerText = `Sending alert in ${timer} seconds...`;

        if (timer === 0) {
            clearInterval(countdown);
            sendEmergencyAlert();
        }
    }, 1000);
});

function sendEmergencyAlert() {
    alert("🚨 SOS Alert Sent!\n\n- Emergency SMS Sent\n- Real-time Location Shared\n- Calling Emergency Contact...");

    // Simulating emergency actions (replace with actual API calls if needed)
    console.log("📍 Sending location...");
    console.log("📩 Sending emergency SMS...");
    console.log("📞 Calling emergency contact...");

    stopButton.style.display = "block"; // Show Stop SOS button
}

// Stop SOS action
stopButton.addEventListener("click", function() {
    alert("❌ SOS Stopped. Actions Cancelled.");
    sosButton.disabled = false; // Re-enable SOS button
    timerDisplay.innerText = ""; // Clear timer display
    stopButton.style.display = "none"; // Hide stop button
});
