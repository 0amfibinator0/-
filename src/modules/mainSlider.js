const mainSlider = () => {
    const slides = document.querySelectorAll('.table');

    let currentSlide = 0;
    let interval;

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'active');

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'active');
    };

    const startSlide = (timer = 3000) => {
        interval = setInterval(autoSlide, timer);
    };

    startSlide(3000);
};
export default mainSlider;