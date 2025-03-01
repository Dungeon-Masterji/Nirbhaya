const helplineNumbers = [
    { name: "Police", number: "100" },
    { name: "Ambulance", number: "102" },
    { name: "Women Helpline", number: "1091" },
    { name: "Child Helpline", number: "1098" },
    { name: "Fire Brigade", number: "101" }
];

const helplineList = document.getElementById("helpline-list");

helplineNumbers.forEach(contact => {
    const li = document.createElement("li");
    li.textContent = `${contact.name}: ${contact.number}`;
    li.onclick = () => callNumber(contact.number);
    helplineList.appendChild(li);
});

function callNumber(number) {
    window.location.href = `tel:${number}`;
}

function goBack() {
    window.history.back();
}
