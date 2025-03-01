let mediaRecorder;
let audioChunks = [];

document.getElementById("start").addEventListener("click", async function() {
    let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = function(event) {
        audioChunks.push(event.data);
    };

    mediaRecorder.onstop = function() {
        let audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        let audioUrl = URL.createObjectURL(audioBlob);

        let audioContainer = document.getElementById("audioContainer");
        
        let div = document.createElement("div");
        div.classList.add("audio-item");

        let audio = document.createElement("audio");
        audio.controls = true;
        audio.src = audioUrl;

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.onclick = function() {
            audioContainer.removeChild(div);
        };

        div.appendChild(audio);
        div.appendChild(deleteButton);
        audioContainer.appendChild(div);

        audioChunks = [];
    };

    mediaRecorder.start();
    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "inline-block";
});

document.getElementById("stop").addEventListener("click", function() {
    mediaRecorder.stop();
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("stop").style.display = "none";
});
