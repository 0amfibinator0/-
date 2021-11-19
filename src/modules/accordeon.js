const accordeon = () => {
    const elems = document.querySelectorAll('.accordeon > .element');
    const accordeon = document.querySelector('.accordeon');

    accordeon.addEventListener('click', ({target}) => {
        if (target.closest('.element')) {
            const el = target.closest('.element');

            elems.forEach((el) => {
                el.classList.remove('active');
            });
            el.classList.add('active');
        }
    });
};

export default accordeon; 

