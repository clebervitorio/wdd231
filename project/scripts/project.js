document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const mainContent = document.getElementById('main-content');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('open');
        mainContent.style.marginTop = navLinks.classList.contains('show') ? '40%' : '0';
    });

    // Update the last modified date
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
});

// Adjust main content margin when resizing to larger screens
window.addEventListener('resize', () => {
    const navLinks = document.getElementById('nav-links');
    const mainContent = document.getElementById('main-content');
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        mainContent.style.marginTop = '0';
    }
});