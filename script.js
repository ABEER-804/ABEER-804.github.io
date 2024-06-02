    const sections = document.querySelectorAll('.section');

        function checkPosition() {
            sections.forEach(section => {
                const slideInAt = (window.scrollY + window.innerHeight) - section.offsetHeight / 2;
                const sectionBottom = section.offsetTop + section.offsetHeight;
                const isHalfShown = slideInAt > section.offsetTop;
                const isNotScrolledPast = window.scrollY < sectionBottom;

                if (isHalfShown && isNotScrolledPast) {
                    section.classList.add('animated');
                } else {
                    section.classList.remove('animated');
                }
            });
        }

        window.addEventListener('scroll', checkPosition);