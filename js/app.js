// Responsive navigation
const menuIcon = document.querySelector('.nav-menu-icon');
const nav = document.querySelector('.nav-main');
const navItems = document.querySelectorAll('.nav-item');

// Collapse or expand navigation when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Collapse navigation when a link is clicked
navItems.forEach(e => {
    e.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});