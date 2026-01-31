// ============================================
// Navigation scroll effect
// ============================================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ============================================
// Mobile navigation toggle
// ============================================
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ============================================
// Fade-in on scroll (Intersection Observer)
// ============================================
const fadeElements = document.querySelectorAll('.section, .work-card, .blog-card, .timeline-item');

const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// ============================================
// Active nav link highlighting
// ============================================
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                link.style.color = 'var(--color-text)';
            } else {
                link.style.color = '';
            }
        }
    });
};

window.addEventListener('scroll', highlightNav);
