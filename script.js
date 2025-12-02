/**
 * ========================================
 * Arkapravo Dey's Personal Website Scripts
 * ========================================
 */

// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Only prevent default if the link starts with '#' (i.e., it's a section link)
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            
            // Check if the target section exists before attempting to scroll
            if (target) {
                // Scroll the target element into view smoothly
                target.scrollIntoView({ behavior: "smooth" });

                // Optional: Focus the target section for accessibility after scrolling
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        }
    });
});

// 2. Scroll-Triggered Section Fade-In Animation (Modern Approach using Intersection Observer)

// Select all elements with the 'fade-in' class (applied to sections in index.html)
const sectionsToAnimate = document.querySelectorAll('.fade-in');

const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
};

/**
 * Defines the behavior when an element intersects the viewport.
 * @param {IntersectionObserverEntry[]} entries - Array of entries observed.
 * @param {IntersectionObserver} observer - The observer instance.
 */
function intersectionCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When the section enters the viewport, add the 'visible' class
            entry.target.classList.add('visible');
            // Stop observing the section once it's visible
            observer.unobserve(entry.target);
        }
    });
}

// Create the Intersection Observer instance
const observer = new IntersectionObserver(intersectionCallback, observerOptions);

// Attach the observer to each section
sectionsToAnimate.forEach(section => {
    // Initially hide the elements until they are observed
    section.style.opacity = '0'; 
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    // Start observing
    observer.observe(section);
});

// Add CSS for the visible state (must also be added to style.css)
/* .fade-in.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
*/

// 3. Dark Mode Toggle (Placeholder/Future Feature)
// To implement this fully, you would need to add CSS variables and a button in your HTML.
/*
document.getElementById('dark-mode-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
*/