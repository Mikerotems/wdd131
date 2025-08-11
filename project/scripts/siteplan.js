document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    const modifiedSpan = document.getElementById('last-modified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    modifiedSpan.textContent = lastModified;
})
// Function to handle the click event on the hamburger menu
const hamburger = document.getElementById("harmburger");
const navigation = document.getElementById("navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");

    // Toggle hamburger icon to X and back
    if (navigation.classList.contains("show")) {
        hamburger.innerHTML = "✖";
    } else {
        hamburger.innerHTML = "☰";
    }
})