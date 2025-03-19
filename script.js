document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

document.querySelector('.chatbot-icon').addEventListener('click', function() {
    const chatbotPopup = document.querySelector('.chatbot-popup');
    if (chatbotPopup.style.display === 'none' || !chatbotPopup.style.display) {
        chatbotPopup.style.display = 'block';
    } else {
        chatbotPopup.style.display = 'none';
    }
});