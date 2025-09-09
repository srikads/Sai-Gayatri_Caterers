// Modern smooth scrolling with easing
function smoothScrollTo(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop - 120; // Account for fixed header
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutQuart(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;
    }
    
    requestAnimationFrame(animation);
}

// Enhanced navigation with smooth scrolling
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            smoothScrollTo(href);
            
            // Add active state animation
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Ensure menu items are always visible - no animation delays
            if (entry.target.classList.contains('menu-section')) {
                const menuItems = entry.target.querySelectorAll('.menu-list li');
                menuItems.forEach((item) => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                    item.style.display = 'block';
                    item.style.visibility = 'visible';
                });
            }
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const menuSections = document.querySelectorAll('.menu-section');
    const menuItems = document.querySelectorAll('.menu-list li');
    
    // Initialize menu language display first
    initializeMenuLanguage();
    
    // Initialize menu tiles
    initializeMenuTiles();
    
    // Set initial states for animations (but keep menu section visible)
    sections.forEach(section => {
        if (section.id !== 'home' && section.id !== 'menu') {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
    
    // Ensure menu section is always visible
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.style.opacity = '1';
        menuSection.style.transform = 'translateY(0)';
        menuSection.style.visibility = 'visible';
        menuSection.style.display = 'block';
    }
    
    // Skip menu item animation for now to ensure visibility
    // menuItems.forEach(item => {
    //     item.style.opacity = '1';
    //     item.style.transform = 'translateX(0)';
    // });
    
    // Start observing
    sections.forEach(section => observer.observe(section));
    menuSections.forEach(section => observer.observe(section));
    
    // Simpler safety check for menu visibility
    setTimeout(() => {
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.style.opacity = '1';
            menuSection.style.visibility = 'visible';
            menuSection.style.display = 'block';
            menuSection.style.transform = 'translateY(0)';
            console.log('Menu section visibility enforced');
        }
        
        // Ensure all menu items are visible
        const menuItems = document.querySelectorAll('#menu .menu-list li');
        menuItems.forEach(item => {
            item.style.opacity = '1';
            item.style.visibility = 'visible';
            item.style.display = 'block';
        });
        console.log('Menu items visibility enforced:', menuItems.length, 'items');
    }, 500);
});

// Initialize menu language display
function initializeMenuLanguage() {
    const enEls = document.querySelectorAll('.menu-item-en, .menu-folder-en');
    const teEls = document.querySelectorAll('.menu-item-te, .menu-folder-te');
    
    console.log('Initializing menu language. English elements found:', enEls.length);
    console.log('Telugu elements found:', teEls.length);
    
    // Ensure English is visible by default
    enEls.forEach(el => {
        el.style.display = 'inline';
        el.style.opacity = '1';
        el.style.visibility = 'visible';
    });
    
    // Hide Telugu initially
    teEls.forEach(el => {
        el.style.display = 'none';
        el.style.opacity = '0';
        el.style.visibility = 'hidden';
    });
    
    // Ensure menu items are visible immediately
    const menuItems = document.querySelectorAll('.menu-list li');
    console.log('Menu items found:', menuItems.length);
    menuItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.visibility = 'visible';
        item.style.transform = 'translateX(0)';
    });
    
    // Also make sure all menu sections are visible
    const allMenuSections = document.querySelectorAll('.menu-section');
    console.log('Menu sections found:', allMenuSections.length);
    allMenuSections.forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
        section.style.display = 'block';
    });
}

// Language switcher with enhanced animations
const langEnBtn = document.getElementById('lang-en');
const langTeBtn = document.getElementById('lang-te');

