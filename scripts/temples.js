document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    const modifiedSpan = document.getElementById('last-modified');
    
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    modifiedSpan.textContent = lastModified;

    // Hamburger menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('visible');
        navToggle.textContent = navMenu.classList.contains('visible') ? 'X' : '☰';
    });
});
