// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Future features you can add:
// - Dark mode toggle
// - Section animations
// - Project filter buttons
// - Typewriter effect in header
