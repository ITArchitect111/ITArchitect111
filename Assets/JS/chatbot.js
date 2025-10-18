

const responses = {
  "help": "help, ?, about, service, skills, projects",
  "?": "help, ?, about, service, skills, projects",
  "about": "I am IT Ako pero Bobo a BS in Information Systems graduate of Isabela State University Main Campus, i am from Jones, Isabela and i am aspiring IT proffesional by upskilling in IT Networking, Database, System Design, and Web Development.",
  "service": "I offer technical assistance to clients who needs helps from IT Networks, System Design, Database, Web projects, and Console progamming activities and assignments.",
  "skills": "Designing, Web Development, and Console Programming",
  "projects": "You can view my projects on my GitHub: github.com/ITArchitect111"
};

function toggleChatbot() {
  const popup = document.getElementById("chatbot-popup");
  const chatIcon = document.getElementById("chat-icon");
  
  if (popup.style.display === "block") {
    popup.style.display = "none";
    chatIcon.style.display = "block"; 
  } else {
    popup.style.display = "block";
    chatIcon.style.display = "none"; 
  }
}

function processInput() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const chatbox = document.getElementById("chatbox");

  document.getElementById("userInput").value = "";

  chatbox.innerHTML += `<div class="user">🧑 You: ${input}</div>`;


  const reply = responses[input] || "Contact the owner for further information.";
  chatbox.innerHTML += `<div class="bot">🤖 Bot: ${reply}</div>`;

  chatbox.scrollTop = chatbox.scrollHeight;
}

function Clear() {
  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML = ""; 
}
