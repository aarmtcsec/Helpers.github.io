/*
    script.js — full replacement
    - Smooth scrolling
    - Remove 30-min button
    - Wire 60-min & Boost buttons → prefill form + scroll
    - Handle form submit and show confirmation
*/

document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling for all nav links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const top = targetElement.getBoundingClientRect().top + window.pageYOffset - 10;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // --- Helper functions ---
    function preselectSession(value) {
        const select = document.getElementById('session');
        if (select) {
            select.value = value;
            select.dispatchEvent(new Event('change'));
        }
    }

    function scrollToContactAndFocusDate() {
        const contact = document.getElementById('contact');
        if (contact) {
            const top = contact.getBoundingClientRect().top + window.pageYOffset - 10;
            window.scrollTo({ top, behavior: 'smooth' });
        }
        const dateInput = document.getElementById('date');
        if (dateInput) {
            // small delay so focus happens after scroll starts
            setTimeout(() => dateInput.focus(), 350);
        }
    }

    function showMessageBox(html) {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.inset = '0';
        overlay.style.background = 'rgba(0,0,0,0.4)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';

        const box = document.createElement('div');
        box.style.maxWidth = '440px';
        box.style.width = '90%';
        box.style.background = '#fff';
        box.style.borderRadius = '12px';
        box.style.boxShadow = '0 10px 30px rgba(0,0,0,.2)';
        box.style.padding = '18px 20px';
        box.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Arial';
        box.style.lineHeight = '1.45';
        box.innerHTML = `
            <div>${html}</div>
            <div style="margin-top:14px; text-align:right;">
                <button id="msgCloseBtn" style="
                    padding:8px 14px; border-radius:9999px; border:1px solid #ddd;
                    background:#fff; cursor:pointer;">OK</button>
            </div>
        `;

        overlay.appendChild(box);
        document.body.appendChild(overlay);
        document.getElementById('msgCloseBtn').onclick = () => overlay.remove();
    }

    // --- Remove 30-min button if present
