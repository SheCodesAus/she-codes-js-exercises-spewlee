window.onload = function load() {
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");

    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    speechBubbleElement.appendChild(messageBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
};


function showMessage() {
    let message = document.getElementById("message-text").value;
    let messageBox = document.getElementById("message-box");
    let name = document.getElementById("name-text").value;
    messageBox.innerText = message + " - " + name;
    console.log(message);
};