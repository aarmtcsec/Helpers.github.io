/*
            This script handles smooth scrolling for internal links
            and a basic, non-functional contact form submission.
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for all nav links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior.

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

    // --- Contact Form Handling (Simulated) ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Stop the form from submitting normally

            // In a real application, you would send this data to a server.
            // For this example, we'll just log to the console.

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // A simple message box instead of alert()
            const messageBox = document.createElement('div');
            messageBox.className = 'message-box';
            messageBox.innerHTML = `
                        <div class="message-content">
                            <h3>Thank You!</h3>
                            <p>We have received your message and will get back to you within 24 hours.</p>
                            <button class="message-close-btn">OK</button>
                        </div>
                    `;
            document.body.appendChild(messageBox);

            const closeBtn = messageBox.querySelector('.message-close-btn');
            closeBtn.addEventListener('click', () => {
                messageBox.remove();
            });

            // Clear the form fields after submission
            contactForm.reset();
        });
    }
});

document.getElementById('30-min-Button').onclick = function() {
    window.open("https://calendar.app.google/Ux2RoK5HLG6hE31bA", "_blank");
}



