// Dynamic Calendar Creation
document.getElementById("get-started").addEventListener("click", () => {
    const container = document.getElementById("calendar-container");
    container.innerHTML = "";
    for (let i = 1; i <= 24; i++) {
      const day = document.createElement("div");
      day.classList.add("day");
      day.innerText = `Day ${i}`;
      container.appendChild(day);
    }
  });
  
  // Download Calendar as HTML
  document.getElementById("download-calendar").addEventListener("click", () => {
    const htmlContent = document.getElementById("calendar-container").outerHTML;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "advent-calendar.html";
    a.click();
  });
  
  // Volcanic GPT AI Toggle
  const chatBubble = document.getElementById("chat-bubble");
  const chatBox = document.getElementById("chat-box");
  
  chatBubble.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  });
  
  // Feedback Submission
  document.getElementById("feedback-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
  });
  
