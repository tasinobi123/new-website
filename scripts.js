// Handle Emotional State Form Submission
document.getElementById("emotionalForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const emotion = document.getElementById("emotion").value;
    const reason = document.getElementById("reason").value;

    alert(`Your emotional state: ${emotion}\nReason: ${reason}`);
});
