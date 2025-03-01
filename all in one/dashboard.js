document.addEventListener("DOMContentLoaded", () => {
        console.log("Dashboard Script Loaded Successfully");
    
        // Select the user info button
        const userInfoBtn = document.querySelector(".user-info-btn");
    
        // Create and append a dropdown menu dynamically
        let dropdownMenu = document.createElement("div");
        dropdownMenu.classList.add("dropdown-menu");
        dropdownMenu.innerHTML = `<a href="#" id="logout">Logout</a>`;
        userInfoBtn.parentElement.appendChild(dropdownMenu);
    
        // Show/hide dropdown on button click
        userInfoBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent immediate closing
            dropdownMenu.classList.toggle("show");
        });
    
        // Hide dropdown when clicking outside
        document.addEventListener("click", (event) => {
            if (!userInfoBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    
        // Logout functionality
        document.getElementById("logout").addEventListener("click", async () => {
            console.log("Logging out...");
    
            try {
                // Call backend API to remove user data
                const response = await fetch("/logout", { method: "POST" });
    
                if (response.ok) {
                    console.log("User data erased successfully.");
                    window.location.href = "login.html"; // Redirect to home page
                } else {
                    console.error("Failed to erase user data.");
                }
            } catch (error) {
                console.error("Error during logout:", error);
            }
        });
    });
    

    // Redirect to SOS page when the SOS feature is clicked
    const sosFeature = document.querySelector(".feature.sos");
    if (sosFeature) {
        sosFeature.addEventListener("click", () => {
            window.location.href = "sos.html"; // Redirect to SOS Alert page
        });
    }

    // Redirect to Emergency SMS page (if needed)
    const smsFeature = document.querySelector(".feature.sms");
    if (smsFeature) {
        smsFeature.addEventListener("click", () => {
            window.location.href = "emergency_sms.html"; // Modify if you have an SMS page
        });
    }

    // Redirect to Helpline page (if needed)
    const helplineFeature = document.querySelector(".feature.helpline");
    if (helplineFeature) {
        helplineFeature.addEventListener("click", () => {
            window.location.href = "help_line.html"; // Modify if needed
        });
    }

    // Redirect to Record Audio page (if needed)
    const recordFeature = document.querySelector(".feature.record");
    if (recordFeature) {
        recordFeature.addEventListener("click", () => {
            window.location.href = "audio.html"; // Modify if needed
        });
    }

    // Redirect to Track Me page (if needed)
    const trackFeature = document.querySelector(".feature.track");
    if (trackFeature) {
        trackFeature.addEventListener("click", () => {
            window.location.href = "tracking.html"; // Modify if needed
        });
    }

    // Redirect to Manage Emergency Contacts page (if needed)
    const manageBtn = document.querySelector(".manage-btn");
    if (manageBtn) {
        manageBtn.addEventListener("click", () => {
            window.location.href = "emergency.html"; // Modify if needed
        });
    }

    // Logout functionality (optional)
    const logoutIcon = document.querySelector(".logout-icon");
    if (logoutIcon) {
        logoutIcon.addEventListener("click", () => {
            alert("You have been logged out!");
            window.location.href = "login.html"; // Redirect to login page
        });
    }
document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard Script Loaded Successfully");

    // Select the user info button
    const userInfoBtn = document.querySelector(".user-info-btn");

    // Create and append a dropdown menu dynamically
    let dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");
    dropdownMenu.innerHTML = `<a href="#" id="logout">Logout</a>`;
    userInfoBtn.parentElement.appendChild(dropdownMenu);

    // Show/hide dropdown on button click
    userInfoBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent immediate closing
        dropdownMenu.classList.toggle("show");
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!userInfoBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // Logout functionality
    document.getElementById("logout").addEventListener("click", async () => {
        console.log("Logging out...");

        try {
            // Call backend API to remove user data
            const response = await fetch("/logout", { method: "POST" });

            if (response.ok) {
                console.log("User data erased successfully.");
                window.location.href = "index.html"; // Redirect to home page
            } else {
                console.error("Failed to erase user data.");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    });

    
});
