document.getElementById("contactForm").addEventListener("submit", async (e) => {
      e.preventDefault();

      const form = e.target;
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      try {
        const res = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await res.json();
        alert(result.message);
      } catch (err) {
        alert("❌ Error sending message. Try again later.");
        console.error(err);
      }

      form.reset();
      });
