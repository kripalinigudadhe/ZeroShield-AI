// ZeroShield AI UI Interactions
// Add interactive JS features as needed
// Example: Smooth scroll for navigation

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        // If internal link, prevent default and scroll
        if (this.getAttribute('href').includes('.html')) {
            // For SPA, implement AJAX navigation here
        }
    });
});
