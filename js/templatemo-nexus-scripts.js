// JavaScript Document - Optimized Version

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
    const mobileMenuCta = document.querySelector('.mobile-menu-cta');
    const mobileMenuCtaButton = document.querySelector('.mobile-menu-cta a');
    const mobileMenuLogo = document.querySelector('.mobile-menu-logo');

    // Check if essential elements exist
    if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay || !mobileMenuClose) {
        return;
    }

    function openMobileMenu() {
        mobileMenuBtn.classList.add('active');
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset and trigger animations for links
        mobileMenuLinks.forEach((link, index) => {
            if (link) {
                link.style.animation = 'none';
                link.style.opacity = '0';
                link.style.transform = 'translateX(20px)';
                
                // Apply animation with delay
                setTimeout(() => {
                    if (link) {
                        link.style.animation = `slideInLeft 0.4s ease forwards`;
                    }
                }, 250 + (index * 100));
            }
        });
        
        // Animate CTA button
        if (mobileMenuCta) {
            mobileMenuCta.style.animation = 'none';
            mobileMenuCta.style.opacity = '0';
            mobileMenuCta.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                if (mobileMenuCta) {
                    mobileMenuCta.style.animation = 'slideInUp 0.4s ease forwards';
                }
            }, 100);
        }
    }

    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    mobileMenuClose.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenu();
    });
    
    mobileMenuOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMobileMenu();
    });

    mobileMenuLinks.forEach(link => {
        if (link) {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        }
    });

    if (mobileMenuCtaButton) {
        mobileMenuCtaButton.addEventListener('click', (e) => {
            if (mobileMenuCtaButton.getAttribute('href') === '#') {
                e.preventDefault();
            }
            closeMobileMenu();
        });
    }

    if (mobileMenuLogo) {
        mobileMenuLogo.addEventListener('click', () => {
            closeMobileMenu();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    if (mobileMenu) {
        mobileMenu.addEventListener('touchmove', (e) => {
            e.stopPropagation();
        });
    }
}

// Initialize mobile menu when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMobileMenu);
} else {
    initializeMobileMenu();
}

// Generate Matrix Rain Effect (Performance optimized)
function generateMatrixRain() {
    const matrixRain = document.getElementById('matrixRain');
    if (!matrixRain) return; // Safety check
    
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    // Clear existing columns
    matrixRain.innerHTML = '';
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDuration = `${Math.random() * 5 + 10}s`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        
        // Generate random characters for the column
        let text = '';
        const charCount = Math.floor(Math.random() * 20 + 10);
        for (let j = 0; j < charCount; j++) {
            text += characters[Math.floor(Math.random() * characters.length)] + ' ';
        }
        column.textContent = text;
        
        matrixRain.appendChild(column);
    }
}

// Generate Floating Particles (Performance optimized)
function generateParticles() {
    const particlesContainer = document.getElementById('particlesContainer');
    if (!particlesContainer) return; // Safety check
    
    const particleCount = window.innerWidth > 768 ? 50 : 25; // Fewer particles on mobile
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 20}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Generate Data Streams (Performance optimized)
function generateDataStreams() {
    const dataStreams = document.getElementById('dataStreams');
    if (!dataStreams) return; // Safety check
    
    const streamCount = window.innerWidth > 768 ? 10 : 5; // Fewer streams on mobile
    
    // Clear existing streams
    dataStreams.innerHTML = '';
    
    for (let i = 0; i < streamCount; i++) {
        const stream = document.createElement('div');
        stream.className = 'data-stream';
        stream.style.top = `${Math.random() * 100}%`;
        stream.style.left = `-300px`;
        stream.style.animationDelay = `${Math.random() * 5}s`;
        stream.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        
        dataStreams.appendChild(stream);
    }
}

// Initialize background effects with error handling
function initializeBackgroundEffects() {
    try {
        generateMatrixRain();
        generateParticles();
        generateDataStreams();
    } catch (error) {
        console.warn('Background effects initialization failed:', error);
    }
}

// Initialize effects when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBackgroundEffects);
} else {
    initializeBackgroundEffects();
}

// Debounced resize handler
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        try {
            generateMatrixRain();
            generateParticles();
            generateDataStreams();
        } catch (error) {
            console.warn('Resize effects update failed:', error);
        }
    }, 300); // Increased debounce time
});

// Optimized mouse interaction effects
let mouseTimer;
let rafId;

function updateMouseEffects(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Move orbs slightly based on mouse position
    const orbs = document.querySelectorAll('.orb');
    orbs.forEach((orb, index) => {
        if (orb) {
            const speed = (index + 1) * 0.02;
            const x = (mouseX - window.innerWidth / 2) * speed;
            const y = (mouseY - window.innerHeight / 2) * speed;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
    
    // Make nearby particles glow brighter (desktop only)
    if (window.innerWidth > 768) {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            if (particle) {
                const rect = particle.getBoundingClientRect();
                const particleX = rect.left + rect.width / 2;
                const particleY = rect.top + rect.height / 2;
                const distance = Math.sqrt(Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2));
                
                if (distance < 150) {
                    const brightness = 1 - (distance / 150);
                    particle.style.boxShadow = `0 0 ${20 + brightness * 30}px rgba(0, 255, 255, ${0.5 + brightness * 0.5})`;
                    particle.style.transform = `scale(${1 + brightness * 0.5})`;
                } else {
                    particle.style.boxShadow = '';
                    particle.style.transform = '';
                }
            }
        });
    }
}

