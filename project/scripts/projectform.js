const colleges = [
    { name: "Birthday" },
    { name: "Corporate party" },
    { name: "Wedding" }
];

window.onload = () => {
    populateCollegeDropdown();
    updateFooterContent();
    setupHamburgerMenu();
};

// Populate the college dropdown
function populateCollegeDropdown() {
    const collegeNameSelect = document.getElementById('CollegeName');

    colleges.forEach(college => {
        const option = document.createElement('option');
        option.value = college.name; // Fix: Use name instead of undefined id
        option.textContent = college.name;
        collegeNameSelect.appendChild(option);
    });
}

// Update the footer with the last modified date
function updateFooterContent() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}

// Setup hamburger menu toggle
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const mainContent = document.getElementById('main-content');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('open');
        mainContent.style.marginTop = navLinks.classList.contains('show') ? '40%' : '0';
    });

    // Adjust main content margin when resizing to larger screens
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            mainContent.style.marginTop = '0';
        }
    });
}
