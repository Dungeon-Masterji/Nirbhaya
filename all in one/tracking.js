document.addEventListener("DOMContentLoaded", function () {
    const startTrackingBtn = document.getElementById("start-tracking");
    const shareLocationBtn = document.getElementById("share-location");
    const locationStatus = document.getElementById("location-status");
    let tracking = false;
    let watchId;
    let map, marker;
    let currentLatitude, currentLongitude;

    function initMap(latitude, longitude) {
        if (!map) {
            map = L.map("map").setView([latitude, longitude], 15);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
            marker = L.marker([latitude, longitude]).addTo(map).bindPopup("Your Location").openPopup();
        } else {
            map.setView([latitude, longitude], 15);
            marker.setLatLng([latitude, longitude]);
        }
    }

    startTrackingBtn.addEventListener("click", function () {
        if (tracking) {
            navigator.geolocation.clearWatch(watchId);
            tracking = false;
            startTrackingBtn.textContent = "Start Tracking";
            locationStatus.textContent = "Tracking stopped.";
        } else {
            if (navigator.geolocation) {
                watchId = navigator.geolocation.watchPosition(
                    function (position) {
                        currentLatitude = position.coords.latitude;
                        currentLongitude = position.coords.longitude;
                        locationStatus.textContent = `Latitude: ${currentLatitude}, Longitude: ${currentLongitude}`;
                        initMap(currentLatitude, currentLongitude);
                    },
                    function (error) {
                        locationStatus.textContent = "Unable to retrieve location.";
                    },
                    { enableHighAccuracy: true }
                );
                tracking = true;
                startTrackingBtn.textContent = "Stop Tracking";
            } else {
                locationStatus.textContent = "Geolocation is not supported by this browser.";
            }
        }
    });

    shareLocationBtn.addEventListener("click", function () {
        if (!tracking || !currentLatitude || !currentLongitude) {
            alert("Start tracking first before sharing location.");
            return;
        }
        
        const shareLink = `https://www.google.com/maps?q=${currentLatitude},${currentLongitude}`;
        
        if (navigator.share) {
            navigator.share({
                title: "My Current Location",
                text: "Here is my current location:",
                url: shareLink
            }).catch(error => console.log("Error sharing location", error));
        } else {
            const shareOptions = [
                { name: "WhatsApp", url: `https://wa.me/?text=${encodeURIComponent(shareLink)}` },
                { name: "Email", url: `mailto:?subject=My Location&body=${encodeURIComponent(shareLink)}` },
                { name: "SMS", url: `sms:?body=${encodeURIComponent(shareLink)}` },
                { name: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}` },
                { name: "Twitter", url: `https://twitter.com/intent/tweet?text=${encodeURIComponent("My Location: " + shareLink)}` },
                { name: "Copy Link", action: () => {
                    navigator.clipboard.writeText(shareLink);
                    alert("Location link copied!");
                }}
            ];

            let optionsHTML = "<div style='padding: 10px;'><strong>Share Location:</strong><br>";
            shareOptions.forEach(option => {
                if (option.url) {
                    optionsHTML += `<a href='${option.url}' target='_blank' style='display:block; margin: 5px 0;'>${option.name}</a>`;
                } else {
                    optionsHTML += `<button id='copy-link' style='display:block; margin: 5px 0;'>${option.name}</button>`;
                }
            });
            optionsHTML += "</div>";
            
            const shareDiv = document.createElement("div");
            shareDiv.innerHTML = optionsHTML;
            shareDiv.style.position = "fixed";
            shareDiv.style.top = "50%";
            shareDiv.style.left = "50%";
            shareDiv.style.transform = "translate(-50%, -50%)";
            shareDiv.style.background = "white";
            shareDiv.style.padding = "15px";
            shareDiv.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
            shareDiv.style.zIndex = "1000";
            document.body.appendChild(shareDiv);
            
            document.getElementById("copy-link").addEventListener("click", function () {
                navigator.clipboard.writeText(shareLink);
                alert("Location link copied!");
            });
            
            shareDiv.addEventListener("click", function (event) {
                if (event.target === shareDiv) {
                    document.body.removeChild(shareDiv);
                }
            });
        }
    });
});
