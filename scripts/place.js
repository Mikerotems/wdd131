document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    const modifiedSpan = document.getElementById('last-modified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    modifiedSpan.textContent = lastModified;

// --- Lazy Loading for Images ---
// Select all images that have a 'data-src' attribute
const lazyImages = document.querySelectorAll('img[data-src]');

// Options for the Intersection Observer
const imgOptions = {
    threshold: 0.1, // Trigger when 10% of the image is visible
    rootMargin: "0px 0px 100px 0px" // Pre-load images 100px before they enter the viewport
};

// The function to call when an image intersects with the viewport
const preloadImage = (img) => {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }
    // Assign the data-src to the src, triggering the image load
    img.src = src;
    img.removeAttribute('data-src'); // Clean up the attribute
};

// Create the Intersection Observer
const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the image is intersecting the viewport
        if (entry.isIntersecting) {
            preloadImage(entry.target);
            // Stop observing the image once it has been loaded
            observer.unobserve(entry.target);
        }
    });
}, imgOptions);

// Observe each lazy-load image
lazyImages.forEach(image => {
    imgObserver.observe(image);
});
});