const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

        // Close others (optional professional behavior)
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});

const filters = document.querySelectorAll('.filter-wrapper');
const groups = document.querySelectorAll('.faq-group');

filters.forEach(filter => {
    filter.addEventListener('click', () => {

        const category = filter.dataset.category;

        // Remove active from all filters
        filters.forEach(f => f.classList.remove('active-filter'));

        // Hide all groups
        groups.forEach(group => {
            group.classList.remove('active-group');
        });

        // Activate clicked filter
        filter.classList.add('active-filter');

        // Show matching group
        document
            .querySelector(`.faq-group[data-category="${category}"]`)
            .classList.add('active-group');
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("form-id");
  select.selectedIndex = -1; // first option (placeholder)
});

const heroTitle = document.querySelector('.hero-title');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    const maxFontSize = 15; // in vw, original size
    const minFontSize = 6;  // in vw, minimum size after scrolling

    // Calculate new font size
    let newFontSize = maxFontSize - (scrollY / 20); // adjust divisor to control speed
    if (newFontSize < minFontSize) newFontSize = minFontSize;
    if (newFontSize > maxFontSize) newFontSize = maxFontSize;

    heroTitle.style.fontSize = `${newFontSize}vw`;
});


const editorialTab = document.getElementById('editorial-tab');
const editorialPage = document.querySelector('.editorial-hover-page');
const hoerableArea = document.querySelector('.hoverable-area');
const hoverableArea = document.querySelector('.hoverable-area-2');

let hoverTimeout;

// Show the page when hovering over nav tab
editorialTab.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);
    editorialPage.classList.add('active');
});

// Hide the page when leaving the nav tab (with a slight delay)
hoerableArea.addEventListener('mouseleave', () => {
    hoverTimeout = setTimeout(() => {
        if (!editorialPage.matches(':hover')) {
            editorialPage.classList.remove('active');
        }
    }, 100);
});

// Keep the page visible while hovering over it
hoerableArea.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);
});

// Hide the page when leaving it
hoerableArea.addEventListener('mouseleave', () => {
    editorialPage.classList.remove('active');
});


const mobileNav = document.querySelector('.mobile-nav-center svg');
const overlay = document.getElementById('mobileOverlay');

mobileNav.addEventListener('click', () => {
    overlay.classList.toggle('active');
    mobileNav.classList.toggle('close-icon');
});

const editorialMobile = document.getElementById('editorialMobile');
const editorialSubmenu = document.getElementById('editorialSubmenu');

editorialMobile.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior
    editorialMobile.classList.toggle('active');
    editorialSubmenu.classList.toggle('active');
});