// Throttled mouse move event
document.addEventListener('mousemove', (e) => {
    if (!mouseTimer) {
        mouseTimer = setTimeout(() => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => updateMouseEffects(e));
            mouseTimer = null;
        }, 16); // ~60fps
    }
});

// Cursor glow effect (desktop only)
let cursorGlow;
if (window.innerWidth > 768) {
    cursorGlow = document.createElement('div');
    cursorGlow.style.cssText = `
        position: fixed;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
        if (cursorGlow) {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
            cursorGlow.style.opacity = '1';
        }
    });

    document.addEventListener('mouseleave', () => {
        if (cursorGlow) {
            cursorGlow.style.opacity = '0';
        }
    });
}

// Smooth scrolling with error handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1) {
            e.preventDefault();
            try {
                if (href === '#top') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            } catch (error) {
                // Fallback for browsers without smooth scrolling
                window.location.hash = href;
            }
        }
    });
});

// Optimized navbar scroll effect
let scrollTimer;
window.addEventListener('scroll', () => {
    if (!scrollTimer) {
        scrollTimer = setTimeout(() => {
            const nav = document.querySelector('nav');
            if (nav) {
                if (window.scrollY > 100) {
                    nav.style.background = 'rgba(15, 15, 35, 0.95)';
                    nav.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.2)';
                } else {
                    nav.style.background = 'rgba(15, 15, 35, 0.9)';
                    nav.style.boxShadow = 'none';
                }
            }
            scrollTimer = null;
        }, 10);
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements when they exist
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
});

// Button hover effects with error handling
function initializeButtonEffects() {
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        if (button) {
            button.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.6)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        }
    });
}

// Stats counter animation with error handling
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        if (stat) {
            const target = parseInt(stat.textContent.replace(/[^\d]/g, '')) || 0;
            if (target > 0) {
                let count = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        clearInterval(timer);
                        count = target;
                    }
                    const suffix = stat.textContent.replace(/[\d]/g, '');
                    stat.textContent = Math.floor(count) + suffix;
                }, 20);
            }
        }
    });
};

// Stats animation observer
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Feature card hover effects
function initializeFeatureCardEffects() {
    document.querySelectorAll('.feature-card').forEach(card => {
        if (card) {
            card.addEventListener('mouseenter', function() {
                this.style.animation = 'glitch1 0.3s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 300);
            });
        }
    });
}

// Optimized random cyber text effects
const cyberTexts = ['CONNECTING...', 'NEURAL LINK ESTABLISHED', 'QUANTUM SYNC ACTIVE', 'REALITY MATRIX LOADED'];
let cyberTextInterval;

function startCyberTextEffects() {
    // Clear existing interval if any
    if (cyberTextInterval) {
        clearInterval(cyberTextInterval);
    }
    
    cyberTextInterval = setInterval(() => {
        if (window.innerWidth > 768) { // Only on desktop
            try {
                const randomText = cyberTexts[Math.floor(Math.random() * cyberTexts.length)];
                const tempElement = document.createElement('div');
                tempElement.textContent = randomText;
                tempElement.style.cssText = `
                    position: fixed;
                    top: ${Math.random() * 80 + 10}vh;
                    left: ${Math.random() * 80 + 10}vw;
                    color: var(--primary-cyan);
                    font-size: 0.8rem;
                    font-weight: 700;
                    z-index: 1000;
                    opacity: 0.7;
                    pointer-events: none;
                    animation: fadeOut 3s ease-out forwards;
                    text-shadow: 0 0 10px var(--primary-cyan);
                `;
                document.body.appendChild(tempElement);
                
                setTimeout(() => {
                    if (document.body.contains(tempElement)) {
                        document.body.removeChild(tempElement);
                    }
                }, 3000);
            } catch (error) {
                console.warn('Cyber text effect failed:', error);
            }
        }
    }, 8000); // Increased interval for better performance
}

// Add fadeOut animation styles
function addAnimationStyles() {
    if (!document.getElementById('custom-animations')) {
        const style = document.createElement('style');
        style.id = 'custom-animations';
        style.textContent = `
            @keyframes fadeOut {
                0% { opacity: 0.7; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-50px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Contact form submission with better error handling
function initializeContactForm() {
    const submitButton = document.querySelector('.btn-submit');
    if (submitButton) {
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (name && email && message && name.value && email.value && message.value) {
                // Email validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email.value)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                // Simulate form submission
                this.textContent = 'TRANSMITTING...';
                this.disabled = true;
                this.style.background = 'linear-gradient(135deg, var(--primary-cyan), var(--primary-pink))';
                
                setTimeout(() => {
                    this.textContent = 'TRANSMISSION COMPLETE';
                    this.style.background = 'var(--primary-cyan)';
                    
                    // Clear form
                    name.value = '';
                    email.value = '';
                    message.value = '';
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        this.textContent = 'Send Message';
                        this.style.background = '';
                        this.disabled = false;
                    }, 3000);
                }, 2000);
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components with error handling
    try {
        initializeButtonEffects();
        initializeFeatureCardEffects();
        initializeContactForm();
        addAnimationStyles();
        startCyberTextEffects();
        
        // Observe stats section if it exists
        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }
    } catch (error) {
        console.warn('Component initialization failed:', error);
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (cyberTextInterval) {
        clearInterval(cyberTextInterval);
    }
    if (rafId) {
        cancelAnimationFrame(rafId);
    }
});