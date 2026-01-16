// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Contact Form Submission
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

        // Simulate form submission
        try {
            // In a real implementation, you would send this to a backend
            console.log('Form Data:', formData);

            // Show success message
            formMessage.textContent = 'Message sent successfully! We will be in touch shortly.';
            formMessage.classList.add('success');
            formMessage.style.display = 'block';

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.classList.remove('success', 'error');
            }, 5000);
        } catch (error) {
            console.error('Error sending message:', error);
            formMessage.textContent = 'Error sending message. Please try again later.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
        }
    });
}
