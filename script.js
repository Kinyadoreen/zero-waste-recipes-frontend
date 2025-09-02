document.getElementById("year").textContent = new Date().getFullYear();

function sendFeedback() {
  const userInput = document.getElementById("userInput").value;
  const responseBox = document.getElementById("responseBox");

  if (!userInput.trim()) {
    responseBox.innerHTML = "⚠️ Please enter your feedback before submitting.";
    return;
  }

  responseBox.innerHTML = "⏳ Processing feedback...";

  // Simulate AI response (replace with backend fetch)
  setTimeout(() => {
    responseBox.innerHTML = "✅ Thank you for your feedback! The AI has processed it.";
  }, 1500);
}
