const aboutSection = document.getElementById('about');

function checkPosition() {
    const slideInAt = (window.scrollY + window.innerHeight) - aboutSection.offsetHeight / 2;
    const sectionBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
    const isHalfShown = slideInAt > aboutSection.offsetTop;
    const isNotScrolledPast = window.scrollY < sectionBottom;

    if (isHalfShown && isNotScrolledPast) {
        aboutSection.classList.add('animated');
    } else {
        aboutSection.classList.remove('animated');
    }
}

window.addEventListener('scroll', checkPosition);