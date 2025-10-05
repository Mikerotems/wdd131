document.addEventListener('DOMContentLoaded', () => {
    // Footer year and last modified
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Hamburger menu
    const hamburger = document.getElementById("harmburger");
    const navigation = document.getElementById("navigation");
    hamburger.addEventListener("click", () => {
        navigation.classList.toggle("show");
        hamburger.innerHTML = navigation.classList.contains("show") ? "✖" : "☰";
    });

    // Temple data
    const temples = [
        // ...temple objects as before...
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Lagos Nigeria",
            location: "Lagos, Nigeria",
            dedicated: "2025, May, 10",
            area: 19800,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple/lagos-nigeria-temple-58577.jpg"
        },
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-8210.jpg"
        },
        {
            templeName: "Accra Ghana",
            location: "Accra, Ghana",
            dedicated: "2004, January, 11",
            area: 17500,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-8210.jpg"
        },
    ];

    // Display function
    const container = document.getElementById("templeCardsContainer");
    function displayTemples(list) {
        container.innerHTML = "";
        list.forEach(temple => {
            const card = document.createElement("div");
            card.className = "temple-card";
            card.innerHTML = `
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="300"/>
            `;
            container.appendChild(card);
        });
    }

    // Filtering function
    function filterTemples(criteria) {
        switch (criteria) {
            case 'Old':
                return temples.filter(t => {
                    const year = parseInt(t.dedicated.split(',')[0]);
                    return year < 1900;
                });
            case 'New':
                return temples.filter(t => {
                    const year = parseInt(t.dedicated.split(',')[0]);
                    return year > 2000;
                });
            case 'Large':
                return temples.filter(t => t.area > 90000);
            case 'Small':
                return temples.filter(t => t.area < 10000);
            default:
                return temples;
        }
    }

    // Navigation click handler
    navigation.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const filter = e.target.parentElement.id;
            const filtered = filterTemples(filter);
            displayTemples(filtered);
        }
    });

    // Initial display
    displayTemples(temples);
});