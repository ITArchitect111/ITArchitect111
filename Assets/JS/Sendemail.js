
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      document.getElementById('status').textContent = "✅ Message sent successfully!";
      this.reset();
    }, (error) => {
      document.getElementById('status').textContent = "❌ Failed to send message. Please try again.";
      console.error('EmailJS Error:', error);
    });
});

