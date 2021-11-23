const links = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');

    anchors.forEach((el) => {
        el.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = el.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
};

export default links;