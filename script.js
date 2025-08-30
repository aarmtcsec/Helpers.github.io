/*
    script.js
    Handles smooth scrolling and booking form submission
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for all nav links ---
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

    // --- Remove 30-min button if it exists ---
    const button30 = document.getElementById('30-min-Button');
    if (button30) {
        button30.remove();
    }

    // --- Booking Form Handling ---
    const bookingForm = document.querySelector('form'); // your form element
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault(); 

            // Collect form values
            const name = document.getElementById('name')?.value || "";
            const email = document.getElementById('email')?.value || "";
            const session = document.getElementById('session')?.value || "";
            const date = document.getElementById('date')?.value || "";
            const time = document.getElementById('time')?.value || "";
            const message = document.getElementById('message')?.value || "";

            console.log('Booking Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Session:', session);
            console.log('Date:', date);
            console.log('Time:', time);
            console.log('Notes:', message);

            // Confirmation message box
            const messageBox = document.createElement('div');
            messageBox.className = 'message-box';
            messageBox.innerHTML = `
                <div class="message-content">
                    <h3>Thank You!</h3>
                    <p>Your booking for <b>${session}</b> on <b>${date}</b> at <b>${time}</b> has been received.</p>
                    <p>A confirmation email will be sent to <b>${email}</b> with a follow-up question shortly.</p>
                    <button class="message-close-btn">OK</button>
                </div>
            `;
            document.body.appendChild(messageBox);

            // Close button
            const closeBtn = messageBox.querySelector('.message-close-btn');
            closeBtn.addEventListener('click', () => {
                messageBox.remove();
            });

            // Reset form
            bookingForm.reset();
        });
    }
});
