// Contact Form Handler (separate from faq.js for cleaner organization)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        const formMessage = document.getElementById('formMessage');

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            formMessage.textContent = 'Please fill in all required fields.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
            formMessage.style.display = 'block';
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
            formMessage.style.display = 'block';
            return;
        }

        try {
            // Log form data (in production, send to backend)
            console.log('Contact Form Submitted:', formData);

            // Show success message
            formMessage.textContent = '✓ Message sent successfully! We will respond within 24 business hours.';
            formMessage.classList.add('success');
            formMessage.classList.remove('error');
            formMessage.style.display = 'block';

            // Reset form
            contactForm.reset();

            // Hide message after 6 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.classList.remove('success', 'error');
            }, 6000);
        } catch (error) {
            console.error('Error:', error);
            formMessage.textContent = '✗ Error sending message. Please try again or email us directly.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
            formMessage.style.display = 'block';
        }
    });
}
