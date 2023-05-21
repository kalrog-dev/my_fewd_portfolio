// Responsive navigation
const menuBtn = document.querySelector('.nav-menu-btn');
const nav = document.querySelector('.nav-main');
const navItems = document.querySelectorAll('.nav-item');

// Collapse or expand navigation when the menu icon is clicked
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuBtn.classList.toggle('close');
});

// Collapse navigation when a link is clicked
navItems.forEach(e => {
    e.addEventListener('click', () => {
        nav.classList.toggle('show');
        menuBtn.classList.toggle('close');
    });
});