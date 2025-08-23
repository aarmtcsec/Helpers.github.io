/*
    script.js

    This script handles smooth scrolling for internal links
    and a basic, non-functional contact form submission.
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
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the form from submitting normally

            // In a real application, you would send this data to a server.
            // For this example, we'll just show a message.

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Thank you for your message! We will get back to you within 24 hours.');

            // Clear the form fields after submission
            contactForm.reset();
        });
    }

});