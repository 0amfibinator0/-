const modal = () => {
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.getElementById('callback');
    const btn = document.querySelectorAll('.callback-btn');
    const secondBtn = document.querySelector('.button-services');
    const closeBtn = document.querySelector('.modal-close');
    const sliderBlock = document.querySelector('.services-elements');

    btn.forEach((el) => {
        el.addEventListener('click', () => {
            overlay.style.display = 'block';
            modal.style.display = 'block';
        });
    });
    secondBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
        modal.style.display = 'block';
    });
    sliderBlock.addEventListener('click', ({target}) => {
        if (target.closest('.absolute')) {
            overlay.style.display = 'block';
            modal.style.display = 'block';
        }
    });
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    });
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    });
};

export default modal;