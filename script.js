//  change nav style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});

var swiper = new Swiper(".mySwiper", {
    slidePerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    const scroll = new SmoothScroll('a[href=*"#"]', {
        speed: 800,
        speedAsDuration: true,
        easing: 'easeInOutCubic'
    });

    // Collapse Navbar when clicked on mobile
    const navLinks = document.querySelectorAll('.navbar-nav li a');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Auto close Bootstrap 5 dropdown menu on clicking outside
    const dropdownMenus = document.querySelectorAll('.dropdown');

    window.addEventListener('click', (e) => {
        dropdownMenus.forEach(menu => {
            if (!menu.contains(e.target)) {
                const isOpen = menu.classList.contains('show');
                if (isOpen) {
                    menu.classList.remove('show');
                }
            }
        });
    });
});

    // Initialize the carousel slider when the document is ready
    document.addEventListener("DOMContentLoaded", function() {
        // Get all carousel sliders
        var carousels = document.querySelectorAll('.carousel-slider');

        // Loop through each carousel slider
        carousels.forEach(function(carousel) {
            // Initialize the carousel with Bootstrap's carousel component
            var carouselInstance = new bootstrap.Carousel(carousel, {
                interval: false // Disable automatic sliding
            });

            // Add event listeners to the navigation buttons to control the carousel
            var prevButton = carousel.querySelector('.carousel-control-prev');
            var nextButton = carousel.querySelector('.carousel-control-next');

            prevButton.addEventListener('click', function() {
                carouselInstance.prev(); // Move to the previous slide
            });

            nextButton.addEventListener('click', function() {
                carouselInstance.next(); // Move to the next slide
            });
        });
    });
