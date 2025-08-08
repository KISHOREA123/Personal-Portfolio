// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    updateIcon();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
    updateIcon();
});

function updateIcon() {
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-img, .about-text, .skill-category, .project-card, .interest-card, .contact-info, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form Submission with Email Functionality
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // FormSubmit.co endpoint with your email
    const formAction = 'https://formsubmit.co/el/layago'; 
    
    // Create form data object
    const formData = new FormData(contactForm);
    
    // Add additional form parameters
    formData.append('_subject', 'New Message From Portfolio');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    formData.append('_next', 'https://yourportfolio.com/thank-you.html'); // Replace with your actual URL
    
    // Send the form data
    fetch(formAction, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully! I will get back to you soon.');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem sending your message. Please try again later or contact me directly at kishore469312@gmail.com');
    });
});

// Initialize skill bars animation
document.querySelectorAll('.skill-progress').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 500);

});
