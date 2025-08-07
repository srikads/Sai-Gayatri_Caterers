// Add smooth scrolling for navigation
const links = document.querySelectorAll('nav a');
for (const link of links) {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Handle inquiry form submission
const inquiryForm = document.querySelector('.inquiry-form');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('form-status').textContent = 'Thank you for your inquiry! We will get back to you soon.';
        inquiryForm.reset();
    });
}
