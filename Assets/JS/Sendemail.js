
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_qyh60kq', 'template_nwge6gk', this)
    .then(() => {
      document.getElementById('status').textContent = "✅ Message sent successfully!";
      this.reset();
    }, (error) => {
      document.getElementById('status').textContent = "❌ Failed to send message. Please try again.";
      console.error('EmailJS Error:', error);
    });
});

