const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const suggestions = document.querySelectorAll('.suggestion');

const SYSTEM_PROMPT = `You are Sanchay, a friendly assistant embedded in a digital archive website about traditional Indian food preservation techniques (drying, fermentation, pickling, sun-drying). Answer clearly and concisely (3-5 sentences max). If asked something unrelated to food, preservation, or Indian culinary traditions, politely redirect the user back to the topic.`;

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return msg;
}

async function sendToGroq(userText) {
  const loadingMsg = addMessage("Thinking...", "bot");
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userText }
        ]
      })
    });
    const data = await response.json();
    if (data.error) {
      loadingMsg.textContent = "Error: " + data.error.message;
      console.error(data.error);
      return;
    }
    const reply = data.choices?.[0]?.message?.content?.trim() || "I couldn't generate a response — please try again.";
    loadingMsg.textContent = reply;
  } catch (err) {
    loadingMsg.textContent = "Network error — please check your internet connection and try again.";
    console.error(err);
  }
}

function handleSend() {
  const text = chatInput.value.trim();
  if (!text) return;
  addMessage(text, "user");
  chatInput.value = "";
  sendToGroq(text);
}

sendBtn.addEventListener('click', handleSend);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSend();
});

suggestions.forEach(btn => {
  btn.addEventListener('click', () => {
    chatInput.value = btn.textContent;
    handleSend();
  });
});