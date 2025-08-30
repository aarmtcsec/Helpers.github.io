/*
    This script handles smooth scrolling for internal links,
    the contact form, and booking sessions.
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

    // --- Contact Form Handling (Simulated) ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Contact Form submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            showMessageBox("Thank You!", "We have received your message and will get back to you within 24 hours.");

            contactForm.reset();
        });
    }

    // --- Booking: 30-min button (disabled) ---
    const btn30 = document.getElementById('30-min-Button');
    if (btn30) btn30.remove(); // Removes the 30-min button completely

    // --- Booking: 60-min button ---
    const btn60 = document.getElementById('60-min-Button');
    if (btn60) {
        btn60.addEventListener('click', () => {
            const formModal = document.getElementById('bookingForm');
            if (formModal) formModal.style.display = "flex";
        });
    }

    // --- Booking form handling ---
    const bookingForm = document.getElementById('sessionForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const parentName = document.getElementById('parentName').value;
            const studentInfo = document.getElementById('studentInfo').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            console.log("Booking Submitted!");
            console.log("Parent:", parentName);
            console.log("Student Info:", studentInfo);
            console.log("Date:", date);
            console.log("Time:", time);

            showMessageBox("Booking Confirmed", "✅ Thank you! Your 60-min session request has been received. You will also get a follow-up question by email.");

            bookingForm.reset();
            closeBookingForm();
        });
    }

    // --- Helpers ---
    function showMessageBox(title, text) {
        const messageBox = document.createElement('div');
        messageBox.className = 'message-box';
        messageBox.innerHTML = `
            <div class="message-content">
                <h3>${title}</h3>
                <p>${text}</p>
                <button class="message-close-btn">OK</button>
            </div>
        `;
        document.body.appendChild(messageBox);

        messageBox.querySelector('.message-close-btn').addEventListener('click', () => {
            messageBox.remove();
        });
    }
});

function closeBookingForm() {
    document.getElementById("bookingForm").style.display = "none";
}

