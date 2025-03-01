// Predefined emergency messages
const messages = [
    "I am in danger, please help me!",
    "I need immediate assistance, call me ASAP!",
    "I feel unsafe, can you track my location?",
    "Emergency! Contact the authorities for me!"
];

// Sample emergency contacts
const contacts = ["Mom", "Dad", "Best Friend", "Police", "Emergency Helpline"];

// Function to load SMS messages
function loadMessages() {
    const smsList = document.getElementById("sms-list");
    messages.forEach((msg, index) => {
        let div = document.createElement("div");
        div.className = "sms-item";
        div.textContent = msg;
        div.onclick = () => openModal(msg);
        smsList.appendChild(div);
    });
}

// Function to open modal with selected message
function openModal(message) {
    document.getElementById("selected-message").textContent = message;
    let contactSelect = document.getElementById("contact-select");
    contactSelect.innerHTML = "";
    contacts.forEach(contact => {
        let option = document.createElement("option");
        option.value = contact;
        option.textContent = contact;
        contactSelect.appendChild(option);
    });
    document.getElementById("sms-modal").style.display = "flex";
}

// Function to close modal
function closeModal() {
    document.getElementById("sms-modal").style.display = "none";
}

// Function to "send" SMS (simulate sending)
function sendSMS() {
    let message = document.getElementById("selected-message").textContent;
    let contact = document.getElementById("contact-select").value;
    alert(`SMS Sent to ${contact}: "${message}"`);
    closeModal();
}

// Load messages on page load
window.onload = loadMessages;
