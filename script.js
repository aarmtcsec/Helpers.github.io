document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Contact Form Handling (still simulated) ---
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      console.log('Contact Form:', name, email, message);

      const messageBox = document.createElement('div');
      messageBox.className = 'message-box';
      messageBox.innerHTML = `
        <div class="message-content">
          <h3>Thank You!</h3>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <button class="message-close-btn">OK</button>
        </div>`;
      document.body.appendChild(messageBox);
      messageBox.querySelector('.message-close-btn').addEventListener('click', () => {
        messageBox.remove();
      });
      contactForm.reset();
    });
  }

  // --- Remove 30-min button ---
  const btn30 = document.getElementById('30-min-Button');
  if (btn30) btn30.remove();

  // --- 60-min button opens popup ---
  const btn60 = document.getElementById('60-min-Button');
  const bookingForm = document.getElementById('bookingForm');
  const closeBooking = document.getElementById('closeBooking');

  if (btn60 && bookingForm) {
    btn60.addEventListener('click', () => {
      bookingForm.style.display = 'block';
    });
  }

  if (closeBooking) {
    closeBooking.addEventListener('click', () => {
      bookingForm.style.display = 'none';
    });
  }

  // --- Session Form (Formspree submission) ---
  const sessionForm = document.getElementById('sessionForm');
  if (sessionForm) {
    sessionForm.addEventListener('submit', function () {
      // Let Formspree handle sending to email.
      // Just show confirmation after submission.
      setTimeout(() => {
        alert("✅ Thank you! Your booking was sent. Check your email for a follow-up question.");
        bookingForm.style.display = 'none';
      }, 500);
    });
  }
});