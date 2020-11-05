let hamburger = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobile-nav');
let mobileMenuBg = document.querySelector('.mobile-nav-bg');
let header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-nav-active');
    hamburger.classList.toggle('hamburger-close');
    mobileMenuBg.classList.toggle('mobile-nav-bg-active');
    header.style.position = "fixed";
});

mobileMenuBg.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-nav-active');
    hamburger.classList.remove('hamburger-close');
    mobileMenuBg.classList.remove('mobile-nav-bg-active');
    header.style.position = "relative";
});
