function convertToSign() {
    let text = document.getElementById("textInput").value.trim();
    let outputDiv = document.getElementById("signResult");

    if (text === "") {
        outputDiv.innerHTML = "⚠️ Please enter some text!";
        return;
    }

    // Simulated output (Replace with real sign language conversion logic)
    let signOutput = text.split("").map(char => `✋`).join(" ");
    
    outputDiv.innerHTML = signOutput;
}

// Function to go back to selection page
function goBack() {
    window.location.href = "selection.html";
}