function setMenuLang(lang) {
    const enEls = document.querySelectorAll('.menu-item-en, .menu-folder-en');
    const teEls = document.querySelectorAll('.menu-item-te, .menu-folder-te');
    
    // Add transition classes
    [...enEls, ...teEls].forEach(el => {
        el.style.transition = 'all 0.3s ease-in-out';
    });
    
    if (lang === 'en') {
        enEls.forEach((el, index) => {
            setTimeout(() => {
                el.style.display = '';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 20);
        });
        teEls.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                el.style.display = 'none';
            }, 300);
        });
        langEnBtn.classList.add('active');
        langTeBtn.classList.remove('active');
    } else {
        teEls.forEach((el, index) => {
            setTimeout(() => {
                el.style.display = '';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 20);
        });
        enEls.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                el.style.display = 'none';
            }, 300);
        });
        langEnBtn.classList.remove('active');
        langTeBtn.classList.add('active');
    }
}

if (langEnBtn && langTeBtn) {
    langEnBtn.addEventListener('click', () => {
        setMenuLang('en');
        // Button press animation
        langEnBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            langEnBtn.style.transform = '';
        }, 150);
    });
    
    langTeBtn.addEventListener('click', () => {
        setMenuLang('te');
        // Button press animation
        langTeBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            langTeBtn.style.transform = '';
        }, 150);
    });
}

// Initial language is set by initializeMenuLanguage function

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    // Add glassmorphism effect when scrolling
    if (scrollTop > 50) {
        header.style.background = 'rgba(255, 107, 53, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #FF6B35 0%, #D32F2F 100%)';
        header.style.backdropFilter = 'blur(10px)';
    }
    
    lastScrollTop = scrollTop;
});

// Enhanced gallery interactions
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Pause other items' animations
        galleryItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.opacity = '0.7';
                otherItem.style.transform = 'scale(0.95)';
            }
        });
    });
    
    item.addEventListener('mouseleave', () => {
        // Restore all items
        galleryItems.forEach(otherItem => {
            otherItem.style.opacity = '1';
            otherItem.style.transform = 'scale(1)';
        });
    });
    
    // Add click ripple effect
    item.addEventListener('click', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.transition = 'all 0.6s ease-out';
        
        item.appendChild(ripple);
        
        setTimeout(() => {
            ripple.style.width = '200px';
            ripple.style.height = '200px';
            ripple.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Menu item hover sound effect simulation
const menuItems = document.querySelectorAll('.menu-list li');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Create a subtle vibration effect
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('#home::before');
    const rate = scrolled * -0.5;
    
    if (parallaxElements.length > 0) {
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Preload images for better performance
const imageUrls = [
    'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80'
];

imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Add Easter egg: Konami code for special animation
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Special animation
        document.body.style.animation = 'rainbow 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        konamiCode = [];
    }
});

// Menu tile expand/collapse functionality
function initializeMenuTiles() {
    const menuTiles = document.querySelectorAll('.menu-tile');
    
    menuTiles.forEach(tile => {
        const toggleBtn = tile.querySelector('.menu-toggle');
        const content = tile.querySelector('.menu-tile-content');
        
        if (!toggleBtn || !content) return;
        
        // Set initial state - collapsed
        content.style.maxHeight = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        content.style.opacity = '0';
        toggleBtn.textContent = '+';
        
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const isExpanded = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
            
            if (isExpanded) {
                // Collapse
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                toggleBtn.textContent = '+';
                toggleBtn.style.transform = 'rotate(0deg)';
                tile.classList.remove('expanded');
            } else {
                // Expand
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                toggleBtn.textContent = '−';
                toggleBtn.style.transform = 'rotate(180deg)';
                tile.classList.add('expanded');
            }
            
            // Button press animation
            toggleBtn.style.transform += ' scale(0.9)';
            setTimeout(() => {
                if (toggleBtn.textContent === '+') {
                    toggleBtn.style.transform = 'rotate(0deg)';
                } else {
                    toggleBtn.style.transform = 'rotate(180deg)';
                }
            }, 150);
        });
        
        // Add hover effects
        toggleBtn.addEventListener('mouseenter', () => {
            toggleBtn.style.backgroundColor = 'rgba(255, 107, 53, 0.2)';
        });
        
        toggleBtn.addEventListener('mouseleave', () => {
            toggleBtn.style.backgroundColor = '';
        });
    });
}


// Add rainbow animation for Easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);