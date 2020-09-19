const headerIcon = document.querySelector('.header__icon');
const headerNav = document.querySelector('.header__nav');
const headerLines = document.querySelector('.header__lines');
let navOpened = false;

function openNav() {
    if (navOpened) {
        navOpened = false;
        headerNav.style.display = "none";
        headerNav.classList.add("active");
    } else {
        navOpened = true;
        headerNav.style.display = "flex";
        headerNav.classList.remove("active");
    }
}

headerIcon.onclick = openNav;