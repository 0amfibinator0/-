const mainSlider = () => {
    const slides = document.querySelectorAll('.table');
    const topSlider = document.querySelector('.top-slider');

    let dots = document.querySelectorAll('.slick-dots > li');
    let currentSlide = 0;
    let interval;

    let dotsList = document.createElement('ul');
    dotsList.classList.add('slick-dots');
    topSlider.appendChild(dotsList);

    const dotsCreate = (i = 0) => {
        do {
            let li = document.createElement('li');
            li.classList.add('dot');
            dotsList.appendChild(li);
            dots = document.querySelectorAll('.slick-dots > li');
            
            if (i === 0) {
                li.classList.add('slick-active');
            }
            
            i++;
        } while (i <= slides.length - 1);
    };

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'slick-active');

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'slick-active');
    };

    const startSlide = (timer = 3000) => {
        interval = setInterval(autoSlide, timer);
    };

    topSlider.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot')) {
            return;
        }

        prevSlide(slides, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'slick-active');

        if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'slick-active');
    });

    dotsCreate();
    startSlide(3000);
};
export default mainSlider;