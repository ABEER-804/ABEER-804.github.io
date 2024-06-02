document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const topVisible = rect.top <= windowHeight;
            if (topVisible) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    checkVisibility(); // Check on page load
});
