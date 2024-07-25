const sendButton = document.getElementById('send');
const inputField = document.getElementById('input');
const messagesDiv = document.getElementById('messages');

sendButton.addEventListener('click', async () => {
  const message = inputField.value;
  if (message.trim() === '') return;

  // Display user message
  messagesDiv.innerHTML += `<div>User: ${message}</div>`;
  inputField.value = '';

  // Call ChatGPT API
  try {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer sk-proj-w58okRerndnRYH932Fl7T3BlbkFJcPKR4VDpVD7ukqRpPUdq`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: message,
        max_tokens: 150
      })
    });
    const data = await response.json();
    const reply = data.choices[0].text.trim();

    // Display ChatGPT reply
    messagesDiv.innerHTML += `<div>ChatGPT: ${reply}</div>`;
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
  } catch (error) {
    console.error('Error:', error);
  }
});
