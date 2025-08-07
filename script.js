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

// Language switcher for menu
const langEnBtn = document.getElementById('lang-en');
const langTeBtn = document.getElementById('lang-te');
function setMenuLang(lang) {
    const enEls = document.querySelectorAll('.menu-item-en, .menu-folder-en');
    const teEls = document.querySelectorAll('.menu-item-te, .menu-folder-te');
    if (lang === 'en') {
        enEls.forEach(el => el.style.display = '');
        teEls.forEach(el => el.style.display = 'none');
        langEnBtn.classList.add('active');
        langTeBtn.classList.remove('active');
    } else {
        enEls.forEach(el => el.style.display = 'none');
        teEls.forEach(el => el.style.display = '');
        langEnBtn.classList.remove('active');
        langTeBtn.classList.add('active');
    }
}
if (langEnBtn && langTeBtn) {
    langEnBtn.addEventListener('click', () => setMenuLang('en'));
    langTeBtn.addEventListener('click', () => setMenuLang('te'));
}
setMenuLang('en');
