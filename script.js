/*
    Handles:
    - Smooth scrolling
    - Contact form simulated submit
    - Booking popup for 60-min sessions only
*/

function loadContent(page, section) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById(section).innerHTML = data;
            
            // Set active navigation item
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        });
}

/** document.addEventListener('DOMContentLoaded', loadContent('header.html','header-placeholder')) ;
document.addEventListener('DOMContentLoaded', loadContent('footer.html','footer-placeholder')) ;
document.addEventListener('DOMContentLoaded', loadContent('specialties.html','specialties-placeholder')) ;
document.addEventListener('DOMContentLoaded', loadContent('methods.html','methods-placeholder')) ;
document.addEventListener('DOMContentLoaded', loadContent('more-than-tutoring.html','tutoring-placeholder')) ;
document.addEventListener('DOMContentLoaded', loadContent('what-makes-us-different.html','different-placeholder')) ;
document.addEventListener('DOMContentLoaded', loadContent('outcomes.html','outcomes-placeholder')) ;
document.addEventListener('DOMContentLoaded', loadContent('packages.html','packages-placeholder')) ;
document.addEventListener('DOMContentLoaded', loadContent('contact.html','contact-placeholder')) ;
// Note: Booking form is embedded directly in index.html
 */

document.addEventListener('DOMContentLoaded', () => {
    loadContent('header.html', 'header-placeholder');
    loadContent('footer.html', 'footer-placeholder');
    loadContent('specialties.html', 'specialties-placeholder');
    loadContent('methods.html', 'methods-placeholder');
    loadContent('more-than-tutoring.html', 'tutoring-placeholder');
    loadContent('what-makes-us-different.html', 'different-placeholder');
    loadContent('outcomes.html', 'outcomes-placeholder');
    loadContent('packages.html', 'packages-placeholder');
    loadContent('contact.html', 'contact-placeholder');
    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Contact Form ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Contact Form submitted:', { name, email, message });

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

            messageBox.querySelector('.message-close-btn').addEventListener('click', () => {
                messageBox.remove();
            });

            contactForm.reset();
        });
    }

    // --- Remove other package buttons (30-min + Boost) ---
    const button30 = document.getElementById('30-min-Button');
    const boostBtn = document.getElementById('boost-Button');
    if (button30) button30.style.display = 'none';
    if (boostBtn) boostBtn.style.display = 'none';

    // --- 60-min button opens popup ---
    const button60 = document.getElementById('60-min-Button');
    const bookingForm = document.getElementById('bookingForm');
    const closeBooking = document.getElementById('closeBooking');

    if (button60 && bookingForm && closeBooking) {
        button60.addEventListener('click', () => {
            bookingForm.style.display = 'flex'; // show popup
        });

        closeBooking.addEventListener('click', () => {
            bookingForm.style.display = 'none'; // hide popup
        });
    }

    // --- Booking form submission ---
    const sessionForm = document.getElementById('sessionForm');
    if (sessionForm) {
        sessionForm.addEventListener('submit', function () {
            setTimeout(() => {
                alert("Thank you! Your 60-minute session request was sent. Please check your email for next steps.");
                bookingForm.style.display = 'none';
                sessionForm.reset();
            }, 500);
        });
    }
});

