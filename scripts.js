function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');

    mobileNav.classList.toggle('open');
    overlay.classList.toggle('active');
}
