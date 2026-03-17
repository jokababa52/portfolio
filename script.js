// ===========================
// Scroll Reveal Animation
// ===========================

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe timeline items
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('[data-reveal]');
    timelineItems.forEach(item => {
        revealOnScroll.observe(item);
    });
});

// ===========================
// Smooth Navigation
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Navigation Background on Scroll
// ===========================

let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 12px rgba(44, 36, 22, 0.08)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Staggered Timeline Animation
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
    });
});

// ===========================
// Enhanced Scroll Indicator
// ===========================

const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const opacity = Math.max(0, 1 - scrolled / 300);
        scrollIndicator.style.opacity = opacity;
    });
}

// ===========================
// Expertise Card Stagger Effect
// ===========================

const expertiseObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    const expertiseItems = document.querySelectorAll('.expertise-item');
    
    expertiseItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        expertiseObserver.observe(item);
    });
});

// ===========================
// Email Protection (Simple)
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Update this with Henry's actual email
    const emailLink = document.querySelector('a[href^="mailto:henry@shikishatoursandtravels.co.ke"]');
    if (emailLink) {
        // Replace with actual email: henry@yourdomain.com
        emailLink.setAttribute('href', 'mailto:henry@shikishatoursandtravels.co.ke');
    }
});
