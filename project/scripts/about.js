document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile navigation menu
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("open");
    });

    // Update last modified date in footer
    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = `Last Updated: ${document.lastModified}`;
    }

    // Lazy load images
    const images = document.querySelectorAll("img");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    }, { rootMargin: "50px" });

    images.forEach(img => {
        if (img.dataset.src) {
            observer.observe(img);
        }
    });
});
