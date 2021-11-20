const scrollUp = () => {
    let screenY = window.innerHeight / 2;
    let btn = document.querySelector(".up");

    window.onscroll = function() {
        if (window.scrollY > screenY) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    };

    btn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
};

export default scrollUp;