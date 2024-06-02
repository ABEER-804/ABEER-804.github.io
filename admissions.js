document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('section');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSections() {
        for (var i = 0; i < sections.length; i++) {
            if (isElementInViewport(sections[i])) {
                sections[i].classList.add('animated');
            }
        }
    }

    window.addEventListener('scroll', animateSections);
    animateSections();
});
