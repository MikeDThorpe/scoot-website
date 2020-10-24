var hamburger = document.querySelector('.hamburger');
var mobileMenu = document.querySelector('.mobile-nav');
var mobileMenuBg = document.querySelector('.mobile-nav-bg');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-nav-active');
    hamburger.classList.toggle('hamburger-close');
    mobileMenuBg.classList.toggle('mobile-nav-bg-active');
});

mobileMenuBg.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-nav-active');
    hamburger.classList.remove('hamburger-close');
    hamburger.
    mobileMenuBg.classList.remove('mobile-nav-bg-active');
});
