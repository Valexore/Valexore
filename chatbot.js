// Chatbot Logic
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.querySelector('.chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.querySelector('.chatbot-messages');
const chatbotQuestions = document.getElementById('chatbot-questions');
const chatbotSend = document.getElementById('chatbot-send');

// Toggle chatbot window
chatbotToggle.addEventListener('click', () => {
  chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
});

// Close chatbot window
chatbotClose.addEventListener('click', () => {
  chatbotWindow.style.display = 'none';
});

// Chatbot responses
const chatbotResponses = {
  "book-ticket": "You can book a ticket by visiting the 'Seat Booking' section.",
  "fare-details": "Fare details are available in the 'Fare' section.",
  "traffic-update": "Traffic updates are available in the 'Traffic Conditions' section.",
  "weather-update": "Weather updates are available in the 'Weather Update' section.",
  "contact-support": "You can contact support by calling +1 (123) 456-7890 or emailing support@terminal.com."
};

// Function to add a message to the chat
function addMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', `${sender}-message`);

  const messageContent = document.createElement('div');
  messageContent.classList.add('message-content');
  messageContent.innerHTML = `<p>${message}</p>`;

  messageElement.appendChild(messageContent);
  chatbotMessages.appendChild(messageElement);

  // Scroll to the latest message
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to show loading animation
function showLoading() {
  const loadingElement = document.createElement('div');
  loadingElement.classList.add('message', 'bot-message', 'loading');

  const loadingContent = document.createElement('div');
  loadingContent.classList.add('message-content');
  loadingContent.innerHTML = `
    <div class="loading">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
    </div>
  `;

  loadingElement.appendChild(loadingContent);
  chatbotMessages.appendChild(loadingElement);

  // Scroll to the latest message
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to handle user input
function handleUserInput() {
  const selectedQuestion = chatbotQuestions.value;
  if (selectedQuestion) {
    const userMessage = chatbotQuestions.options[chatbotQuestions.selectedIndex].text;
    addMessage(userMessage, 'user'); // Display user's selected question

    // Show loading animation
    showLoading();

    // Simulate bot typing delay
    setTimeout(() => {
      // Remove loading animation
      const loadingElement = document.querySelector('.loading');
      if (loadingElement) {
        loadingElement.remove();
      }

      // Find the bot's response
      const botResponse = chatbotResponses[selectedQuestion] || "I'm sorry, I didn't understand that. Can you please rephrase?";
      addMessage(botResponse, 'bot');
    }, 1500); // Simulate a 1.5-second delay
  }
}

// Send message on button click
chatbotSend.addEventListener('click', handleUserInput);

// Send message on Enter key (optional)
chatbotQuestions.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleUserInput();
  }
});


// Function to add a message to the chat
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
  
    // Add bot avatar for bot messages
    if (sender === 'bot') {
      const avatarElement = document.createElement('div');
      avatarElement.classList.add('avatar');
      avatarElement.innerHTML = `<img src="img/R.png" alt="Bot Avatar">`;
      messageElement.appendChild(avatarElement);
    }
  
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerHTML = `<p>${message}</p>`;
  
    messageElement.appendChild(messageContent);
    chatbotMessages.appendChild(messageElement);
  
    // Scroll to the latest message
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // Function to show loading animation
  function showLoading() {
    const loadingElement = document.createElement('div');
    loadingElement.classList.add('message', 'bot-message', 'loading');
  
    const avatarElement = document.createElement('div');
    avatarElement.classList.add('avatar');
    avatarElement.innerHTML = `<img src="img/R.png" alt="Bot Avatar">`;
    loadingElement.appendChild(avatarElement);
  
    const loadingContent = document.createElement('div');
    loadingContent.classList.add('message-content');
    loadingContent.innerHTML = `
      <div class="loading">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
    `;
  
    loadingElement.appendChild(loadingContent);
    chatbotMessages.appendChild(loadingElement);
  
    // Scroll to the latest message
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }