// Mobile Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const body = document.body;

    // Toggle mobile menu
    function toggleMenu() {
        hamburgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    // Close mobile menu
    function closeMenu() {
        hamburgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
    }

    // Toggle menu when hamburger is clicked
    hamburgerMenu.addEventListener('click', toggleMenu);

    // Close menu when overlay is clicked
    mobileMenuOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking on a link
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(function(item) {
        item.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburgerMenu.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 1023) {
                closeMenu();
            }
        }, 250);
    });

    // Handle escape key to close menu
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
});

