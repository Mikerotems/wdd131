
// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate select options
const selectElement = document.getElementById("productSelect");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;       // value field = id
    option.textContent = product.name; // display = name
    selectElement.appendChild(option);
});

// Track review submissions using localStorage
function updateReviewCounter() {
    let count = localStorage.getItem("reviewCount");
    if (!count) {
        count = 0;
    }
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCounter").textContent =
        `You have submitted ${count} review(s).`;
}

// Run counter update when page loads (after form submission redirect)
window.onload = updateReviewCounter;

// Prevent default form submission for demo purposes
document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted! Page would reload here.");
    // Simulate reload
    location.reload();
});


document.addEventListener("DOMContentLoaded", function () {

    const currentYear = new Date().getFullYear();
    document.querySelector("footer p:nth-of-type(1)").innerHTML = `&copy; ${currentYear} Michael Ademola Oluwarotimi - Nigeria`;

    const lastModified = document.lastModified;
    document.querySelector("footer p:nth-of-type(2)").innerHTML = `Last Modified: ${lastModified}`;
})

