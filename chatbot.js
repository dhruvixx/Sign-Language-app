function sendMessage() {
    let userInput = document.getElementById("userInput").value.trim();
    let chatBox = document.getElementById("chatBox");

    if (userInput === "") return;

    // Append user message
    let userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.innerText = "🧑‍💻 " + userInput;
    chatBox.appendChild(userMessage);

    // Dummy bot responses
    let botReply = document.createElement("p");
    botReply.className = "bot-message";

    if (userInput.toLowerCase().includes("hello")) {
        botReply.innerText = "🤖 Hi there! How can I help you?";
    } else if (userInput.toLowerCase().includes("how to use")) {
        botReply.innerText = "🤖 You can select 'Sign to Text' or 'Text to Sign' from the menu!";
    } else {
        botReply.innerText = "🤖 Sorry, I didn't understand that. Try asking about 'how to use' or 'features'.";
    }

    setTimeout(() => {
        chatBox.appendChild(botReply);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    document.getElementById("userInput").value = "";
}
