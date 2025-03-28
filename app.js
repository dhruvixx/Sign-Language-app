// Open webcam video feed
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        document.getElementById('video').srcObject = stream;
    })
    .catch(function (err) {
        console.log("Error: " + err);
    });

// Dummy function to go back to Home Page
function goBack() {
    window.location.href = "selection.html";
}
