const sending = ({formId}) => {
    const form = document.getElementById(formId);

    let firstInput = document.querySelector('#name');
    let secondInput = document.querySelector('#num');

    const clean = () => {
        setTimeout(() => {
            firstInput.value = '';
            secondInput.value = '';
        }, 200);
    };
    const sendData = (data = {}) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            },
        }).then(response => response.json());
    };

    firstInput.addEventListener('input', () => {
        firstInput.value = firstInput.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
    });
    secondInput.addEventListener('input', () => {
        secondInput.value = secondInput.value.replace(/[^\d\+]/, '');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const formBody = {} ;

        formData.forEach((val, key)  => {
            formBody[key] = val;
        });

        if (firstInput.value === '') {
            alert ('Ошибка! Введите имя');
        } else if (secondInput.value === '') {
            alert ('Ошибка! Введите номер');
        } else {
            sendData(formBody);
            alert('идет отправка');
            clean();
            alert('отправлено');
        }
    });
};

export default sending;